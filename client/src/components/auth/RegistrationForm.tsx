import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import { AppleIcon, GoogleIcon } from "./Icons"
import { Separator } from "../ui/separator"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ChevronRightIcon } from "lucide-react"
import { signup } from "@/api/auth/signup"
import { toast } from "sonner"
import { Spinner } from "../ui/spinner"

export default function RegistrationForm() {

    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [isLoading, setLoading] = useState(false);

    const handleCreateAccount = async () => {
        // Reset errors
        setErrors({ username: "", email: "", password: "" });

        // Validate form values
        const username = (document.getElementById("username") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const password = (document.getElementById("password") as HTMLInputElement).value;

        let hasError = false;

        if (!username) {
            setErrors(prev => ({ ...prev, username: "Username is required" }));
            hasError = true;
        }
        if (!email) {
            setErrors(prev => ({ ...prev, email: "Email is required" }));
            hasError = true;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setErrors(prev => ({ ...prev, email: "Email is invalid" }));
            hasError = true;
        }
        if (!password) {
            setErrors(prev => ({ ...prev, password: "Password is required" }));
            hasError = true;
        } else if (password.length < 8) {
            setErrors(prev => ({ ...prev, password: "Password must be at least 8 characters" }));
            hasError = true;
        }

        try {

            if (!hasError) {
                setLoading(true);

                await signup({
                    name: username,
                    email,
                    password,
                })

                toast.success("Account created successfully!");
                navigate("/globe");
            }

        } catch (error) {
            console.error("Signup error:", error);
            toast.error("Failed to create account.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full h-full flex flex-col items-start justify-center p-5 md:px-40 gap-6">
            {/* Text */}
            <div className="w-full flex flex-col gap-3">
                <h1 className="text-2xl md:text-3xl font-bold text-zinc-900">Create an account</h1>
                <p className="text-md md:text-xs text-clip text-zinc-400">Get early access to mapswapp, early updates and start to crate your passport from now</p>
            </div>
            {/* Social Auth */}
            <div className="w-full flex flex-row justify-center gap-3">
                <Button
                    variant="outline"
                    className="w-1/2 py-6">
                    <GoogleIcon />
                    Google
                </Button>
                <Button
                    variant="outline"
                    className="w-1/2 py-6">
                    <AppleIcon />
                    Apple
                </Button>
            </div>
            <Separator />
            {/* Form */}
            <FieldSet className="w-full">
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="username">Username</FieldLabel>
                        <Input
                            id="username"
                            type="text"
                            placeholder="Max Leiter"
                            className="p-6" />
                        <FieldError className="text-xs">
                            {errors.username}
                        </FieldError>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input
                            id="email"
                            type="email"
                            placeholder="max.leiter@example.com"
                            className="p-6" />
                        <FieldError className="text-xs">
                            {errors.email}
                        </FieldError>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className="p-6" />
                        <FieldError className="text-xs">
                            {errors.password}
                        </FieldError>
                    </Field>
                </FieldGroup>
            </FieldSet>
            <Button
                onClick={handleCreateAccount}
                disabled={isLoading}
                className="w-full p-6 hover:scale-95 transition-all duration-300">
                {isLoading
                    ? (<span className="flex items-center justify-center">Creating account...<Spinner className="ml-2" /></span>)
                    : (<span className="flex items-center justify-center">Create account <ChevronRightIcon className="ml-2" /></span>)
                }
            </Button>
            <p className="text-md md:text-xs text-balance text-zinc-500">Already have an account? <Link to="/login" className="text-blue-500">Log in</Link></p>
        </div>
    )
}

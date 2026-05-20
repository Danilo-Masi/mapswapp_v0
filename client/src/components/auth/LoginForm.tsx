import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ChevronRightIcon } from "lucide-react"
import { signin } from "@/api/auth/singin"
import { toast } from "sonner"
import { Spinner } from "../ui/spinner"
import { getCurrentUser } from "@/api/auth/me"
import { useAuth } from "@/context/AuthContext"

export default function LoginForm() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const [isLoading, setLoading] = useState(false);

    const auth = useAuth();

    const handleSignin = async () => {
        // Reset errors
        setErrors({ email: "", password: "" });

        // Validate form values
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const password = (document.getElementById("password") as HTMLInputElement).value;

        let hasError = false;

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

                await signin({
                    email,
                    password,
                });

                const me: any = await getCurrentUser();

                auth?.setUser?.(me.user);

                toast.success("Logged in successfully!");
                navigate("/globe", { replace: true });
            }

        } catch (error) {
            console.error("Signin error:", error);
            toast.error("Failed to sign in. Try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full h-full flex flex-col items-start justify-center px-5 md:px-40 gap-6">
            {/* Text */}
            <div className="w-full flex flex-col gap-3">
                <h1 className="text-2xl md:text-3xl font-bold text-zinc-900">Log in to your account</h1>
                <p className="text-md md:text-xs text-clip text-zinc-400">Get early access to mapswapp, early updates and start to crate your passport from now</p>
            </div>
            <Separator />
            {/* Form */}
            <FieldSet className="w-full">
                <FieldGroup>
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
                onClick={handleSignin}
                disabled={isLoading}
                className="w-full p-6 hover:scale-95 transition-all duration-300">
                {isLoading
                    ? (<span className="flex items-center justify-center">Signing in...<Spinner className="ml-2" /></span>)
                    : (<span className="flex items-center justify-center">Sign in <ChevronRightIcon className="ml-2" /></span>)
                }
            </Button>
            <p className="text-md md:text-xs text-balance text-zinc-500">Don't have an account? <Link to="/registration" className="text-blue-500">Create account</Link></p>
        </div>
    )
}

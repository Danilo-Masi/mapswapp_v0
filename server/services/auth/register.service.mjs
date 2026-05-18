import { supabase } from "../../config/supabase.mjs";

export async function registerUser({ name, email, password }) {

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name,
            }
        }
    });

    if (error) {
        throw new Error(error.message);
    }

    return data;
}
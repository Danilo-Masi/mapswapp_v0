import { supabase } from "../../config/supabase.mjs";

export async function loginUser({ email, password }) {

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        throw new Error(error.message);
    }

    return data;
}
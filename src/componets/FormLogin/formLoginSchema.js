import { z } from "zod";

export const formLoginSchema = z.object({
    email: z.string().min("E-mail e obrigatorio").email("forneca um email valido"),
    password: z.string().min(8, "Minimo de oito caracteres")

})
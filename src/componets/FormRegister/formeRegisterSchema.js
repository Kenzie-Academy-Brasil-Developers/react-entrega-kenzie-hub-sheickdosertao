import { z } from "zod";


export const formRegisterSchema = z.object({
    name: z.string().min(1, "nome e obrigatorio"),
    email: z.string().min(1, "email e obrigatorio").email("digite um email valido"),
    contact: z.string().min(1, "Telefo ou email"),
    password: z.string().min(8, " tem que ter no minimo 8 caracter").regex(/[a-z]+/).regex(/[A-Z]+/).regex(/[0-9]+/),
    confirmpassword: z.string().min(1, "esse campo e obrigatorio"),
    bio: z.string().min(50, { message: "e obrigatório no minimo 50 caracteres"} ),
    course_module: z.string().min(1, { message: "e obrigatório"}),
})
.refine(({password, confirmpassword}) => password === confirmpassword, {
    message: "Senha nao coresponde",
    path: ["Confirmpassword"],
});
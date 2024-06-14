import { HeaderRegister } from "../HeaderRegistre";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formRegisterSchema } from "./formeRegisterSchema";
import { api } from './../../service/api';
import { useState } from "react";




export const FormRegister = () => {

     const [loading, setLoading] = useState(false);


    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(formRegisterSchema),
    });

    const submit = (formData) => {
        userRegister(formData)
    };


    const userRegister = async ({ name, email, password, bio, contact, course_module }) => {

        try {
            setLoading(true);
             const response =  await api.post("/users", { name, email, password, bio, contact, course_module });
        } catch (error) {
             console.log(errors);
        }finally{
            setLoading(false);
        }
     

    };
 
   

    return(
    <>
        <HeaderRegister/>
        <h1>Crie sua conta</h1>
        <p>Rapido e gratis, vamos nessa</p>
        <form onSubmit={handleSubmit(submit)} noValidate>
            <div>
                
                <Input type="text" label="Nome" errors={errors.name} placeholder="Digite aqui nome" {...register("name")} />
                <Input type="email" errors={errors.email} label="E-mail" placeholder="Digite aqui seu email" {...register("email")}/>
                <Input type="password" errors={errors.password} label="Senha" placeholder="Digite aqui sua senha" {...register("password")}/>
                <Input type="password" errors={errors.confirmpassword} label="Confirmar Senha" placeholder="Digite novamente a sua Senha" {...register("confirmpassword")}/>
                <label htmlFor="textareaStart">Bio</label>
                <textarea name="textareaStart" errors={errors.bio} id="textareaStart" {...register("bio")} placeholder="Fale sobre voce"></textarea>
                
                <Input type="text" errors={errors.contact} label="Contato" placeholder="Opcao de contato" {...register("contact")} />
                <label htmlFor="couser_module">Selecionar modulo</label>
                <select name="couser_module" errors={errors.course_module}  id="course_module" {...register("course_module")}>
                    <option value="">Escolha o module</option>
                    <option value="opcao1">Primeiro módulo (Introdução ao Frontend)</option>
                    <option value="opcao2">Segundo módulo (Frontend Avançado)</option>
                    <option value="opcao3">Terceiro módulo (Introdução ao Backend)</option>
                    <option value="opcao4">Quarto módulo (Backend Avançado)</option>
                </select>
                 {errors.selecStart && <p>{selectStart.message}</p>}
                

            
                 <button type="submit">{loading ? "Cadastrando" : "Cadastrar" }</button>
                
            
               
               
            </div>
        </form>
    </>
       
    )
};
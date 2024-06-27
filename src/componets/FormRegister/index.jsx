import { HeaderRegister } from "../HeaderRegistre";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formRegisterSchema } from "./formeRegisterSchema";
import { api } from './../../service/api';
import {    useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./Style.module.scss";
import {  ToastContainer ,  toast }  from 'react-toastify' ;
import  'react-toastify/dist/ReactToastify.css' ;


export const FormRegister = () => {
   
   const [loading, setLoading] = useState(false);
   
   const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(formRegisterSchema),
    });
   
    const navigate = useNavigate();

    const submit = (formData ) => {
        userRegister(formData);
    };
  


    const notify = (errors, success) => {
      if (success) { 
        toast.success('Conta criada com sucesso!'+ (success.message || 'deu certo!'), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log("success", success);
      } else if (errors) {
        toast.error('Erro ao criar conta: ' + (errors.message || 'Erro desconhecido'), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log("Erro:", errors);
      }
    };

  
    

  const userRegister = async ({ name, email, password, bio, contact, course_module }) => {

        try {
            setLoading(true);
             const {data} =  await api.post("/users", { name, email, password, bio, contact, course_module });
            notify(null, data);
             navigate("/");
            
            } catch (error) {
             console.log(errors);
             notify(error);
            }finally{
            setLoading(false);
            }
 };
 
    return(
    <>
        <HeaderRegister/>
        <main className={Styles.man3}>
        
            <form className={Styles.form6} onSubmit={handleSubmit(submit)} noValidate>
                    <h1 className={Styles.h1T}>Crie sua conta</h1>
                    <p className={Styles.pS}>Rapido e gratis, vamos nessa</p>
                    
                    <div className={Styles.div9}>
                        
                        <Input  type="text" label="Nome" errors={errors.name} placeholder="Digite aqui nome" {...register("name")} />
                        <Input type="email"  errors={errors.email} label="E-mail" placeholder="Digite aqui seu email" {...register("email")}/>
                        <Input type="password"  errors={errors.password} label="Senha" placeholder="Digite aqui sua senha" {...register("password")}/>
                        <Input type="password" errors={errors.confirmpassword} label="Confirmar Senha" placeholder="Digite novamente a sua Senha" {...register("confirmpassword")}/>
                        <label className={Styles.label5} htmlFor="textareaStart">Bio</label>
                        <textarea className={Styles.textarea1} name="textareaStart" errors={errors.bio} id="textareaStart" {...register("bio")} placeholder="Fale sobre voce"></textarea>
                        
                        <Input type="text" errors={errors.contact} label="Contato" placeholder="Opcao de contato" {...register("contact")} />
                        <label className={Styles.label5} htmlFor="couser_module">Selecionar modulo</label>
                        <select className={Styles.select1} name="couser_module" errors={errors.course_module}  id="course_module" {...register("course_module")}>
                            <option value="">Escolha o module</option>
                            <option value="(Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                            <option value="(Frontend Avançado)2">Segundo módulo (Frontend Avançado)</option>
                            <option value="(Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                            <option value="(Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                        </select>
                    
                        <button  className={Styles.buton12} type="submit" > {loading ? "Cadastrando" : "Cadastrar" }</button>
                       
                        < ToastContainer
                              theme="colored"
                              position="top-center"
                              autoClose={8000}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClickrtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover />
                  </div>
                </form>
                
        </main>
 </>
       );
};
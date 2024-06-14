import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { formLoginSchema } from "./formLoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input"
import { api } from './../../service/api';



export const FormLogin = ({setUsuario}) => {

  const { register, handleSubmit, formState: { errors} } = useForm({
    resolver: zodResolver(formLoginSchema),
  });

  const Submit = (loginData) => {
    userLogin(loginData);

  };


  const userLogin = async (loginData) => {
    try {
      const respose = await api.post("/sessions", loginData);
      setUsuario(respose);
    } catch (error) {
      console.log(error);
    }
    
    
  };
    return(
        
          <form onSubmit={handleSubmit(Submit)} noValidate>
            <h1>Login</h1>
            <div>
               <Input type="email" label="E-mail" errors={errors.email} placeholder="Digite seu email" {...register("email")} />
               <Input type="password" label="Senha" errors={errors.password} placeholder="Digite sua senha" {...register("password")}/>
               <button type="submit">Entra</button>
            </div>
            <div>
              <p>Ainda nao possui uma conta?</p>
              <Link to="/register">
              <button>Cadastre-se</button>
              </Link>
            </div>
          </form>
        
    );
};
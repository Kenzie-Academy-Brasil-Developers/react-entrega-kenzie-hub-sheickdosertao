import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { formLoginSchema } from "./formLoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputPassword } from "../InputPassword"
import { Input } from "../Input";
import { api } from './../../service/api';
import Styles from "./Style.module.scss"



export const FormLogin = ({setUser}) => {


  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors} } = useForm({
    resolver: zodResolver(formLoginSchema),
  });

  const Submit = (loginData) => {
    userLogin(loginData);

  };


  const userLogin = async (loginData) => {
    try {
      const {data} = await api.post("/sessions", loginData);
      setUser(data.user);
      

      localStorage.setItem("@logado", data.token);
      navigate("/dashboard")
    } catch (error) {
      console.log(error);
    }
    
    
  };
    return(
        
          <form className={Styles.form1} onSubmit={handleSubmit(Submit)} noValidate>
            <h1 className={Styles.h11}>Login</h1>
            <div className={Styles.div2}>
               <Input  type="email" label="E-mail" errors={errors.email} placeholder="Digite seu email" {...register("email")} />
               <InputPassword label="Senha" errors={errors.password} placeholder="Digite sua senha" {...register("password")}/>
               <button className={Styles.buton1} type="submit">Entrar</button>
            </div>
            <div className={Styles.div6}>
              <p className={Styles.p1lp}>Ainda nao possui uma conta?</p>
              <Link to="/register">
              <button className={Styles.buton2b}>Cadastre-se</button>
              </Link>
            </div>
          </form>
        
    );
};
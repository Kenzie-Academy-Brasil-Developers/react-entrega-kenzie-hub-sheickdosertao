import { FormLogin } from "../../componets/FormLogin"
import { HeaderLogin } from "../../componets/HeaderLogin"
import Styles from "./Style.module.scss";

export const Login = ({setUser}) => {
    return(
      <>
      
        <HeaderLogin/>
        <main className={Styles.man}>
               <FormLogin setUser={setUser}/>
        </main>
      </>
      
   
    )
}
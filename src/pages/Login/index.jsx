import { FormLogin } from "../../componets/FormLogin"
import { HeaderLogin } from "../../componets/HeaderLogin"

export const Login = ({setUsuario}) => {
    return(
        <>
          <HeaderLogin/>
          <FormLogin setUsuario={setUsuario}/>
        </>
    )
}
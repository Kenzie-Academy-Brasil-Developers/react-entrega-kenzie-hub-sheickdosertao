
import Styles from "./Style.module.scss"
import Svg from "../../assets/icon1/Logo.svg";
import { useNavigate } from 'react-router-dom';



export const HeaderDashboard = ({setUser}) => {

    const navigate = useNavigate();


    const logout = () => {
        setUser(null);
        localStorage.removeItem("@logado");
        navigate("/");

    };
    



    return(
        <header className={Styles.header10}>
            <div className={Styles.divHeader}>
                <img className={Styles.imagem44} src={Svg} alt="Kenzie Hub" />
                <button className={Styles.buton7} onClick={logout}>Sair</button>
            </div>
        </header>
    )
};
import { Link } from "react-router-dom";
import Svg  from "../../assets/icon1/Logo.svg"
import Styles from "./Style.module.scss"

export const HeaderRegister = () => {
    return(
        <header className={Styles.headerRegister}>
            <img className={Styles.img2} src={Svg} alt="Kenzie Hub" />
            <Link to="/">
             <button className={Styles.buton66} >Volta</button>
            </Link>
           
        </header>
    )
};
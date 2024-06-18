import svg from "../../assets/icon1/Logo.svg";
import Styles from "./Style.module.scss"

export const HeaderLogin = () => {
    return(
        <header className={Styles.headerLogin}>
            <img src={svg} alt="" />
        </header>
    )
};
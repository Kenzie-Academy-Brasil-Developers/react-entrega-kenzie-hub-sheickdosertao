import { Link } from "react-router-dom";
import Svg  from "../../assets/icon1/Logo.svg"
export const HeaderRegister = () => {
    return(
        <header>
            <img src={Svg} alt="Kenzie Hub" />
            <Link to="/">
             <button>Volta</button>
            </Link>
           
        </header>
    )
};
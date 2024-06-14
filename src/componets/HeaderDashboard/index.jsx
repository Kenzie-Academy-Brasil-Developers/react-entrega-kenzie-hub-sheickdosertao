import { Link } from "react-router-dom";
import Svg  from "../../assets/icon1/Logo.svg"
export const HeaderDashboard = () => {
    return(
        <header>
            <img src={Svg} alt="Kenzie Hub" />
            <Link to="/">
             <button>Sair</button>
            </Link>
           
        </header>
    )
};
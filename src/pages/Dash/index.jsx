import Styles from "./Style.module.scss"
import { HeaderDashboard } from './../../componets/HeaderDashboard/index';



export const Dashboard = ({user, setUser}) => {

    

    
     
    

    return(
        <>
        <HeaderDashboard setUser={setUser}/>
        <main className={Styles.man2}>
            <div className={Styles.div0}>
                
                    <p className={Styles.pName}> Ola, {user?.name}</p>
                    <p className={Styles.pCouse}>{user?.course_module}</p>
             
            </div>

            <h2 className={Styles.h2F}>Que pena! Estamos em desenvolvimento :(</h2>
            <p className={Styles.pF}>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </main>
       
        </>
    )
};
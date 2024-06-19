import { forwardRef, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import Styles from "./Style.module.scss";

export const InputPassword = forwardRef(({ label, errors, ...rest}, ref) => {
   const [abilities, setAbilities] = useState(true);
   
    return(
        <div className={Styles.div87}>
             <label className={Styles.label19}>{label}</label>
             <div className={Styles.md}>
                 <input  type={abilities ? "password" : "text"}  ref={ref} {...rest} />
                 <button className={Styles.btn}
                   type="button" onClick={() => setAbilities(!abilities)}>{abilities ? <MdVisibilityOff /> : <MdVisibility /> }</button>
             </div>
             
            {errors ? <p className={Styles.ppp7}>{errors.message}</p> : null}
        </div>
       
    );
});
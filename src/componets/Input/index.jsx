import { forwardRef } from "react";
import Styles from "./Style.module.scss"

export const Input = forwardRef(({ label, errors, ...rest}, ref) => {
    return(
        <div className={Styles.div77}>
             <label className={Styles.label1}>{label}</label>
            <input className={Styles.input5} ref={ref} {...rest} />
            {errors ? <p className={Styles.ppp}>{errors.message}</p> : null}
        </div>
       
    );
});
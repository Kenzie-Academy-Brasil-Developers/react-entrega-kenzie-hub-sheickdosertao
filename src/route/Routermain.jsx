import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dash";
import { useState } from "react";

export const RouterMain = () => {

    const [usuario, setUsuario] = useState({});

    console.log(usuario);

    return(
        <>
        <Routes>

            <Route path="/" element={<Login setUsuario={setUsuario}/>}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
 
        </Routes>
        </>
    )
};
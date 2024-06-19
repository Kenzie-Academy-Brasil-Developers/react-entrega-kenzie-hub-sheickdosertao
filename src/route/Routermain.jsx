import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dash";
import { useState } from "react";

export const RouterMain = () => {

    const [user, setUser] = useState({});

    


    return(
        <>
        <Routes>

            <Route path="/" element={<Login setUser={setUser}/>}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser}/>}/>
 
        </Routes>
        </>
    )
};
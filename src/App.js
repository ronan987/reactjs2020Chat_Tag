import React, { useState, useEffect } from "react";
import SignInSingUp from "./pages/SignInSingUp/SignInSingUp";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "./Utils/contexts";
import { isUserLogedApi } from "./api/auth";
import Routing from "./routes/Routing";

export default function App() {
    const [user, setUser] = useState(null);
    const [loadUser, setLoadUser] = useState(false);
    const [refreshCheckLogin, setRefreshCheckLogin] = useState(false);

    useEffect(() => {
        setUser(isUserLogedApi());
        setRefreshCheckLogin(false);
        setLoadUser(true);
    }, [refreshCheckLogin]);

    if (!loadUser) return null;

    return ( <
        AuthContext.Provider value = { user } > { " " } {
            user ? ( <
                Routing / >
            ) : ( <
                SignInSingUp setRefreshCheckLogin = { setRefreshCheckLogin }
                />
            )
        } { " " } <
        ToastContainer position = "bottom-center"
        autoClose = { 5000 }
        hideProgressBar newestOnTop = { false }
        closeOnClick rtl = { false }
        pauseOnVisibilityChange draggable pauseOnHover /
        >
        <
        /AuthContext.Provider>
    );

    //if (user) {
    //return (
    //<div>
    //<h1> Se encuentra logeado </h1>{" "}
    //</div>
    //);
    //} else {
    //return (
    //<div>
    //<h1> No se encuentra logeado </h1>{" "}
    //</div>
    //);
    //}
}
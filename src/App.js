import React, { useState } from "react";
import SignInSingUp from "./pages/SignInSingUp/SignInSingUp";

export default function App() {
    const [user, setUser] = useState({ name: "Ronald" });

    return ( <
        div > { " " } {
            user ? ( <
                di >
                <
                SignInSingUp / >
                <
                /di>
            ) : ( <
                h1 > No se encuentra logeado < /h1>
            )
        } { " " } <
        /div>
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
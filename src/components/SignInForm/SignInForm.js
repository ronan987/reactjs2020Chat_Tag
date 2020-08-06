import React from "react";
import { Form, Button, Spinner } from "react-bootstrap";

import "./SignInForm.scss";

export default function SignInForm() {
    const onsubmit = (e) => {
        e.preventDefault();
        console.log("login...");
    };
    return ( <
        div className = "sign-in-form" >
        <
        h2 > Ingresar < /h2>{" "} <
        Form onSubmit = { onsubmit } >
        <
        Form.Group >
        <
        Form.Control type = "email"
        placeholder = "correo electronico" / >
        <
        /Form.Group>{" "} <
        Form.Group >
        <
        Form.Control type = "password"
        placeholder = "contraseña" / >
        <
        /Form.Group>{" "} <
        Button variant = "primary"
        type = "submit" > { " " }
        Iniciar Sesión { " " } <
        /Button>{" "} <
        /Form>{" "} <
        /div>
    );
}
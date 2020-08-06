import React, { useState } from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";

import "./SignUpForm.scss";

export default function SignUpForm(props) {
    const { setShowModal } = props;

    const [formData, setFormData] = useState(initialFormValue());

    const onSubmit = (e) => {
        e.preventDefault();
        setShowModal(false);

        console.log(formData);
    };

    const onChange = (e) => {
        console.log();

        setFormData({...formData, [e.target.name]: e.target.value });
    };

    return ( <
        div className = "sign-up-form" >
        <
        h2 > Crea tu cuenta < /h2>{" "} <
        Form onSubmit = { onSubmit }
        onChange = { onChange } >
        <
        Form.Group >
        <
        Row >
        <
        Col >
        <
        Form.Control type = "text"
        placeholder = "usuario"
        name = "usuario"
        defaultValue = { formData.usuario }
        />{" "} <
        /Col>{" "} <
        /Row>{" "} <
        /Form.Group>{" "} <
        Form.Group >
        <
        Row >
        <
        Col >
        <
        Form.Control type = "text"
        placeholder = "Nombre"
        name = "Nombre"
        defaultValue = { formData.nombre }
        />{" "} <
        /Col>{" "} <
        /Row>{" "} <
        /Form.Group>{" "} <
        Form.Group >
        <
        Form.Control type = "email"
        placeholder = "Correo Electrónico"
        name = "email"
        defaultValue = { formData.email }
        />{" "} <
        /Form.Group>{" "} <
        Form.Group >
        <
        Row >
        <
        Col >
        <
        Form.Control type = "password"
        placeholder = "Contraseña"
        name = "password"
        defaultValue = { formData.password }
        />{" "} <
        /Col>{" "} <
        Col >
        <
        Form.Control type = "password"
        placeholder = "Confirmar Contraseña"
        name = "repeatpassword"
        defaultValue = { formData.repeatpassword }
        />{" "} <
        /Col>{" "} <
        /Row>{" "} <
        /Form.Group>{" "} <
        Button variant = "primary"
        type = "submit" >
        Registrate { " " } <
        /Button>{" "} <
        /Form>{" "} <
        /div>
    );
}

function initialFormValue() {
    return {
        usuario: "",
        nombre: "",
        apellidos: "",
        email: "",
        password: "",
        repeatpassword: "",
        borndata: "",
    };
}
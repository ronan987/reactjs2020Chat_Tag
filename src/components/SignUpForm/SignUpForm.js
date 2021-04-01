import React, { useState } from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import { isEmailValid } from "../../Utils/Validations";
import { signInApi } from "../../api/auth";

import "./SignUpForm.scss";

export default function SignUpForm(props) {
    const { setShowModal } = props;

    const [formData, setFormData] = useState(initialFormValue());
    const [signUpLoading, setSignUpLoading] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        //console.log(formData);
        let validCount = 0;
        values(formData).some((value) => {
            value && validCount++;
            return null;
        });
        //console.log(validCount);

        if (validCount !== size(formData)) {
            toast.warning("Debe completar todos los campos del formulario");
        } else {
            if (!isEmailValid(formData.email)) {
                toast.warning("Correo invalido");
            } else if (formData.password !== formData.repeatpassword) {
                toast.warning("La Contraseña debe ser iguales");
            } else if (size(formData.password) < 6) {
                toast.warning("la contraseña debe tener al menos 6 caracteres");
            } else {
                setSignUpLoading(true);
                signInApi(formData)
                    .then((response) => {
                        if (response.code) {
                            toast.warning(response.message);
                        } else {
                            console.log(response.token);
                            toast.success("Se ha registrado correctamente");
                            setShowModal(false);
                            setFormData(initialFormValue());
                        }
                    })
                    .catch(() => {
                        toast.error("Error servidor, intente más Tarde!");
                    })
                    .finally(() => {
                        setSignUpLoading(false);
                    });
            }
        }
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
        name = "nombre"
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
        type = "submit" > { " " } {!signUpLoading ? "Registrate" : < Spinner animation = "border" / > } { " " } <
        /Button>{" "} <
        /Form>{" "} <
        /div>
    );
}

function initialFormValue() {
    return {
        usuario: "",
        nombre: "",
        email: "",
        password: "",
        repeatpassword: "",
    };
}
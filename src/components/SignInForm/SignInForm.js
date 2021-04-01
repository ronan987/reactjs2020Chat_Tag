import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import { isEmailValid } from "../../Utils/Validations";
import { signInApi, setTokenApi } from "../../api/auth";

import "./SignInForm.scss";

export default function SignInForm(props) {
    const { setRefreshCheckLogin } = props;
    const [formData, setformData] = useState(initialFormValue());
    const [signInLoading, setsignInLoading] = useState(false);

    const onsubmit = (e) => {
        e.preventDefault();

        let validCount = 0;
        values(formData).some((value) => {
            value && validCount++;
            return null;
        });

        if (size(formData) !== validCount) {
            toast.warning("Debe completar todos los campos");
        } else {
            if (!isEmailValid(formData.email)) {
                toast.warning("Correo invalido");
            } else {
                setsignInLoading(true);
                signInApi(formData)
                    .then((response) => {
                        if (response.message) {
                            toast.warning(response.message);
                        } else {
                            setTokenApi(response.token);
                            // console.log(response.token);
                            setRefreshCheckLogin(true);
                        }
                    })
                    .catch(() => {
                        toast.error("Error del servidor, intentelo nuevamente más tarde");
                    })
                    .finally(() => {
                        setsignInLoading(false);
                    });
            }
        }
    };

    const onChange = (e) => {
        setformData({...formData, [e.target.name]: e.target.value });
    };

    return ( <
        div className = "sign-in-form" >
        <
        h2 > Ingresar < /h2>{" "} <
        Form onSubmit = { onsubmit }
        onChange = { onChange } >
        <
        Form.Group >
        <
        Form.Control type = "email"
        placeholder = "correo electronico"
        defaultValue = { formData.email }
        name = "email" /
        > { " " } <
        /Form.Group>{" "} <
        Form.Group >
        <
        Form.Control type = "password"
        placeholder = "contraseña"
        defaultValue = { formData.password }
        name = "password" /
        > { " " } <
        /Form.Group>{" "} <
        Button variant = "primary"
        type = "submit" > { " " } {
            !signInLoading ? (
                "Iniciar Sesión"
            ) : ( <
                Spinner animation = "border" / >
            )
        } { " " } <
        /Button>{" "} <
        /Form>{" "} <
        /div>
    );
}

function initialFormValue() {
    return {
        email: "",
        password: "",
    };
}
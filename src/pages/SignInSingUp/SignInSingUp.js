import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAddressCard,
    faUser,
    faComment,
    faPlay,
} from "@fortawesome/free-solid-svg-icons";
import BasicModal from "../../components/Modal/BasicModal";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";
//import LogoChattag from "../../assets/png/icon.png";
import LogoWhiteChattag from "../../assets/png/chat_tag.png";

import "./SignInSingUp.scss";

export default function SignInSingUp(props) {
    const { setRefreshCheckLogin } = props;
    const [showModal, setshowModal] = useState(false);
    const [contentModal, setContentModal] = useState(null);

    const openModal = (content) => {
        setshowModal(true);
        setContentModal(content);
    };
    return ( <
        >
        <
        Container className = "signin-signup"
        fluid >
        <
        Row >
        <
        Leftcomponents / >
        <
        Rightcomponents openModal = { openModal }
        setshowModal = { setshowModal }
        setRefreshCheckLogin = { setRefreshCheckLogin }
        />{" "} <
        /Row>{" "} <
        /Container>{" "} <
        BasicModal show = { showModal }
        setshow = { setshowModal } > { " " } { contentModal } { " " } <
        /BasicModal>{" "} <
        />
    );
}

function Leftcomponents() {
    return ( <
        Col className = "signin-signup__left"
        xs = { 6 } >
        <
        div >
        <
        h2 >
        <
        FontAwesomeIcon icon = { faComment }
        />
        Intensifica y personaliza tus interacciones. { " " } <
        /h2>{" "} <
        h2 >
        <
        FontAwesomeIcon icon = { faPlay }
        />
        Disfruta y comparte tu contenido favorito, tanto de amigos como de tus paginas favoritas. { " " } <
        /h2>{" "} <
        h2 >
        <
        FontAwesomeIcon icon = { faUser }
        />
        Disfruta de una forma más rapida, ágil y personalizada de interactuar con nuevas personas o tus amigos de siempre. { " " } <
        /h2>{" "} <
        /div>{" "} <
        /Col>
    );
}

function Rightcomponents(props) {
    const { openModal, setshowModal, setRefreshCheckLogin } = props;
    return ( <
            Col className = "signin-signup__right"
            xs = { 6 } >
            <
            div >
            <
            img src = { LogoWhiteChattag }
            alt = "Chattag" / >
            <
            h2 > { " " }
            No te pierdas de lo que están haciendo tus amigos y de los contenidos más vistos en este momento { " " } <
            /h2>{" "} <
            h3 > Únete a Chat - Tag < /h3>{" "} <
            Button variant = "primary"
            onClick = {
                () => openModal( < SignUpForm setshowModal = { setshowModal }
                    />)} >
                    Regístrate { " " } <
                    /Button>{" "} <
                    Button variant = "outline-primary"
                    onClick = {
                        () =>
                        openModal( <
                            SignInForm setRefreshCheckLogin = { setRefreshCheckLogin }
                            />
                        )
                    } >
                    Iniciar Sesión { " " } <
                    /Button>{" "} <
                    /div>{" "} <
                    /Col>
                );
            }
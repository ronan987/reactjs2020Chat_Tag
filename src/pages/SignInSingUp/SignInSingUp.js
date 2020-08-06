import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faComment } from "@fortawesome/free-solid-svg-icons";
import BasicModal from "../../components/Modal/BasicModal";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";
//import LogoChattag from "../../assets/png/icon.png";
import LogoWhiteChattag from "../../assets/png/chat_tag.png";

import "./SignInSingUp.scss";

export default function SignInSingUp() {
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
        FontAwesomeIcon icon = { faSearch }
        />
        El poder de la interacción. { " " } <
        /h2>{" "} <
        h2 >
        <
        FontAwesomeIcon icon = { faUser }
        />
        Comparte y dale Like a lo que más te guste. { " " } <
        /h2>{" "} <
        h2 >
        <
        FontAwesomeIcon icon = { faComment }
        />
        Enterate de lo que está hablando la gente. { " " } <
        /h2>{" "} <
        /div>{" "} <
        /Col>
    );
}

function Rightcomponents(props) {
    const { openModal, setshowModal } = props;
    return ( <
            Col className = "signin-signup__right"
            xs = { 6 } >
            <
            div >
            <
            img src = { LogoWhiteChattag }
            alt = "Chattag" / >
            <
            h2 > Observa lo que esta pasando en el mundo en este momento < /h2>{" "} <
            h3 > Únete a Chat - Tag < /h3>{" "} <
            Button variant = "primary"
            onClick = {
                () => openModal( < SignUpForm setshowModal = { setshowModal }
                    />)} >
                    Regístrate { " " } <
                    /Button>{" "} <
                    Button variant = "outline-primary"
                    onClick = {
                        () => openModal( < SignInForm / > ) } >
                    Iniciar Sesión { " " } <
                    /Button>{" "} <
                    /div>{" "} <
                    /Col>
                );
            }
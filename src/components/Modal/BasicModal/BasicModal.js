import React from "react";
import { Modal } from "react-bootstrap";
import LogoWhiteChattag from "../../../assets/png/chat_tag.png";

import "./BasicModal.scss";

export default function BasicModal(props) {
    const { show, setShow, children } = props;
    return ( <
        Modal className = "basic-modal"
        show = { show }
        onHide = {
            () => setShow(false) }
        centered size = "lg" >
        <
        Modal.Header >
        <
        Modal.Title >
        <
        img src = { LogoWhiteChattag }
        alt = "Chattag" / >
        <
        /Modal.Title>{" "} <
        /Modal.Header>{" "} <
        Modal.Body > { children } < /Modal.Body>{" "} <
        /Modal>
    );
}
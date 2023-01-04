import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterContainer, FooterHeader, FooterImage, FooterWrapper } from "./Footer.style";
import { faPinterest, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterHeader>Follow me to know my latest finds!</FooterHeader>
            <FooterContainer>
                <FooterImage href="https://www.instagram.com/mdixey17/">
                    <FontAwesomeIcon icon={faInstagram} size="2x" color="#fbad50"/>
                </FooterImage>
                <FooterImage href="https://www.pinterest.com/mdixey17/">
                    <FontAwesomeIcon icon={faPinterest} size="2x" color="#E60023"/>
                </FooterImage>
                <FooterImage href="https://www.tiktok.com/@titanhawk17">
                    <FontAwesomeIcon icon={faTiktok} size="2x" color="#ff0050"/>
                </FooterImage>
                <FooterImage href="https://www.youtube.com/channel/UCglLpH58CRfi660yU4wpe8w">
                    <FontAwesomeIcon icon={faYoutube} size="2x" color="#e62117"/>
                </FooterImage>
            </FooterContainer>
        </FooterWrapper>
    )
};

export default Footer;
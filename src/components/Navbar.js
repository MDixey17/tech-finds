import React, {useState} from "react";
import { NavbarText, NavbarInner, NavbarLink, NavbarLinkMobile, NavbarMenuButton, NavbarOuter, NavbarSocialLink, NavbarWrapper, NavCenterContainer, NavLeftContainer, NavLinkWrapper, NavRightContainer, NavbarMobileSocialLink } from "./Navbar.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterest, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useResolvedPath, useMatch } from "react-router-dom";

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false);

    const techPath = "/tech";
    const gamingPath = "/gaming";
    const decorPath = "/decor";

    const techResPath = useResolvedPath(techPath);
    const gamingResPath = useResolvedPath(gamingPath);
    const decorResPath = useResolvedPath(decorPath);

    const techMatch = useMatch( {path: techResPath.pathname, end: true} );
    const gamingMatch = useMatch( {path: gamingResPath.pathname, end: true} );
    const decorMatch = useMatch( {path: decorResPath.pathname, end: true} );

    return (
        <NavbarWrapper extendNav={mobileNav}>
            <NavbarInner>
                <NavLeftContainer>
                    <NavbarText><i>Matt's Tech Finds</i></NavbarText>
                </NavLeftContainer>
                <NavCenterContainer>
                    <NavLinkWrapper>
                        <NavbarLink to="/tech" className={techMatch ? "active" : ""}>Tech</NavbarLink>
                        <NavbarLink to="/gaming" className={gamingMatch ? "active" : ""}>Gaming</NavbarLink>
                        <NavbarLink to="/decor" className={decorMatch ? "active" : ""}>Decor</NavbarLink>
                    </NavLinkWrapper>
                </NavCenterContainer>
                <NavRightContainer>
                    <NavbarSocialLink href="https://www.instagram.com/mdixey17/">
                        <FontAwesomeIcon icon={faInstagram} size="2x" color="#fbad50"/>
                    </NavbarSocialLink>
                    <NavbarSocialLink href="https://www.pinterest.com/mdixey17/">
                        <FontAwesomeIcon icon={faPinterest} size="2x" color="#E60023"/>
                    </NavbarSocialLink>
                    <NavbarSocialLink href="https://www.tiktok.com/@titanhawk17">
                        <FontAwesomeIcon icon={faTiktok} size="2x" color="#ff0050"/>
                    </NavbarSocialLink>
                    <NavbarSocialLink href="https://www.youtube.com/channel/UCglLpH58CRfi660yU4wpe8w">
                        <FontAwesomeIcon icon={faYoutube} size="2x" color="#e62117"/>
                    </NavbarSocialLink>
                    <NavbarMenuButton onClick={() => {
                        setMobileNav((c) => !c)
                    }}>{mobileNav ? <>&#10005;</> : <> &#8801;</>}
                    </NavbarMenuButton>
                </NavRightContainer>
            </NavbarInner>
            {mobileNav && (
                <NavbarOuter>
                    <NavbarLinkMobile to="/tech" className={techMatch ? "active" : ""}>Tech</NavbarLinkMobile>
                    <NavbarLinkMobile to="/gaming" className={gamingMatch ? "active" : ""}>Gaming</NavbarLinkMobile>
                    <NavbarLinkMobile to="/decor" className={decorMatch ? "active" : ""}>Decor</NavbarLinkMobile>
                    <NavbarMobileSocialLink href="https://www.instagram.com/mdixey17/">
                        <FontAwesomeIcon icon={faInstagram} size="2x" color="#fbad50"/>
                    </NavbarMobileSocialLink>
                    <NavbarMobileSocialLink href="https://www.pinterest.com/mdixey17/">
                        <FontAwesomeIcon icon={faPinterest} size="2x" color="#E60023"/>
                    </NavbarMobileSocialLink>
                    <NavbarMobileSocialLink href="https://www.tiktok.com/@titanhawk17">
                        <FontAwesomeIcon icon={faTiktok} size="2x" color="#ff0050"/>
                    </NavbarMobileSocialLink>
                    <NavbarMobileSocialLink href="https://www.youtube.com/channel/UCglLpH58CRfi660yU4wpe8w">
                        <FontAwesomeIcon icon={faYoutube} size="2x" color="#e62117"/>
                    </NavbarMobileSocialLink>
                </NavbarOuter>
            )}
        </NavbarWrapper>
    )
};

export default Navbar;
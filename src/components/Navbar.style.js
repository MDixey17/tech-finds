import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNav ? "100vh" : "80px")};
    background-color: #0A1115;
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 9999;

    @media (min-width: 917px) {
        height: 80px;
    }

    .active {
        color: #0AB2F2;
    }
`;

export const NavLeftContainer = styled.div`
    flex: 33%;
    display: flex;
    justify-content: flex-start;
    padding-left: 48px;
    white-space: nowrap;
`;

export const NavCenterContainer = styled.div`
    flex: 34%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 24px;
    padding-right: 24px;
`;

export const NavRightContainer = styled.div`
    flex: 33%;
    display: flex;
    justify-content: flex-end;
    padding-right: 48px;
`;

export const NavbarInner = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavLinkWrapper = styled.div`
    display: flex;
`;

export const NavbarLink = styled(Link)`
    color: #F9F9F9;
    text-decoration: none;
    margin: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: x-large;

    &:hover {
        color: #5cd0fd;
    }

    @media (max-width: 917px) {
        display: none;
    }
`;

export const NavbarLinkMobile = styled(Link)`
    color: #F9F9F9;
    text-decoration: none;
    margin: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: x-large;
`;

export const NavbarHeadshot = styled.img`
    margin: 10px;
    max-width: 180px;
    height: auto;
    border-radius: 50%;
    @media (max-width: 917px) {
        max-width: 64px;
        height: auto;
    }
`;

export const NavbarSocialLink = styled.a`
    text-decoration: none;
    margin: 10px;
    margin-top: 24px;
    max-width: 180px;
    height: auto;

    @media (max-width: 917px) {
        display: none;
    }
`;

export const NavbarMobileSocialLink = styled.a`
    text-decoration: none;
    margin: 10px;
    margin-top: 24px;
    max-width: 180px;
    height: auto;
`;

export const NavbarMenuButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: #F9F9F9;
    font-size: 44px;
    cursor: pointer;
    margin-top: 14px;

    @media (min-width: 917px) {
        display: none;
    }
`;

export const NavbarOuter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 917px) {
        display: none;
    }
`;

export const NavbarText = styled.p`
    flex: 100%;
    display: flex;
    font-size: x-large;
    font-weight: 500;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    color: #f9f9f9;
    align-items: center;
    justify-content: center;
    @media (max-width: 917px) {
        font-size: large;
    }
`;
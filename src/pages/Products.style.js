import styled from "styled-components";

export const ProductWrapper = styled.div`
    width: 800px;
    border-radius: 12px;
    background: #f9f9f9;
    display: flex;
    flex-direction: row;
    justify-items: center;
    &:hover {
        color: #006B94;
        background: #bbbbbb;
    }

    @media (max-width: 706px) {
        width: 250px;
        border-radius: 12px;
        background: #f9f9f9;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
    }
`;

export const ProductSection = styled.div`
    justify-content: space-evenly;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 706px) {
        display: none;
    }
`;

export const ProductContainer = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px;
    text-decoration: none;
    border-radius: 12px;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    color: #0a1115;
    
`;

export const ProductImage = styled.img`
    flex: 30%;
    display: flex;
    align-items: center;
    max-width: 128px;
    height: 128px;
    border-radius: 12px;
    margin: 4px;
    @media (max-width: 706px) {
        max-width: 64px;
        height: 64px;
    }
`;

export const ProductName = styled.h3`
    flex: 70%;
    display: flex;
    font-size: 24px;
    font-weight: 400;
    align-items: center;
    margin-left: 16px;
    font-family: Arial, Helvetica, sans-serif;
    @media (max-width: 706px) {
        font-size: 18px;
        margin: 8px;
    }
`;

export const ProductMobileSection = styled.div`
    display: grid;
    @media (min-width: 706px) {
        display: none;
    }
`;

export const ProductMobileWrapper = styled.div`
    
`;
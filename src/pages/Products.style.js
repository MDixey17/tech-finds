import styled from "styled-components";

export const ProductWrapper = styled.div`
    width: 800px;
    border-radius: 12px;
    background: #f9f9f9;
    display: flex;
    flex-direction: row;
    justify-items: center;
`;

export const ProductSection = styled.div`
    justify-content: space-evenly;
    display: flex;
`;

export const ProductContainer = styled.a`
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
    height: auto;
    border-radius: 12px;
    margin: 4px;
`;

export const ProductName = styled.h3`
    flex: 70%;
    display: flex;
    font-size: 24px;
    font-weight: 400;
    align-items: center;
    margin-left: 16px;
`;

export const ProductMobileWrapper = styled.div``;

export const ProductMobileContainer = styled.div``;

export const ProductMobileImage = styled.img``;

export const ProductMobileName = styled.h3``;
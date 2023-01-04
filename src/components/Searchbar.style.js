import styled from "styled-components";

export const SearchbarWrapper = styled.div`
    
`;

export const SearchbarInput = styled.input`
    ::placeholder {
        font-family: Arial, Helvetica, sans-serif;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    width: 832px;
    color: #0a1115;
    background: #f9f9f9;
    border-radius: 4px;
    margin: 8px 0;
    border: none;
    height: 16px;
    @media (max-width: 706px) {
        width: 282px;
    }
`;
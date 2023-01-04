import React from "react";
import { ContentHeader, ContentSection, ContentText, ContentWrapper } from "../components/Content.style";
import SearchBar from "../components/Searchbar";
import { ProductMobileSection, ProductSection } from "./Products.style";

const DecorProducts = ({products}) => {
    return (
        <ContentWrapper>
            <ContentSection>
                <ContentHeader>Home & Office Finds</ContentHeader>
                <ContentText>
                    This page contains products that I found to improve the aesthetic of 
                    my home and office. Click the cards to order them today!
                    <br/>
                    <br/>
                    The links are <b>affiliate links</b>, meaning that I get 
                    commission when you make purchases by clicking these links. 
                    Thank you for supporting me!
                </ContentText>
                <ProductSection>
                    <SearchBar productList={products}/>
                </ProductSection>
                <ProductMobileSection>
                    <SearchBar productList={products}/>
                </ProductMobileSection>
            </ContentSection>
        </ContentWrapper>
    )
};

export default DecorProducts;
import React from "react";
import { ContentHeader, ContentSection, ContentText, ContentWrapper } from "../components/Content.style";
import { ProductContainer, ProductImage, ProductMobileSection, ProductMobileWrapper, ProductName, ProductSection, ProductWrapper } from "./Products.style";

const DecorProducts = ({products}) => {
    return (
        <ContentWrapper>
            <ContentSection>
                <ContentHeader>Decor Finds</ContentHeader>
                <ContentText>
                    This page contains products that I found to improve the aesthetic of 
                    my home. Click the cards to order them today!
                    <br/>
                    <br/>
                    The links are <b>affiliate links</b>, meaning that I get 
                    commission when you make purchases by clicking these links. 
                    Thank you for supporting me!
                </ContentText>
                <ProductSection>
                    {products.map((p) => (
                        <ProductContainer href={p.aLink}>
                            <ProductWrapper>
                                <ProductImage src={p.pImage}/>
                                <ProductName>{p.pName}</ProductName>
                            </ProductWrapper>
                        </ProductContainer>
                    ))}
                </ProductSection>
                <ProductMobileSection>
                    {products.map((p) => (
                        <ProductContainer href={p.aLink}>
                            <ProductMobileWrapper>
                                <ProductImage src={p.pImage}/>
                                <ProductName>{p.pName}</ProductName>
                            </ProductMobileWrapper>
                        </ProductContainer>
                    ))}
                </ProductMobileSection>
            </ContentSection>
        </ContentWrapper>
    )
};

export default DecorProducts;
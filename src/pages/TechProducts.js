import React from "react";
import { ContentHeader, ContentSection, ContentText, ContentWrapper } from "../components/Content.style";
import { ProductContainer, ProductImage, ProductMobileSection, ProductMobileWrapper, ProductName, ProductSection, ProductWrapper } from "./Products.style";

const TechProducts = ({products}) => {
    return (
        <ContentWrapper>
            <ContentSection>
                <ContentHeader>Tech Finds</ContentHeader>
                <ContentText>
                    Listed below are my top tech finds from online shopping. 
                    Each card is linked to take you directly to each product page 
                    where you can purchase if you so choose.
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
}

export default TechProducts;
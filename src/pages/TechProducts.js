import React, {useState} from "react";
import { ContentHeader, ContentSection, ContentText, ContentWrapper } from "../components/Content.style";
import ProductList from "../components/ProductList";
import { SearchbarInput, SearchbarWrapper } from "../components/Searchbar.style";
import { ProductContainer, ProductImage, ProductMobileSection, ProductMobileWrapper, ProductName, ProductSection} from "./Products.style";

const SearchBar = ({productList}) => {
    const [searchInput, setSearchInput] = useState("");

    const inputHandle = (e) => {
        setSearchInput(e.target.value.toLowerCase());
    };

    return (
        <SearchbarWrapper>
            <SearchbarInput type="search" placeholder="Search products" onChange={inputHandle} value={searchInput}/>
            <ProductList inputText={searchInput} proList={productList}/>
        </SearchbarWrapper>
    )
}

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
                    <SearchBar productList={products}/>
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
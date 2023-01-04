import React from "react";
import { ProductContainer, ProductImage, ProductName, ProductWrapper } from "../pages/Products.style";

function ProductList(props) {
    const filteredProducts = props.proList.filter((p) => {
        if (props.inputText === '') {
            return p;
        }
        else {
            return p.pName.toLowerCase().includes(props.inputText);
        }
    })

    return (
        <>
            {filteredProducts.map((item) => (
                <ProductContainer href={item.aLink}>
                    <ProductWrapper>
                        <ProductImage src={item.pImage}/>
                        <ProductName>{item.pName}</ProductName>
                    </ProductWrapper>
                </ProductContainer>
            ))}
        </>
    )
};

export default ProductList;
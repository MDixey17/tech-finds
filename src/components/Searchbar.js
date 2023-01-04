import React, {useState} from "react";
import ProductList from "../components/ProductList";
import { SearchbarInput, SearchbarWrapper } from "../components/Searchbar.style";

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

export default SearchBar;
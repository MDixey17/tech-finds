import React from "react";
import { ContentHeader, ContentSection, ContentText, ContentWrapper } from "../components/Content.style";

const Home = () => {
    return (
        <ContentWrapper>
            <ContentSection>
                <ContentHeader>Hello There!</ContentHeader>
                <ContentText>
                    Welcome to Matt's Tech Finds, where you can find some 
                    of the latest tech gadgets I've found through online shopping! 
                    <br/>
                    <br/>
                    To navigate throughout this website, click the different pages 
                    at the top of your screen. From there, you will be able to see 
                    and search through the products that I've found.
                    <br/>
                    <br/>
                    The links are <b>affiliate links</b>, meaning that I get 
                    commission when you make purchases by clicking these links. 
                    Thank you for supporting me!
                </ContentText>
            </ContentSection>
        </ContentWrapper>
    )
};

export default Home;
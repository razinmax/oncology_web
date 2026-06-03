import {MainArticle, MainSection} from "../../pages/mainPage.tsx";
import {useEffect} from "react";
import styled from "styled-components";
import {font} from "../../GlobalStyles.ts";

const Header = styled.h2`
    ${font(52, null, 'Golos')};
    width: max-content;
`;

const givrURL = 'https://pay.givr.ru/api/public/plugin/get_js_script/1b1e9f19-6c1a-46d4-8efc-2f0f288e0414';

export function DonationBlock() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = givrURL;
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <MainSection id={"donation"} style={{gap: '25px', alignItems: 'center'}}>
            <Header>Вместе мы сделаем больше!</Header>
            <MainArticle>
                <div className="donation-theme-widget-container"
                     data-id="7f5cc40a-4796-4603-b38f-cce0388f2593"
                     data-theme="extended"></div>
                <script
                    src={givrURL}>
                </script>
            </MainArticle>
        </MainSection>
    )
}
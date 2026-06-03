import styled from "styled-components";
import {MainSection} from "./mainPage.tsx";
import {ScrollArticleBlock} from "../components/blocks/ScrollArticleBlock.tsx";
import donatePhoto from "../assets/images/donate.png";
import { DonationBlock } from "../components/blocks/DonationBlock.tsx";

const PageWrapper = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding-top: 40px;
`;

export function DonationPage() {
    return (
        <MainSection style={{maxWidth: "1100px", margin: "0 auto", width: "100%"}}>
            <PageWrapper>

                <ScrollArticleBlock
                    title="Как можно помочь?"
                    text="Поддержите нашу работу, сделав пожертвование. Ваш вклад поможет нам продолжать оказывать психологическую поддержку тем, кто сталкивается с онкологическим диагнозом."
                    photo={donatePhoto}
                    isReversed={false}
                    buttonText="Сделать пожертвование"
                    height={500}
                    anchorId="donation-form"
                />

                <div id="donation-form" style={{marginTop: "80px", marginBottom: "80px"}}>
                    <DonationBlock />
                </div>

            </PageWrapper>
        </MainSection>
    );
}
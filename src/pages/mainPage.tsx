import styled from 'styled-components';
import {ReviewsBlock} from "../components/blocks/ReviewsBlock.tsx";
import {AboutUsBlock} from "../components/blocks/AboutUsBlock.tsx";
import {RecordBlock} from "../components/blocks/RecordBlock.tsx";
import {VolunteerBlock} from "../components/blocks/VolunteerBlock.tsx";
import {GroupsBlock} from "../components/blocks/GroupsBlock.tsx";
import {font} from "../GlobalStyles.ts";
import {DonationBlock} from "../components/blocks/DonationBlock.tsx";
import {ContactsBlock} from "../components/blocks/ContactsBlock.tsx";
import {BannersBlock} from "../components/blocks/BannersBlock.tsx";
import {EventsBlock} from "../components/blocks/EventsBlock.tsx";
import {NewsBlock} from "../components/blocks/NewsBlock.tsx";
import {ModalWindow} from "../components/common/modalWindow/ModalWindow.tsx";

const MainPageContainer = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    padding: 0 5%;
    z-index: 1;
`;

export const MainSection = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

export const MainArticle = styled.article`
    min-height: 400px;
    height: max-content;
    display: block;
`;

export const ArticleHeader = styled.h2`
    ${font(70, null, 'Golos')};
`;

export function MainPage() {

    return (
        <MainPageContainer>
            <BannersBlock />

            <MainSection>
                <section id={'about'}>
                    <AboutUsBlock/>
                </section>
                <section id={'record'}>
                    <RecordBlock/>
                </section>
                <section id={'volunteers'}>
                    <VolunteerBlock/>
                </section>
                <section id={'groups'}>
                    <GroupsBlock/>
                </section>
            </MainSection>
            
            <EventsBlock />
            <NewsBlock />
            
            <DonationBlock />
            <ReviewsBlock />
            <ContactsBlock />

            <ModalWindow />
        </MainPageContainer>
    )
}
import styled from 'styled-components';
import {ReviewsBlock} from "../components/blocks/ReviewsBlock.tsx";
import {AboutUsBlock} from "../components/blocks/AboutUsBlock.tsx";
import {RecordBlock} from "../components/blocks/RecordBlock.tsx";
import {VolunteerBlock} from "../components/blocks/VolunteerBlock.tsx";
import {GroupsBlock} from "../components/blocks/GroupsBlock.tsx";
import {font} from "../GlobalStyles.ts";
import {DonationBlock} from "../components/blocks/DonationBlock.tsx";
import {BannersBlock} from "../components/blocks/BannersBlock.tsx";
import {EventsBlock} from "../components/blocks/EventsBlock.tsx";
import {NewsBlock} from "../components/blocks/NewsBlock.tsx";
import {ModalWindow} from "../components/common/modalWindow/ModalWindow.tsx";
import { ContactsPageBlock } from '../components/blocks/ContactsPageBlock.tsx';

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
    ${font(52, null, 'Golos')};
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
            <MainSection
                id="contacts"
                style={{
                    gap: '32px',
                    maxWidth: '1100px',
                    margin: '0 auto',
                    width: '100%',
                    paddingTop: '10px',
                    paddingBottom: '80px',
                }}
            >
                <ArticleHeader>Контакты</ArticleHeader>
                <ContactsPageBlock />
            </MainSection>

            <ModalWindow />
        </MainPageContainer>
    )
}
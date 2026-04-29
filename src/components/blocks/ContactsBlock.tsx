import styled from 'styled-components';
import {font} from "../../GlobalStyles.ts";
import {MainSection} from "../../pages/mainPage.tsx";
import YandexMap from "./yMap.tsx";

export const ContactsSection = styled.div`
    display: flex;
    justify-content: left;
    align-items: start;
    gap: 40px;
`;

const Title = styled.h2`
    ${font(70, null, 'Golos')};
`;

export const Section = styled.div`
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const SectionTitle = styled.h3`
    ${font(20, null, 'Golos')};
`;

export const ContactInfo = styled.p`
    ${font(20, null, 'Raleway')};
    margin: 8px 0;
`;

export const ContactsBlock = () => {
    return (
        <MainSection id={'contacts'} style={{gap: '25px', maxWidth: '1200px', margin: '0 auto', width: '100%'}}>
            <Title>Контакты</Title>

            <YandexMap />

            <ContactsSection>
                <Section  style={{width: '30%'}}>
                    <SectionTitle>Адреса</SectionTitle>
                    <ContactInfo>454100, Челябинская обл., г. Челябинск, ул. Бейвеля, д. 22, офис 1</ContactInfo>
                </Section>

                <Section>
                    <SectionTitle>Номера телефонов</SectionTitle>
                    <ContactInfo>+7 908 939 78 01</ContactInfo>
                </Section>

                <Section>
                    <SectionTitle>Дополнительные способы связи</SectionTitle>
                    <ContactInfo>jit-dalshe74@yandex.ru</ContactInfo>
                </Section>
            </ContactsSection>
        </MainSection>
    );
};
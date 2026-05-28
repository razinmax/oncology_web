import styled from 'styled-components';
import { font } from '../GlobalStyles.ts';
import { MainSection } from './mainPage.tsx';
import { ContactsPageBlock } from '../components/blocks/ContactsPageBlock.tsx';

const PageTitle = styled.h2`
    ${font(52, null, 'Golos')};
`;

export const ContactsPage = () => {
    return (
        <MainSection
            id="contacts"
            style={{
                gap: '32px',
                maxWidth: '1100px',
                margin: '0 auto',
                width: '100%',
                paddingTop: '48px',    // ← сверху
                paddingBottom: '80px', // ← снизу, до футера чуть больше
            }}
        >
            <PageTitle>Контакты</PageTitle>
            <ContactsPageBlock />
        </MainSection>
    );
};

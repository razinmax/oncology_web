import styled from 'styled-components';
import { font } from '../../GlobalStyles.ts';
import YandexMap from './yMap.tsx';

// ── Layout ───────────────────────────────────────────────────────────────────

const OfficesGrid = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 32px;
    width: 100%; 

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

// ── Office card ───────────────────────────────────────────────────────────────

const OfficeCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const CardTitle = styled.h3`
    ${font(28, 36, 'Golos')};
    margin: 0;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const SectionTitle = styled.p`
    ${font(14, null, 'Golos')};
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #9E9E9E;
    margin: 0;
`;

const ContactLink = styled.a`
    ${font(18, 28, 'Raleway')};
    color: inherit;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

// ── Map wrapper ───────────────────────────────────────────────────────────────

const MapWrapper = styled.div`
    border-radius: 16px;
    overflow: hidden;
`;

// ── Component ─────────────────────────────────────────────────────────────────

export const ContactsPageBlock = () => {
    return (
        <>
            <OfficesGrid>
                {/* ── Головной офис ── */}
                <OfficeCard>
                    <CardTitle>Головной офис</CardTitle>

                    <Section>
                        <SectionTitle>Адрес</SectionTitle>
                        <ContactLink
                            href="https://yandex.com/maps/-/CPHAjQZa"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Челябинск, ул. Бейвеля, 22,
                            <br />
                            офисный центр «Сорока», оф.1
                        </ContactLink>
                    </Section>

                    <Section>
                        <SectionTitle>Телефон</SectionTitle>
                        <ContactLink href="tel:+79089397801">+7 908 939 78 01</ContactLink>
                    </Section>

                    <Section>
                        <SectionTitle>Электронная почта</SectionTitle>
                        <ContactLink href="mailto:jit-dalshe74@yandex.ru">
                            jit-dalshe74@yandex.ru
                        </ContactLink>
                    </Section>
                </OfficeCard>

                {/* ── Кабинет доверия ── */}
                <OfficeCard>
                    <CardTitle>Кабинет доверия</CardTitle>

                    <Section>
                        <SectionTitle>Адрес</SectionTitle>
                        <ContactLink
                            href="https://yandex.ru/maps/-/CPHAjD6h"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Челябинск, ул. Блюхера, 42Б,
                            3-й этаж, кабинет 3.46
                            <br />
                            ГАУЗ «Челябинский областной клинический центр 
                            <br />
                            онкологии и ядерной медицины»
                        </ContactLink>
                    </Section>

                    <Section>
                        <SectionTitle>Телефон</SectionTitle>
                        <ContactLink href="tel:+79089397801">+7 908 939 78 01</ContactLink>
                    </Section>
                </OfficeCard>
            </OfficesGrid>

            <MapWrapper>
                <YandexMap />
            </MapWrapper>
        </>
    );
};

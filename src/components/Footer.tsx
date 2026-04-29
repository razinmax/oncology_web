import styled from "styled-components";
import {Section, SectionTitle} from "./blocks/ContactsBlock.tsx";
import {centerContent, font} from "../GlobalStyles.ts";
import logo from '../assets/images/logo.png';
import tg from '../assets/images/TGLogo.svg';
import vk from '../assets/images/vk.svg';
import youtube from '../assets/images/youtube.svg';
import charter from '../assets/docs/charter.pdf';
import state_reg from '../assets/docs/state_registration.pdf';
import tax_reg from '../assets/docs/tax_registration.pdf';
import offer from '../assets/docs/offer.pdf';
import personal_data from '../assets/docs/personal_data.pdf';
import donation_individual from '../assets/docs/donation_individual.pdf';
import donation_legal from '../assets/docs/donation_legal_entity.pdf';
import {rutubeRedirect, tgRedirect, vkRedirect} from "../services/commonHandlers.ts";

const FooterContainer = styled.footer`
    width: 100%;
    background-color: rgba(0, 177, 197, 0.2);
    padding: 40px 0;
`;

const FooterContent = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    position: relative;
    height: 100%;
`;

const FooterInfo = styled.p`
    ${font(14, null, 'Raleway')};
    height: max-content;
    cursor: pointer;
    width: max-content;

    transition: color 0.3s;
    &:hover {
        color: #0066cc;
    }
`;

const FooterLink = styled.p`
    ${font(14, null, 'Raleway')};
    height: max-content;
    cursor: pointer;
    transition: all 0.15s ease;
    
    &:hover {
        color: cornflowerblue;
        cursor: pointer;
    }
`;

const PolicyText = styled.p`
    ${font(14, null, 'Raleway')};
    margin: 8px 0;
    width: 40%;
    position: absolute;
    bottom: 0;
`;

const SocialIcon = styled.img`
    width: min-content;
    height: 24px;
    cursor: pointer;
`;

const LinksContainer = styled.div`
    display: flex;
    gap: 15px;
    align-items: start;
`;

const LinksLogosContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: min-content;
    align-items: center;
    gap: 15px;
    margin-top: 4px;
`;

const LinksTextContainer = styled.div`
    ${centerContent()};
    align-items: start;
    flex-direction: column;
    gap: 12px;
    width: min-content;
`;

const FooterLogo = styled.img`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
`;

export function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <Section style={{width:'15%'}}>
                    <FooterLogo src={logo} alt={'фото'}/>
                    <PolicyText>Политика конфиденциальности. Все права защищены. При использовании материалов ссылка на сайт обязательна.
                        © АНО «Жить дальше» 2025</PolicyText>
                </Section>

                <Section style={{width: '10%'}}>
                    <SectionTitle>Карта сайта</SectionTitle>
                    <FooterInfo>Главная</FooterInfo>
                    <FooterInfo>Страница</FooterInfo>
                    <FooterInfo>Страница</FooterInfo>
                    <FooterInfo>Страница</FooterInfo>
                </Section>

                <Section style={{width:'20%'}}>
                    <SectionTitle>Связаться с нами</SectionTitle>
                    <FooterInfo>+7-908-939-78-01</FooterInfo>
                    <FooterInfo>jit-dalshe74@yandex.ru</FooterInfo>
                    <FooterInfo style={{width: '100%'}}>Челябинск, ул. Бейвеля, 22, офисный центр «Сорока», оф.1</FooterInfo>

                    <SectionTitle style={{marginTop: '15px'}}>Социальные сети</SectionTitle>
                    <LinksContainer>
                        <LinksLogosContainer>
                            <SocialIcon src={tg} alt={'фото'} onClick={tgRedirect}/>
                            <SocialIcon src={vk} alt={'фото'} onClick={vkRedirect}/>
                            <SocialIcon src={youtube} alt={'фото'} onClick={rutubeRedirect}/>
                        </LinksLogosContainer>
                        <LinksTextContainer>
                            <FooterLink onClick={tgRedirect}>t.me/ano_jitdalshe7</FooterLink>
                            <FooterLink onClick={vkRedirect}>vk.com/zhitdalshe74</FooterLink>
                            <FooterLink onClick={rutubeRedirect}>rutube.ru/channel/58973110</FooterLink>
                        </LinksTextContainer>
                    </LinksContainer>
                </Section>

                <Section>
                    <SectionTitle>Документы</SectionTitle>
                    <a href={charter} target="_blank" rel="noopener noreferrer">
                        <FooterInfo>Устав «Жить дальше»</FooterInfo>
                    </a>
                    <a href={state_reg} target="_blank" rel="noopener noreferrer">
                        <FooterInfo>Свидетельство о государственной регистрации</FooterInfo>
                    </a>
                    <a href={tax_reg} target="_blank" rel="noopener noreferrer">
                        <FooterInfo>Свидетельство о постановке на учёт в налоговом органе</FooterInfo>
                    </a>
                    <a href={offer} target="_blank" rel="noopener noreferrer">
                        <FooterInfo>Договор оферты АНО «Жить дальше» 2025</FooterInfo>
                    </a>
                    <a href={personal_data} target="_blank" rel="noopener noreferrer">
                        <FooterInfo>Политика обработки персональных данных АНО «Жить дальше»</FooterInfo>
                    </a>
                    <a href={donation_individual} target="_blank" rel="noopener noreferrer">
                        <FooterInfo>Договор пожертвования для физических лиц</FooterInfo>
                    </a>
                    <a href={donation_legal} target="_blank" rel="noopener noreferrer">
                        <FooterInfo>Договор пожертвования для юридических лиц</FooterInfo>
                    </a>
                    <SectionTitle style={{marginTop: '15px'}}>Реквизиты</SectionTitle>
                    <FooterInfo>ИНН: 7448228314</FooterInfo>
                    <FooterInfo>КПП: 744801001</FooterInfo>
                    <FooterInfo>ОГРН: 1207400038053</FooterInfo>
                    <FooterInfo>Номер расчетного счета: 40703810972000000140</FooterInfo>
                    <FooterInfo>Корреспондентский счет банка: 30101810700000000602</FooterInfo>
                    <FooterInfo>БИК: 047501602</FooterInfo>
                    <FooterInfo>Местонахождение учреждения банка: гор. Челябинск</FooterInfo>
                </Section>
            </FooterContent>
        </FooterContainer>
    )
}
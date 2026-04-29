import styled from 'styled-components'
import {centerContent, font} from "../../GlobalStyles.ts";
import mainImage from '../../assets/images/newAboutUsPic.jpg';

const AboutUsArticle = styled.article`
    background-color: rgba(0, 177, 197, 0.2);
    border-radius: 70px;
    height: 640px;
    ${centerContent()};
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 80px;
    gap: 30px;
    padding-bottom: 60px;
    position: relative;
    overflow: hidden;

    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
`;

const AboutUsHeader = styled.h1`
    ${font(70, null, 'Golos')};
    justify-self: center;
    align-self: center;
    z-index: 6;
`;

const AboutUsText = styled.p`
    ${font(26, 46, 'Raleway')};
    justify-self: center;
    align-self: center;
    width: 65%;
    z-index: 6;
`;


const AboutUsMainImage = styled.img`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%; 
    height: auto;
    z-index: 5;
`;

export function AboutUsBlock() {
    return (
        <AboutUsArticle id={'about'}>
            <AboutUsHeader>О нас</AboutUsHeader>
            <AboutUsText>
                Мы — команда онкопсихологов, волонтеров и людей с опытом онкологических заболеваний, которые
                встретились, чтобы помогать людям, столкнувшимся с серьезным заболеванием у себя или у близкого
                человека. Мы хорошо знаем, что такое онкодиагноз, и всегда готовы поддержать вас и ваших близких.
            </AboutUsText>
            <AboutUsMainImage src={mainImage} alt={'О нас'}/>
        </AboutUsArticle>
    )
}
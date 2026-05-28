import styled from 'styled-components'
import {centerContent, font} from "../../GlobalStyles.ts";
import mainImage from '../../assets/images/newAboutUsPic.jpg';

const AboutUsArticle = styled.article`
    background-color: rgba(0, 177, 197, 0.2);
    border-radius: 70px;
    min-height: 700px;
    ${centerContent()};
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 30px;
    gap: 30px;
    padding-bottom: 60px;
    position: relative;
    overflow: hidden;
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;

    @media (max-width: 768px) {
        border-radius: 40px;
        min-height: unset;
        padding: 0;
        gap: 0;
        background-color: transparent;
    }
`;

/* Только на десктопе */
const DesktopOnly = styled.div`
    display: contents;
    @media (max-width: 768px) {
        display: none;
    }
`;

/* Только на мобиле */
const MobileOnly = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
        height: 220px;
        border-radius: 40px;
        background-color: rgba(0, 177, 197, 0.2);
        overflow: hidden;
    }
`;

const TextSection = styled.div`
    display: contents;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 16px;
        background-color: rgba(0, 177, 197, 0.2);
        border-radius: 40px;
        padding: 20px 24px;
        margin-top: 12px;
    }
`;

const AboutUsHeader = styled.h1`
    ${font(52, null, 'Golos')};
    justify-self: center;
    align-self: center;
    z-index: 6;

    @media (max-width: 768px) {
        ${font(32, null, 'Golos')};
        padding: 20px 0;
    }
`;

const AboutUsText = styled.p`
    ${font(20, 24, 'Raleway')};
    justify-self: center;
    align-self: center;
    width: 72%;
    z-index: 6;

    @media (max-width: 768px) {
        ${font(16, 22, 'Raleway')};
        width: 88%;
        margin-top: 20px;
    }
`;

const AboutUsMainImage = styled.img`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: auto;
    z-index: 5;

    @media (max-width: 768px) {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        top: 0;
        left: 0;
        transform: none;
    }
`;

export function AboutUsBlock() {
    const foundationDate = new Date(2020, 9, 19)
    const now = new Date()

    let years = now.getFullYear() - foundationDate.getFullYear()

    const hasBirthdayPassed =
        now.getMonth() > foundationDate.getMonth() ||
        (now.getMonth() === foundationDate.getMonth() && now.getDate() >= foundationDate.getDate())

    if (!hasBirthdayPassed) {
        years -= 1
    }
    return (
            <AboutUsArticle id={'about'}>
            <DesktopOnly>
                 <AboutUsHeader>О нас</AboutUsHeader>
            </DesktopOnly>

            {/* Мобила: заголовок + картинка вместе */}
            <MobileOnly>
                <AboutUsHeader>О нас</AboutUsHeader>
                <AboutUsMainImage src={mainImage} alt={'О нас'}/>
            </MobileOnly>

            <TextSection>
                <AboutUsText>
                    С 2020 года АНО «Жить дальше» занимается решением проблем предоставления психологической помощи взрослым людям с онкологическими заболеваниями и их родственникам на бесплатной основе. 
                    Особенностью нашей работы является то, что в ней используется, прежде всего, командный метод, т.е. работу ведёт слаженная команда специалистов, причём работа команды строится на мультидисциплинарной основе.
                </AboutUsText>
                <AboutUsText>
                    Автономной некоммерческой организации «Жить дальше» {years} {years === 1 ? 'год' : years < 5 ? 'года' : 'лет'}. Команда психологов, волонтеров помогает людям, столкнувшимся с онкозаболеванием у себя или у близкого человека. Концепция нашей работы проста: достижение не на словах, а на деле максимального возможного в возникающей ситуации качества жизни больных и членов их семей.
                </AboutUsText>
                <AboutUsText>
                    Помощь бесплатна, она возможна благодаря поддержке Правительства Челябинской области, Министерства здравоохранения, Фонда поддержки гражданских инициатив Южного Урала, Фонда Президентских грантов, лечебных учреждений, благотворителей. 
                </AboutUsText>
            </TextSection>

            <DesktopOnly>
                <AboutUsMainImage src={mainImage} alt={'О нас'}/>
            </DesktopOnly>
        </AboutUsArticle>
    )
}
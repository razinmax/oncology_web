import styled from 'styled-components'
import {centerContent, font} from "../../GlobalStyles.ts";
import {ActionButton} from "./ActionButton.tsx";

const Article = styled.article`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    ${centerContent()};
    justify-content: space-between;
    gap: 5%;
    align-items: stretch;
    overflow: hidden;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto !important;
        gap: 20px;
    }
`;

const ContentContainer = styled.div`
    height: 100%;
    width: 50%;
    ${centerContent()};
    align-self: start;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 768px) {
        width: 100%;
        box-sizing: border-box;
        gap: 20px;
        order: 3;
        padding: 0 20px;
        align-items: flex-start;
    }
`;

const TextWrapper = styled.div`
    ${centerContent()};
    flex-direction: column;
    gap: 25px;
    padding: 0 15%;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 0;
    }
`;

const Header = styled.h2`
    ${font(52, null, 'Golos')};
    justify-self: center;
    align-self: center;
    height: min-content;

    @media (max-width: 768px) {
        ${font(32, null, 'Golos')};
    }
`;

const MobileHeader = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        order: 1;
    }
`;

const DesktopHeader = styled.div`
    display: contents;

    @media (max-width: 768px) {
        display: none;
    }
`;

const Text = styled.p`
    ${font(20, 30, 'Raleway')};
    justify-self: center;
    align-self: center;
    width: 100%;

    @media (max-width: 768px) {
        ${font(16, 24, 'Raleway')};
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
`;

const ImageContainer = styled.div`
    background-color: rgba(0, 177, 197, 0.2);
    border-radius: 60px;
    width: 50%;
    ${centerContent()};
    align-items: end;
    overflow: hidden;

    @media (max-width: 768px) {
        width: 100%;
        height: 280px !important;
        border-radius: 40px;
        order: 2;
    }
`;

interface ArticleProps {
    title: string;
    text: string;
    headerForForm: string;
    photo: string;
    isReversed: boolean;
    buttonText: string;
    height: number;
    imgWidth?: number;
}

export function ArticleBlock({title, text, headerForForm, photo, isReversed, buttonText, height, imgWidth}: ArticleProps) {

    if(isReversed) {
        return (
            <Article style={{height: `${height}px`}}>
                <MobileHeader>
                    <Header>{title}</Header>
                </MobileHeader>
                <ImageContainer  style={{height: `${height}px`}}>
                    <Image src={photo} alt={'фото'} style={{ width: `${imgWidth}%` }} />
                </ImageContainer>
                <ContentContainer>
                    <TextWrapper>
                        <DesktopHeader>
                        <Header>{title}</Header>
                        </DesktopHeader>
                        <Text>{text}</Text>
                    </TextWrapper>
                    <ActionButton headerForForm={headerForForm} buttonText={buttonText} />
                </ContentContainer>
            </Article>
        );
    }

    return (
        <Article style={{height: `${height}px`}}>
            <MobileHeader>
                <Header>{title}</Header>
            </MobileHeader>
            <ContentContainer>
                <TextWrapper>
                    <DesktopHeader>
                    <Header>{title}</Header>
                    </DesktopHeader>
                    <Text>{text}</Text>
                </TextWrapper>
               <ActionButton headerForForm={headerForForm} buttonText={buttonText} />
            </ContentContainer>
            <ImageContainer  style={{height: `${height}px`}}>
                <Image src={photo} alt={'фото'}/>
            </ImageContainer>
        </Article>
    );
}
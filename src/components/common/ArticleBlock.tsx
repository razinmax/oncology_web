import styled from 'styled-components'
import {centerContent, font} from "../../GlobalStyles.ts";
import {ActionButton} from "./ActionButton.tsx";

const Article = styled.article`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    ${centerContent()};
    justify-content: space-between;
    gap: 5%;
    align-items: stretch;
    overflow: hidden;
`;

const ContentContainer = styled.div`
    height: 100%;
    width: 55%;
    ${centerContent()};
    align-self: start;
    flex-direction: column;
    justify-content: space-between;
`;

const TextWrapper = styled.div`
    ${centerContent()};
    flex-direction: column;
    gap: 25px;
`;

const Header = styled.h2`
    ${font(52, null, 'Golos')};
    justify-self: center;
    align-self: center;
    height: min-content;
`;

const Text = styled.p`
    ${font(26, 40, 'Raleway')};
    justify-self: center;
    align-self: center;
    width:  100%;
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
    width: 45%;
    ${centerContent()};
    align-items: end;
    overflow: hidden;
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
                <ImageContainer  style={{height: `${height}px`}}>
                    <Image src={photo} alt={'фото'} style={{ width: `${imgWidth}%` }} />
                </ImageContainer>
                <ContentContainer>
                    <TextWrapper>
                        <Header>{title}</Header>
                        <Text>{text}</Text>
                    </TextWrapper>
                    <ActionButton headerForForm={headerForForm} buttonText={buttonText} />
                </ContentContainer>
            </Article>
        );
    }

    return (
        <Article style={{height: `${height}px`}}>
            <ContentContainer>
                <TextWrapper>
                    <Header>{title}</Header>
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
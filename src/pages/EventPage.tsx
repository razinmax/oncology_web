import {useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components";
import {font} from "../GlobalStyles.ts";
import { useEffect } from "react";

const Page = styled.div`
    max-width: 1100px;
    margin: 40px auto;
    padding: 20px;
`;

const BackButton = styled.button`
    margin-bottom: 20px;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    background: #47AEBC;
    color: white;
    cursor: pointer;
    ${font(18, null, 'Raleway')};

    transition: background-color 0.4s ease;

    &:hover {
        background-color: #368d99;
    }
`;

const Layout = styled.div`
    display: flex;
    gap: 30px;
`;

const ImageContainer = styled.div`
    width: 350px;
    height: 350px;
    border-radius: 20px;
    overflow: hidden;
    flex-shrink: 0;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Content = styled.div`
    flex: 1;
`;

const DateText = styled.p`
    ${font(18, null, 'Raleway')};
    color: rgba(7, 105, 116, 0.8);
`;

const Text = styled.p`
    ${font(20, 28, 'Raleway')};
    white-space: pre-line;
`;

export const EventPage = () => {
    const navigate = useNavigate();
    const {state: event} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    if (!event) return <Page>Событие не найдено</Page>;

    return (
        <Page>
            <BackButton onClick={() => navigate(-1)}>Назад</BackButton>

            <Layout>
                <ImageContainer>
                    <Image src={event.imageUrl} alt="Событие" />
                </ImageContainer>

                <Content>
                    <DateText>{event.date}</DateText>
                    <Text>{event.title}</Text>
                </Content>
            </Layout>
        </Page>
    );
};

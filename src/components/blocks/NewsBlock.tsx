import styled from 'styled-components'
import {font} from "../../GlobalStyles.ts";
import {useEffect, useState} from "react";
import {GetNews} from "../../services/api.ts";
import {News} from "../../services/types.ts";
import {ArticleHeader, MainSection} from "../../pages/mainPage.tsx";
import {openInNewTab} from "../../services/commonHandlers.ts";

const NewsContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    height: 460px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 10px;
`;

const NewsItem = styled.article`
    display: flex;
    gap: 20px;
    padding: 15px;
    border-radius: 15px;
    background-color: rgba(0, 177, 197, 0.1);
    height: 260px;
    
    &:hover img {
        scale: 1.035;
        box-shadow: 0 0 22px rgba(0, 0, 0, 0.3);
    }
    
    &:hover {
        cursor: pointer;
    }
`;

const NewsImageContainer = styled.div`
    width: 260px;
    height: 260px;
    border-radius: 15px;
`;

const NewsImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    
    transition: 0.3s all ease;
`;

const NewsContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 20px;
`;

const NewsText = styled.p`
    ${font(24, 34, 'Raleway')};
    color: #666;
    width: 95%;
    margin: 0;
    
    padding-right: 20px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(0, 177, 197, 0.3);
        border-radius: 10px;
    }
`;

export function NewsBlock() {
    const [news, setNews] = useState<News[]>([
        {
            postUrl: 'https://vk.com/wall-177662413_883',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            photoUrl: 'https://sun9-65.userapi.com/impg/S2U-2pn27w1SlRJBN7Bu4wG16YTKGCxu5wOK8Q/CZc-bZU9gOw.jpg?size=1050x1050&quality=95&sign=134911156a241ea0092a5e7caaf48b00&type=album'
        },
        {
            postUrl: 'https://vk.com/wall-177662413_883',
            text: 'Сегодня, 12 мая, Международный день медицинской сестрыСегодня, 12 мая, Международный день медицинской сестрыСегодня, 12 мая, Международный день медицинской сестрыСегодня, 12 мая, Международный день медицинской сестрыСегодня, 12 мая, Международный день медицинской сестрыСегодня, 12 мая, Международный день медицинской сестрыСегодня, 12 мая, Международный день медицинской сестры.\n' +
                '\n' +
                'Терпеливые, заботливые, способные выполнять множество медицинских процедур, приноровиться к разным характерам и состояниям людей, работать в трудных условиях, быть точными и внимательными, медицинские сестры и братья — первые и незаменимые помощники врачей и пациентов.',
            photoUrl: 'https://sun9-72.userapi.com/impg/w1kvfu6UXNZ48ssqHdznFQ_w3JWWW8XU9hTg_w/oZJWJsLzQ8Y.jpg?size=1280x1280&quality=95&sign=256ce04db2e42faedd14ea4e882c1732&type=album'
        },
        {
            postUrl: 'https://vk.com/wall-177662413_883',
            text: '80-летие Победы — хороший повод вспомнить историю семьи и страны. Показать фотографии своих фронтовиков детям и внукам. Рассказать о них и о том, какой ценой оплачен был мир, в котором мы родились.\n' +
                '\n' +
                'Дорогие друзья, желаем вам и вашим близким мира и здоровья!\n' +
                'С праздником!',
            photoUrl: 'https://sun9-43.userapi.com/impg/S4RbBD9d6LGgnKq0CoN0iebVRyUKfd6WKu1MpA/RBZJDO8bit4.jpg?size=1920x1080&quality=95&sign=16b3dd2117fbde6c2bb05808c705066c&type=album'
        },
        {
            postUrl: 'https://vk.com/wall-177662413_883',
            text: '80-летие Победы — хороший повод вспомнить историю семьи и страны. Показать фотографии своих фронтовиков детям и внукам. Рассказать о них и о том, какой ценой оплачен был мир, в котором мы родились.\n' +
                '\n' +
                'Дорогие друзья, желаем вам и вашим близким мира и здоровья!\n' +
                'С праздником!',
            photoUrl: 'https://sun9-43.userapi.com/impg/S4RbBD9d6LGgnKq0CoN0iebVRyUKfd6WKu1MpA/RBZJDO8bit4.jpg?size=1920x1080&quality=95&sign=16b3dd2117fbde6c2bb05808c705066c&type=album'
        },
        {
            postUrl: 'https://vk.com/wall-177662413_883',
            text: '80-летие Победы — хороший повод вспомнить историю семьи и страны. Показать фотографии своих фронтовиков детям и внукам. Рассказать о них и о том, какой ценой оплачен был мир, в котором мы родились.\n' +
                '\n' +
                'Дорогие друзья, желаем вам и вашим близким мира и здоровья!\n' +
                'С праздником!',
            photoUrl: 'https://sun9-43.userapi.com/impg/S4RbBD9d6LGgnKq0CoN0iebVRyUKfd6WKu1MpA/RBZJDO8bit4.jpg?size=1920x1080&quality=95&sign=16b3dd2117fbde6c2bb05808c705066c&type=album'
        },
        {
            postUrl: 'https://vk.com/wall-177662413_883',
            text: '80-летие Победы — хороший повод вспомнить историю семьи и страны. Показать фотографии своих фронтовиков детям и внукам. Рассказать о них и о том, какой ценой оплачен был мир, в котором мы родились.\n' +
                '\n' +
                'Дорогие друзья, желаем вам и вашим близким мира и здоровья!\n' +
                'С праздником!',
            photoUrl: 'https://sun9-43.userapi.com/impg/S4RbBD9d6LGgnKq0CoN0iebVRyUKfd6WKu1MpA/RBZJDO8bit4.jpg?size=1920x1080&quality=95&sign=16b3dd2117fbde6c2bb05808c705066c&type=album'
        }
    ]);

    useEffect(() => {
        (async () => {
            const result: News[] = await GetNews(5, 0);
            setNews(result);
        })();
    }, []);

    return (
        <MainSection id={"news"} style={{gap: '25px', maxWidth: '1200px', margin: '0 auto', width: '100%'}}>
            <ArticleHeader>Новости</ArticleHeader>
            <NewsContainer>
                {news.map((item, index) => (
                    <NewsItem key={index}
                              onClick={() => {
                                  openInNewTab(item.postUrl)
                              }}>
                        <NewsImageContainer>
                            <NewsImage src={item.photoUrl} alt="Новость"/>
                        </NewsImageContainer>
                        <NewsContent>
                            <NewsText>{item.text}</NewsText>
                        </NewsContent>
                    </NewsItem>
                ))}
            </NewsContainer>
        </MainSection>
    );
}
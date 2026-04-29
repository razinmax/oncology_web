import {ArticleHeader, MainSection} from "../../pages/mainPage.tsx";
import {Swiper} from "../common/Swiper.tsx";
import {useEffect, useState} from "react";
import {Event} from "../../services/types.ts";
import {GetEvents} from "../../services/api.ts";

export const EventsBlock = () => {
    const [events, setEvents] = useState<Event[]>([
        {
            title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            photoUrl: 'https://sun9-65.userapi.com/impg/S2U-2pn27w1SlRJBN7Bu4wG16YTKGCxu5wOK8Q/CZc-bZU9gOw.jpg?size=1050x1050&quality=95&sign=134911156a241ea0092a5e7caaf48b00&type=album',
            date: '21.01.2025'
        },
        {
            title: 'Сегодня, 12 мая, Международный день медицинской сестры.\n' +
                '\n' +
                'Терпеливые, заботливые, способные выполнять множество медицинских процедур, приноровиться к разным характерам и состояниям людей, работать в трудных условиях, быть точными и внимательными, медицинские сестры и братья — первые и незаменимые помощники врачей и пациентов.',
            photoUrl: 'https://sun9-72.userapi.com/impg/w1kvfu6UXNZ48ssqHdznFQ_w3JWWW8XU9hTg_w/oZJWJsLzQ8Y.jpg?size=1280x1280&quality=95&sign=256ce04db2e42faedd14ea4e882c1732&type=album',
            date: '21.01.2025'
        },
        {
            title: '80-летие Победы — хороший повод вспомнить историю семьи и страны. Показать фотографии своих фронтовиков детям и внукам. Рассказать о них и о том, какой ценой оплачен был мир, в котором мы родились.\n' +
                '\n' +
                'Дорогие друзья, желаем вам и вашим близким мира и здоровья!\n' +
                'С праздником!',
            photoUrl: 'https://sun9-43.userapi.com/impg/S4RbBD9d6LGgnKq0CoN0iebVRyUKfd6WKu1MpA/RBZJDO8bit4.jpg?size=1920x1080&quality=95&sign=16b3dd2117fbde6c2bb05808c705066c&type=album',
            date: '21.01.2025'
        }
    ]);

    useEffect(() => {
        (async () => {
            const response :Event[] = await GetEvents(5, 5);
            setEvents(response);
        })();
    }, []);

    return (
        <MainSection id={'events'} style={{gap: '25px', maxWidth: '1200px', margin: '0 auto', width: '100%'}}>
            <ArticleHeader>Ближайшие события</ArticleHeader>
            <article>
                <Swiper slides={events} isEvents={true} />
            </article>
        </MainSection>
    );
};
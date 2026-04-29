import styled from 'styled-components';
import {useState} from 'react';
import {font} from "../../GlobalStyles.ts";
import {MainSection} from "../../pages/mainPage.tsx";
import {ActionButton} from "../common/ActionButton.tsx";

const ReviewsContainer = styled.section`
    padding: 40px 20px;
    ${font(20, null, 'Raleway')};
    display: flex;
    gap: 30px;
    border-radius: 70px;
    background-color: rgba(0, 177, 197, 0.2);
    position: relative;
`;

const LeftColumn = styled.div`
    flex: 1;
    max-width: 60%;
    height: 500px;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const LeftColumnWrapper = styled.div`
    flex: 1;
    overflow-y: auto;
    padding-right: 15px;
    
    margin-bottom: 15px;
`;

const RightColumn = styled.div`
    flex: 1;
    max-width: 40%;
`;

const Title = styled.h2`
    ${font(70, null, 'Golos')};
`;

const ReviewList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ReviewCard = styled.div<{ isActive: boolean }>`
    background: ${({isActive}) => (isActive ? '#e3f2fd' : '#f9f9f9')};
    padding: 20px;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-left: 4px solid ${({isActive}) => (isActive ? '#0bb5db' : 'transparent')};

    &:hover {
        background: #e3f2fd;
    }
`;

const ReviewHeader = styled.div`
    ${font(20, null, 'Golos')};
`;

const ReviewPreview = styled.p`
    ${font(20, null, 'Raleway')};
    overflow: hidden;
`;

const ExpandedReview = styled.div`
    background: #f5f5f5;
    padding: 25px;
    border-radius: 25px;
    height: auto;
    position: sticky;
    top: 180px;
`;

const FullReviewText = styled.p`
    ${font(20, null, 'Raleway')};
`;

const ReviewField = styled.p`
    ${font(20, null, 'Golos')};
`;

export const ReviewsBlock = () => {
    const [selectedReviewId, setSelectedReviewId] = useState(1);

    const reviews = [
        {
            id: 1,
            name: "Анна",
            age: 30,
            status: "онкопациент",
            date: "01.01.2025",
            text: "Хочу выразить благодарность за поддержку которую оказывает фонд. Особенно хочется отметить работу психологов и волонтеров, которые всегда находят нужные слова.\n\nБлагодаря вам я чувствую, что не одна в этой борьбе. Регулярные встречи и консультации помогают мне сохранять оптимизм и силы для лечения."
        },
        {
            id: 2,
            name: "Иван",
            age: 45,
            status: "родственник пациента",
            date: "15.02.2025",
            text: "Спасибо за помощь в трудный период. Без вашей поддержки было бы гораздо сложнее справиться с ситуацией.\n\nОрганизация мероприятий и консультаций на высшем уровне. Отдельное спасибо за теплую атмосферу и понимание, с которым вы относитесь к каждому обратившемуся."
        },
        {
            id: 3,
            name: "Мария",
            age: 28,
            status: "онкопациент",
            date: "22.03.2025",
            text: "Очень благодарна за организацию мероприятий и возможность общаться с людьми, которые понимают мою ситуацию.\n\nОсобенно ценю групповые занятия, где можно поделиться переживаниями и получить поддержку от тех, кто действительно понимает, через что я прохожу."
        },
        {
            id: 4,
            name: "Дмитрий",
            age: 35,
            status: "волонтер",
            date: "05.04.2025",
            text: "Рад быть частью этого сообщества. Видеть благодарность в глазах людей - лучшая награда за работу.\n\nЗа время волонтерства я сам многому научился и нашел настоящих друзей среди коллег и подопечных. Эта работа изменила мое отношение к жизни и помогла по-новому взглянуть на многие вещи."
        },
        {
            id: 5,
            name: "Дмитрий",
            age: 35,
            status: "волонтер",
            date: "05.04.2025",
            text: "Рад быть частью этого сообщества. Видеть благодарность в глазах людей - лучшая награда за работу.\n\nЗа время волонтерства я сам многому научился и нашел настоящих друзей среди коллег и подопечных. Эта работа изменила мое отношение к жизни и помогла по-новому взглянуть на многие вещи."
        },
        {
            id: 6,
            name: "Дмитрий",
            age: 35,
            status: "волонтер",
            date: "05.04.2025",
            text: "Рад быть частью этого сообщества. Видеть благодарность в глазах людей - лучшая награда за работу.\n\nЗа время волонтерства я сам многому научился и нашел настоящих друзей среди коллег и подопечных. Эта работа изменила мое отношение к жизни и помогла по-новому взглянуть на многие вещи."
        },
        {
            id: 7,
            name: "Дмитрий",
            age: 35,
            status: "волонтер",
            date: "05.04.2025",
            text: "Рад быть частью этого сообщества. Видеть благодарность в глазах людей - лучшая награда за работу.\n\nЗа время волонтерства я сам многому научился и нашел настоящих друзей среди коллег и подопечных. Эта работа изменила мое отношение к жизни и помогла по-новому взглянуть на многие вещи."
        }
    ];

    const selectedReview = reviews.find(review => review.id === selectedReviewId) || reviews[0];

    return (
        <MainSection id={'reviews'} style={{gap: '25px', maxWidth: '1200px', margin: '0 auto', width: '100%'}}>
            <Title>Отзывы</Title>
            <ReviewsContainer>
                <LeftColumn>
                    <LeftColumnWrapper>
                        <ReviewList>
                            {reviews.map(review => (
                                <ReviewCard
                                    key={review.id}
                                    isActive={review.id === selectedReviewId}
                                    onClick={() => setSelectedReviewId(review.id)}
                                >
                                    <ReviewHeader>
                                        <ReviewField>{review.name}, {review.age}, {review.status}</ReviewField>
                                    </ReviewHeader>
                                    <ReviewPreview>{review.text.split('\n')[0]}</ReviewPreview>
                                </ReviewCard>
                            ))}
                        </ReviewList>
                    </LeftColumnWrapper>
                    <ActionButton headerForForm={'Оставить отзыв'}
                                  buttonText={'Оставить отзыв'}
                                  formType={'review'} />
                </LeftColumn>

                <RightColumn>
                    <ExpandedReview>
                        <ReviewHeader>
                            <ReviewField>
                                {selectedReview.name}, {selectedReview.age}, {selectedReview.status}
                            </ReviewField>
                            <ReviewField>{selectedReview.date}</ReviewField>
                        </ReviewHeader>
                        <FullReviewText><br />{`${selectedReview.text}`}</FullReviewText>
                    </ExpandedReview>
                </RightColumn>
            </ReviewsContainer>
        </MainSection>
    );
};
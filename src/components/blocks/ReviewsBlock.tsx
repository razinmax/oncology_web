import styled from 'styled-components';
import {useState, useEffect} from 'react';
import {font} from "../../GlobalStyles.ts";
import {MainSection} from "../../pages/mainPage.tsx";
import {ActionButton} from "../common/ActionButton.tsx";
import {Review, ReviewerStatus} from "../../services/types.ts";
import {GetReviews} from "../../services/api.ts";``

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
    ${font(52, null, 'Golos')};
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
    const mockReviews: Review[] = [
        {
            reviewerName: "Анна",
            reviewerAge: 30,
            reviewerStatus: ReviewerStatus.Patient,
            date: "01.01.2025",
            text: "Хочу выразить благодарность за поддержку которую оказывает фонд. Особенно хочется отметить работу психологов и волонтеров, которые всегда находят нужные слова.\n\nБлагодаря вам я чувствую, что не одна в этой борьбе. Регулярные встречи и консультации помогают мне сохранять оптимизм и силы для лечения."
        },
        {
            reviewerName: "Иван",
            reviewerAge: 45,
            reviewerStatus: ReviewerStatus.PatientRelative,
            date: "15.02.2025",
            text: "Спасибо за помощь в трудный период. Без вашей поддержки было бы гораздо сложнее справиться с ситуацией.\n\nОрганизация мероприятий и консультаций на высшем уровне. Отдельное спасибо за теплую атмосферу и понимание, с которым вы относитесь к каждому обратившемуся."
        },
        {
            reviewerName: "Мария",
            reviewerAge: 28,
            reviewerStatus: ReviewerStatus.Patient,
            date: "22.03.2025",
            text: "Очень благодарна за организацию мероприятий и возможность общаться с людьми, которые понимают мою ситуацию.\n\nОсобенно ценю групповые занятия, где можно поделиться переживаниями и получить поддержку от тех, кто действительно понимает, через что я прохожу."
        },
        {
            reviewerName: "Дмитрий",
            reviewerAge: 35,
            reviewerStatus: ReviewerStatus.Other,
            date: "05.04.2025",
            text: "Рад быть частью этого сообщества. Видеть благодарность в глазах людей - лучшая награда за работу.\n\nЗа время волонтерства я сам многому научился и нашел настоящих друзей среди коллег и подопечных. Эта работа изменила мое отношение к жизни и помогла по-новому взглянуть на многие вещи."
        }
    ];

    const getReviewerStatus = (status: ReviewerStatus): string => {
        switch (status) {
            case ReviewerStatus.Patient:
                return "онкопациент";

            case ReviewerStatus.PatientRelative:
                return "родственник пациента";

            case ReviewerStatus.Other:
                return "другое";

            default:
                return "";
        }
    };
    
    const [reviews, setReviews] = useState<Review[]>(mockReviews);
    const [selectedReviewIndex, setSelectedReviewIndex] = useState(0);
    
    useEffect(() => {
        const loadReviews = async () => {
            try {
                const data = await GetReviews(1, 20);

                if (data.length > 0) {
                    setReviews(data);
                }
            } catch (error) {
                console.error("Ошибка загрузки отзывов:", error);
            }
        };

        loadReviews();
    }, []);

    const selectedReview = reviews[selectedReviewIndex];

    return (
        <MainSection id={'reviews'} style={{gap: '25px', maxWidth: '1100px', margin: '0 auto', width: '100%'}}>
            <Title>Отзывы</Title>
            <ReviewsContainer>
                <LeftColumn>
                    <LeftColumnWrapper>
                        <ReviewList>
                            {reviews.map((review, index) => (
                                <ReviewCard
                                    key={index}
                                    isActive={index === selectedReviewIndex}
                                    onClick={() => setSelectedReviewIndex(index)}
                                >
                                    <ReviewHeader>
                                        <ReviewField>
                                            {review.reviewerName},
                                            {" "}
                                            {review.reviewerAge},
                                            {" "}
                                            {getReviewerStatus(review.reviewerStatus)}
                                        </ReviewField>
                                    </ReviewHeader>

                                    <ReviewPreview>
                                        {review.text.split('\n')[0]}
                                    </ReviewPreview>
                                </ReviewCard>
                            ))}
                        </ReviewList>
                    </LeftColumnWrapper>
                    <ActionButton headerForForm={'Оставить отзыв'}
                                  buttonText={'Оставить отзыв'}
                                  formType={'review'} />
                </LeftColumn>

                <RightColumn>
                    {selectedReview && (
                        <ExpandedReview>
                            <ReviewHeader>
                                <ReviewField>
                                    {selectedReview.reviewerName},
                                    {" "}
                                    {selectedReview.reviewerAge},
                                    {" "}
                                    {getReviewerStatus(selectedReview.reviewerStatus)}
                                </ReviewField>
                            </ReviewHeader>

                            <FullReviewText>
                                <br />
                                {selectedReview.text}
                            </FullReviewText>
                        </ExpandedReview>
                    )}
                </RightColumn>
            </ReviewsContainer>
        </MainSection>
    );
};
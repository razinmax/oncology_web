import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {font} from '../GlobalStyles.ts';
import {ArticleHeader, MainSection} from './mainPage.tsx';
import {ArticlePreview, fetchArticles} from '../services/articlesApi.ts';

const ArticlesContainer = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 10px 10px 80px;
`;

const ArticleItem = styled(Link)`
    display: flex;
    gap: 20px;
    padding: 15px;
    border-radius: 15px;
    background-color: rgba(0, 177, 197, 0.1);
    height: 290px;
    width: 100%;
    box-sizing: border-box;

    color: inherit;
    text-decoration: none;

    &:hover img {
        scale: 1.035;
        box-shadow: 0 0 22px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
    }
`;

const ArticleImageContainer = styled.div`
    width: 260px;
    height: 260px;
    flex-shrink: 0;
    border-radius: 15px;

    overflow: hidden;

    @media (max-width: 768px) {
        width: 100%;
        height: 280px;
    }
`;

const ArticleImage = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 15px;
    transition: 0.3s all ease;
`;

const ArticleContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    overflow: hidden;
    gap: 20px;
`;

const ArticleTitle = styled.h2`
    ${font(28, 34, 'Golos')};
    margin: 0;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (max-width: 768px) {
        ${font(22, 28, 'Golos')};
    }
`;

const ArticleText = styled.p`
    ${font(20, 30, 'Raleway')};
    color: #666;
    width: 95%;
    margin: 0;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (max-width: 768px) {
        ${font(16, 24, 'Raleway')};
        width: 100%;
    }
`;

const Message = styled.p`
    ${font(20, 30, 'Raleway')};
    text-align: center;
`;

export const ArticlesPage = () => {
    const [articles, setArticles] = useState<ArticlePreview[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // fetchArticles сам подставляет запасные статьи, если бэк недоступен
        fetchArticles()
            .then(setArticles)
            .finally(() => setLoading(false));
    }, []);

    return (
        <MainSection style={{gap: '25px', maxWidth: '1100px', margin: '0 auto', width: '100%'}}>
            <ArticleHeader>Статьи</ArticleHeader>

            {loading && <Message>Загрузка...</Message>}
            {!loading && articles.length === 0 && <Message>Пока нет статей</Message>}

            <ArticlesContainer>
                {articles.map((a) => (
                    <ArticleItem key={a.id} to={`/article/${a.id}`}>
                        <ArticleImageContainer>
                            <ArticleImage src={a.imageUrl} alt={a.title} />
                        </ArticleImageContainer>

                        <ArticleContent>
                            <ArticleTitle>{a.title}</ArticleTitle>
                            <ArticleText>{a.shortText}</ArticleText>
                        </ArticleContent>
                    </ArticleItem>
                ))}
            </ArticlesContainer>
        </MainSection>
    );
};

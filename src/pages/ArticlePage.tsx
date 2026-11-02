import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import styled from 'styled-components';
import {centerContent, font} from '../GlobalStyles.ts';
import {Article, fetchArticle} from '../services/articlesApi.ts';

const ArticleContainer = styled.article`
    background-color: rgba(0, 177, 197, 0.2);
    border-radius: 70px;

    ${centerContent()};
    flex-direction: column;
    justify-content: center;

    padding: 60px 0;
    gap: 35px;

    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;

    @media (max-width: 768px) {
        border-radius: 40px;
        padding: 30px 0;
        gap: 24px;
    }
`;

const BackLink = styled(Link)`
    ${font(18, 24, 'Raleway')};
    align-self: flex-start;
    margin-left: 11%;
    color: inherit;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        margin-left: 20px;
    }
`;

const Header = styled.h1`
    ${font(52, null, 'Golos')};
    width: 78%;
    text-align: center;

    @media (max-width: 768px) {
        ${font(32, null, 'Golos')};
    }
`;

const ImageContainer = styled.div`
    width: 78%;
    max-width: 420px;
    aspect-ratio: 1 / 1;
    border-radius: 40px;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
`;

const Image = styled.img`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
`;

const Text = styled.p`
    ${font(20, 30, 'Raleway')};
    width: 78%;
    text-align: left;
    white-space: pre-line;

    @media (max-width: 768px) {
        ${font(16, 24, 'Raleway')};
    }
`;

const Message = styled.p`
    ${font(20, 30, 'Raleway')};
`;

export function ArticlePage() {
    const {id} = useParams<{ id: string }>();
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        fetchArticle(id)
            .then(setArticle)
            .catch((e: Error) => setError(e.message))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <Message>Загрузка...</Message>;
    if (error || !article) return <Message>{error ?? 'Статья не найдена'}</Message>;

    return (
        <ArticleContainer>
            <BackLink to="/articles">← Все статьи</BackLink>
            <Header>{article.title}</Header>
            {article.imageUrl && (
                <ImageContainer>
                    <Image src={article.imageUrl} alt={article.title} />
                </ImageContainer>
            )}
            <Text>{article.text}</Text>
        </ArticleContainer>
    );
}
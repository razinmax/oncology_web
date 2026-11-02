import {fallbackArticles} from './fallbackArticles.ts';

export interface ArticlePreview {
    id: number;
    title: string;
    shortText: string;
    imageUrl: string;
}

export interface Article {
    id: number;
    title: string;
    text: string;
    imageUrl?: string;
}

// TODO: заменить на реальный адрес API из админки
const API_URL = '/api';

// Запрос, который считается успешным, только если пришёл именно JSON.
// Dev-сервер на неизвестные адреса отдаёт index.html со статусом 200,
// поэтому одной проверки res.ok недостаточно.
async function getJson<T>(url: string): Promise<T> {
    const res = await fetch(url);
    const contentType = res.headers.get('content-type') ?? '';
    if (!res.ok || !contentType.includes('application/json')) {
        throw new Error(`Некорректный ответ сервера (${res.status})`);
    }
    return res.json();
}

export async function fetchArticles(): Promise<ArticlePreview[]> {
    try {
        const data = await getJson<ArticlePreview[]>(`${API_URL}/articles`);
        if (Array.isArray(data) && data.length > 0) return data;
    } catch {
        // бэк недоступен — показываем запасные статьи
    }
    return fallbackArticles.map(({id, title, shortText, imageUrl}) => ({
        id,
        title,
        shortText,
        imageUrl,
    }));
}

export async function fetchArticle(id: string): Promise<Article> {
    try {
        return await getJson<Article>(`${API_URL}/articles/${id}`);
    } catch {
        const found = fallbackArticles.find((a) => String(a.id) === id);
        if (found) return found;
        throw new Error('Статья не найдена');
    }
}

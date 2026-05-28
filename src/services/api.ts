import {Banner, News, Event, Data} from "./types.ts";

const url = import.meta.env.VITE_BACKEND_URL;

async function SendGet<T extends Data>(endpoint: string): Promise<T> {
    try {
        const response = await fetch(`${url}/${endpoint}`, {
            method: 'GET'
        });
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function GetNews(pageNumber: number, pageSize: number): Promise<News[]> {
    const endpoint = `api/v1/news?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return await SendGet(endpoint);
}

export async function GetEvents(pageNumber: number, pageSize: number): Promise<Event[]> {
    const endpoint = `api/v1/events?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return await SendGet(endpoint);
}

export async function GetBanners(): Promise<Banner[]> {
    const endpoint = `api/v1/banners/displaying`;
    return await SendGet(endpoint);
}




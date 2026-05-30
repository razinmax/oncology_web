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

async function SendPost(endpoint: string, body: unknown): Promise<Response> {
    const response = await fetch(`${url}/${endpoint}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    });
    return response;
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

export async function SignUpForConsultation(data: {
    patientName: string;
    patientAge: number;
    patientPhoneNumber: string | null;
    patientEmail: string | null;
    communicationMethod: number;
}): Promise<Response> {
    return await SendPost('api/v1/Consultations', data);
}

export async function SignUpForVolunteer(data: {
    applicantName: string;
    applicantAge: number;
    applicantPhoneNumber: string | null;
    applicantEmail: string | null;
    communicationMethod: number;
}): Promise<Response> {
    return await SendPost('api/v1/Volunteers', data);
}

export async function LeaveReview(data: {
    reviewerName: string;
    reviewerAge: number;
    reviewerStatus: number;
    text: string;
}): Promise<Response> {
    return await SendPost('api-site/v1/Reviews', data);
}

export async function SignUpForSupportGroup(data: {
    applicantName: string;
    applicantAge: number;
    applicantPhoneNumber: string | null;
    applicantEmail: string | null;
    communicationMethod: number;
}): Promise<Response> {
    return await SendPost('api-site/v1/SupportGroups', data);
}
export type News = {
    postUrl: string,
    text: string,
    imageUrl: string
}

export type Event = {
    title: string,
    imageUrl: string,
    date: string
}

export type Banner = {
    title?: string,
    description?: string,
    imageUrl: string,
    mobileImageUrl: string,
    displayOrder: number,
    redirectOnClickUrl?: string
}

export type Data = Banner[] | News[] | Event[];

export type ReviewData = {
    name: string,
    age: string,
    status: string,
    reviewText: string,
}

export type RecordData = {
    name: string,
    age: string,
    email?: string,
    phone?: string,
    allowPhone: boolean,
    allowEmail: boolean,
    allowWhatsApp: boolean,
    allowTelegram: boolean,
}
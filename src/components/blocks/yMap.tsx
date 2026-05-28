import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const OFFICES = [
    {
        coords: [55.195308, 61.281452],
        caption: 'Головной офис. Офисный центр «Сорока», оф. 1',
    },
    {
        coords: [55.134795, 61.369819],
        caption: 'Кабинет доверия. ул. Блюхера, 42Б, 3-й этаж, кабинет 3.46',
    },
];

const center: [number, number] = [
    OFFICES.reduce((sum, o) => sum + o.coords[0], 0) / OFFICES.length,
    OFFICES.reduce((sum, o) => sum + o.coords[1], 0) / OFFICES.length,
];

export default function YandexMap() {
    return (
        <YMaps query={{ apikey: "c0f175cb-8f6e-44bb-8b4c-19de08734a70" }}>
            <Map
                defaultState={{ center, zoom: 12 }}
                width="100%"
                height="500px"
            >
                {OFFICES.map((office) => (
                    <Placemark
                        key={office.caption}
                        geometry={office.coords}
                        properties={{ iconCaption: office.caption }}
                    />
                ))}
            </Map>
        </YMaps>
    );
}
import styled from 'styled-components'
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";
import {Banner, Event, News} from "../../services/types.ts";
import {Swiper as SwiperReact, SwiperSlide} from "swiper/react";
import {font} from "../../GlobalStyles.ts";
import {openInNewTab} from "../../services/commonHandlers.ts";

const CustomSwiper = styled(SwiperReact)<{ $height: number }>`
    height: max-content;
    display: block;
    min-height: 640px;
    min-height: ${props => props.$height}px;
`;

const Slide = styled(SwiperSlide)<{ isBanner?: boolean, $height: number }>`
    height: ${props => props.$height}px;
    display: flex;
    align-items: center;

    box-sizing: border-box;
    ${props => props.isBanner
            ? undefined
            : 'padding: 0 4% 50px'};
    
    gap: 10%;
    border-radius: 70px;
    background-color: rgba(0, 177, 197, 0.2);
    justify-content: space-between;

    overflow: hidden;
`;

const BannerImg = styled.img`
    width: 100%;
    height: auto;
    ${font(26, 38, 'Golos')};
`;

const SlideContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30%;
`;

const SlideText = styled.h2<{ font: string }>`
    width: 100%;
    ${props => font(20, 24, props.font)};
`;

const SlideImg = styled.img`
    width: 500px;
    height: 500px;
    margin-top: 4%;
    border-radius: 40px;
`;

const NewsSlideImg = styled(SlideImg)`
    width: 350px;
    height: 350px;
`;

interface SwiperProps {
    slides: Banner[] | Event[] | News[];
    isEvents?: boolean;
    isNews?: boolean;
    height?: number;
}

export function Swiper({slides, isEvents, isNews, height = 640}: SwiperProps) {
    // Баннеры
    if (!isEvents && !isNews) {
        return (
            <CustomSwiper
                $height={height}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={100}
                slidesPerView={1}
                navigation
                pagination={{clickable: true}}
                loop={true}>
                {(slides as Banner[]).map((item: Banner, index: number) => (
                    <Slide key={index}
                           isBanner={true}
                           $height={height}
                           onClick={() => {
                               if (item.redirectOnClickUrl) {
                                   openInNewTab(item.redirectOnClickUrl);
                               }
                           }}
                           style={{cursor: 'pointer'}}
                    >
                        <BannerImg src={item.imageUrl} alt={item.title}/>
                    </Slide>
                ))}
            </CustomSwiper>
        )
    }

    // Новости
    if (isNews) {
        return (
            <CustomSwiper
                $height={height}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={100}
                slidesPerView={1}
                navigation
                pagination={{clickable: true}}
                loop={true}>
                {(slides as News[]).map((item: News, index: number) => (
                    <Slide key={index}
                            $height={height}
                           onClick={() => openInNewTab(item.postUrl)}
                           style={{cursor: 'pointer'}}>
                        <SlideContent>
                            <SlideText font={'Raleway'}>
                                {item.text}
                            </SlideText>
                        </SlideContent>
                        <NewsSlideImg src={item.imageUrl} alt={'фото'}/>
                    </Slide>
                ))}
            </CustomSwiper>
        )
    }

    // События
    return (
        <CustomSwiper
            $height={height}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={100}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
            loop={true}>
            {(slides as Event[]).map((item: Event, index: number) => (
                <Slide key={index} $height={height}>
                    <SlideContent>
                        <SlideText font={'Raleway'}>
                            {item.title}
                        </SlideText>
                        <SlideText font={'Golos'}>
                            {item.date}
                        </SlideText>
                    </SlideContent>
                    <SlideImg src={item.imageUrl} alt={'фото'}/>
                </Slide>
            ))}
        </CustomSwiper>
    )
}
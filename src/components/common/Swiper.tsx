import styled from 'styled-components'
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";
import {Banner, Event} from "../../services/types.ts";
import {Swiper as SwiperReact, SwiperSlide} from "swiper/react";
import {font} from "../../GlobalStyles.ts";
import {openInNewTab} from "../../services/commonHandlers.ts";

const CustomSwiper = styled(SwiperReact)`
    height: max-content;
    display: block;
    min-height: 640px;
`;

const Slide = styled(SwiperSlide)<{ isBanner?: boolean }>`
    height: 600px;
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
    ${props => font(26, 38, props.font)};
`;

const SlideImg = styled.img`
    width: 500px;
    height: 500px;
    margin-top: 4%;
    border-radius: 40px;
`;

interface SwiperProps {
    slides: Banner[] | Event[];
    isEvents: boolean;
}

export function Swiper({slides, isEvents}: SwiperProps) {
    if (!isEvents) {
        return (
            <CustomSwiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={100}
                slidesPerView={1}
                navigation
                pagination={{clickable: true}}
                loop={true}>
                {(slides as Banner[]).map((item: Banner, index: number) => (
                    <Slide key={index}
                           isBanner={true}
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

    return (
        <CustomSwiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={100}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
            loop={true}>
            {(slides as Event[]).map((item: Event, index: number) => (
                <Slide key={index}>
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
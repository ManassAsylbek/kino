import React from 'react';
import {Pagination, Navigation, Mousewheel, Keyboard} from "swiper";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import s from "./Swiper.module.scss";
import Box from "@mui/material/Box";
import img from "../../assets/images/06fa2fc486_500.jpeg";
import prev from "../../assets/icon/prev.svg";
import next from "../../assets/icon/next.svg.svg";
import Container from "@mui/material/Container";
import SwiperButtonPrev from "../Banner/SwiperButtonPrev";
import SwiperButtonNext from "../Banner/SwiperButtonNext";

interface ISwiper {

}

const SwiperList: React.FC<ISwiper> = () => {

    const swiper = useSwiper()

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    return (
        <Container maxWidth={"lg"} className={s.container}>
            <div className={s.title}>title</div>
            <Swiper

                breakpoints={{

                    0: {
                        slidesPerView: 2,
                    },
                    400: {
                        slidesPerView: 3,
                    },
                    500: {
                        slidesPerView: 4,
                    },
                    1000: {
                        slidesPerView: 5,
                    },
                    1100: {
                        slidesPerView: 6,
                    },
                    1200: {
                        slidesPerView: 7,
                    }
                }}
                mousewheel={true}
                modules={[Pagination, Navigation, Mousewheel, Keyboard]}
                className={s.mySwiper}
            >
                <SwiperSlide>
                    <Box className={s.mySlider}>
                        <img className={s.image}
                             src="https://images.pexels.com/photos/13816476/pexels-photo-13816476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                             alt=""/>
                    </Box>
                    <div className={s.name}>Фиксик</div>
                    <div className={s.subscription}>Подписка</div>
                </SwiperSlide>
                <SwiperSlide>
                    <Box className={s.mySlider}>
                        <img className={s.image}
                             src="https://images.pexels.com/photos/13816476/pexels-photo-13816476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                             alt=""/>
                    </Box>
                    <div className={s.name}>Фиксик</div>
                    <div className={s.subscription}>Подписка</div>
                </SwiperSlide>
                <SwiperSlide>
                    <Box className={s.mySlider}>
                        <img className={s.image}
                             src="https://images.pexels.com/photos/13816476/pexels-photo-13816476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                             alt=""/>
                    </Box>
                    <div className={s.name}>Фиксик</div>
                    <div className={s.subscription}>Подписка</div>
                </SwiperSlide>
                <SwiperSlide>
                    <Box className={s.mySlider}>
                        <img className={s.image}
                             src="https://images.pexels.com/photos/13816476/pexels-photo-13816476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                             alt=""/>
                    </Box>
                    <div className={s.name}>Фиксик</div>
                    <div className={s.subscription}>Подписка</div>
                </SwiperSlide>
                <SwiperSlide>
                    <Box className={s.mySlider}>
                        <img className={s.image}
                             src="https://images.pexels.com/photos/13816476/pexels-photo-13816476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                             alt=""/>
                    </Box>
                    <div className={s.name}>Фиксик</div>
                    <div className={s.subscription}>Подписка</div>
                </SwiperSlide>
                <SwiperSlide>
                    <Box className={s.mySlider}>
                        <img className={s.image}
                             src="https://images.pexels.com/photos/13816476/pexels-photo-13816476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                             alt=""/>
                    </Box>
                    <div className={s.name}>Фиксик</div>
                    <div className={s.subscription}>Подписка</div>
                </SwiperSlide>
                <SwiperSlide>
                    <Box className={s.mySlider}>
                        <img className={s.image}
                             src="https://images.pexels.com/photos/13816476/pexels-photo-13816476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                             alt=""/>
                    </Box>
                    <div className={s.name}>Фиксик</div>
                    <div className={s.subscription}>Подписка</div>
                </SwiperSlide>
                <SwiperSlide>
                    <Box className={s.mySlider}>
                        <img className={s.image}
                             src="https://images.pexels.com/photos/13816476/pexels-photo-13816476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                             alt=""/>
                    </Box>
                    <div className={s.name}>Фиксик</div>
                    <div className={s.subscription}>Подписка</div>
                </SwiperSlide>
                <SwiperSlide>
                    <Box className={s.mySlider}>
                        <img className={s.image}
                             src="https://images.pexels.com/photos/13816476/pexels-photo-13816476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                             alt=""/>
                    </Box>
                    <div className={s.name}>Фиксик</div>
                    <div className={s.subscription}>Подписка</div>
                </SwiperSlide>
                <SwiperSlide>
                    <Box className={s.mySlider}>
                        <img className={s.image}
                             src="https://images.pexels.com/photos/13816476/pexels-photo-13816476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                             alt=""/>
                    </Box>
                    <div className={s.name}>Фиксик</div>
                    <div className={s.subscription}>Подписка</div>
                </SwiperSlide>
                <SwiperSlide>
                    <Box className={s.mySlider}>
                        <img className={s.image}
                             src="https://images.pexels.com/photos/13816476/pexels-photo-13816476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                             alt=""/>
                    </Box>
                    <div className={s.name}>Фиксик</div>
                    <div className={s.subscription}>Подписка</div>
                </SwiperSlide>
                <SwiperSlide>
                    <Box className={s.mySlider}>
                        <img className={s.image}
                             src="https://images.pexels.com/photos/13816476/pexels-photo-13816476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                             alt=""/>
                    </Box>
                    <div className={s.name}>Фиксик</div>
                    <div className={s.subscription}>Подписка</div>
                </SwiperSlide>
                <Box className={s.buttonWrapper}>
                    <SwiperButtonPrev><img src={prev} alt=""/></SwiperButtonPrev>
                    <SwiperButtonNext><img src={next} alt=""/></SwiperButtonNext>
                </Box>
            </Swiper>

        </Container>)
};

export default SwiperList;
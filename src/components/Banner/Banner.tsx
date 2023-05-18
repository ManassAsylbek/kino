import React, {useCallback, useEffect, useRef, useState} from 'react';

import {Swiper, SwiperSlide,useSwiper} from "swiper/react";
import {Navigation, Pagination, Mousewheel, Keyboard} from "swiper";
import img from "../../assets/images/06fa2fc486_500.jpeg"
import prev from "../../assets/icon/prev.svg"
import next from "../../assets/icon/next.svg.svg"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import s from "./Banner.module.scss"
import Box from "@mui/material/Box";
import {ColorButton} from "../Button/CustomButton";
import SwiperButtonPrev from "./SwiperButtonPrev";
import SwiperButtonNext from "./SwiperButtonNext";



const Banner = () => {

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)


    return (
        <Swiper
           /* navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
            }}
*/
            breakpoints={{

                0: {
                    slidesPerView: 1.051,
                    spaceBetween: 17,
                },
                1200: {
                    slidesPerView: 1.07,
                    spaceBetween: 24,
                },
                1296: {
                    slidesPerView: 1.13,
                    spaceBetween: 24,
                },
                1400: {
                    slidesPerView: 1.24,
                    spaceBetween: 24,
                },
            }}
            /*    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}*/
            loop={true}
            mousewheel={true}
            centeredSlides={true}
            modules={[Pagination, Navigation, Mousewheel, Keyboard]}
            className={s.mySwiper}
        >
            <SwiperSlide>
                <Box className={s.mySlider}>
                    <img className={s.image}
                         src="https://www.shutterstock.com/image-illustration/farmland-rural-cartoon-landscape-600w-705725146.jpg"
                         alt=""/>
                </Box>
                <ColorButton sx={{p: "9px 15px"}} className={s.button}>Показать подборку</ColorButton>

            </SwiperSlide>
            <SwiperSlide>
                <Box className={s.mySlider}>
                    <img className={s.image}
                         src="https://www.shutterstock.com/image-illustration/farmland-rural-cartoon-landscape-600w-705725146.jpg"
                         alt=""/>
                </Box>
                <ColorButton sx={{p: "9px 15px"}} className={s.button}>Показать подборку</ColorButton>

            </SwiperSlide>
            <SwiperSlide>
                <Box className={s.mySlider}>
                    <img className={s.image}
                         src="https://www.shutterstock.com/image-illustration/farmland-rural-cartoon-landscape-600w-705725146.jpg"
                         alt=""/>
                </Box>
                <ColorButton sx={{p: "9px 15px"}} className={s.button}>Показать подборку</ColorButton>

            </SwiperSlide>
            <SwiperSlide>
                <Box className={s.mySlider}>
                    <img className={s.image}
                         src="https://www.shutterstock.com/image-illustration/farmland-rural-cartoon-landscape-600w-705725146.jpg"
                         alt=""/>
                </Box>
                <ColorButton sx={{p: "9px 15px"}} className={s.button}>Показать подборку</ColorButton>

            </SwiperSlide>

            <Box sx={{display: {xs: 'none', md: 'flex'}}} className={s.buttonWrapper}>
                <SwiperButtonPrev><img src={prev} alt=""/></SwiperButtonPrev>
                <SwiperButtonNext><img src={next} alt=""/></SwiperButtonNext>
            </Box>
        </Swiper>
    )
        ;
};

export default Banner;
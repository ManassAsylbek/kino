import { useSwiper } from "swiper/react";
import {FC, ReactNode} from "react";
import s from "./Banner.module.scss";
import SwiperButtonNext from "./SwiperButtonNext";
interface SwiperButtonPrev{
    children: ReactNode;
}

const SwiperButtonPrev:FC<SwiperButtonPrev> = ({ children }) => {
    const swiper = useSwiper();
    return <div className={s.prevArrow} onClick={() => swiper.slidePrev()}>{children}</div>;
};
export default SwiperButtonPrev;
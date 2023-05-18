import { useSwiper } from "swiper/react";
import {FC, ReactNode} from "react";
import s from "./Banner.module.scss";
import Banner from "./Banner";
interface ISwiperButtonNext{
    children: ReactNode;
}

const SwiperButtonNext:FC<ISwiperButtonNext> = ({ children }) => {
    const swiper = useSwiper();
    return <div className={s.nextArrow} onClick={() => swiper.slideNext()}>{children}</div>;
};

export default SwiperButtonNext;
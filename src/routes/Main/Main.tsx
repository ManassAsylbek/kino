/** @format */

import React from "react";
import img from "../../assets/images/06fa2fc486_500.jpeg"
import Banner from "../../components/Banner/Banner";
import s from "./Main.module.scss"
import SwiperList from "../../components/Swiper/SwiperList";


const Main = () => {

    return (
        <div className={s.main} >
           <Banner/>
            <SwiperList/>
        </div>
    );
};

export default Main;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./slider.scss";
import { Navigation } from "swiper";
import SliderDatabase from "../sliderDatabase/SliderDatabase";


export default function SLider() {
  return (
    <div className="sliderContainer">
      <Swiper navigation={true} modules={[Navigation]} className="swiper">
        <SwiperSlide><SliderDatabase type= 'first' /></SwiperSlide>
        <SwiperSlide><SliderDatabase type= 'second' /></SwiperSlide>
        <SwiperSlide><SliderDatabase type= 'third' /></SwiperSlide>
        <SwiperSlide><SliderDatabase type= 'fourth' /></SwiperSlide>
        <SwiperSlide><SliderDatabase type= 'fifth' /></SwiperSlide>
        <SwiperSlide><SliderDatabase type= 'sixth' /></SwiperSlide>
      </Swiper>
      </div>
  );
}

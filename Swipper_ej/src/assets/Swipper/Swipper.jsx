import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade  } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import logo from "../../../public/logo512.png";
import "./Swiper.css"

const data = [
  {
    id: 1,
    username: "user 1",
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum atque ipsa totam. Magnam asperiores sint fugiat veniam sed quos illum perferendis cum minima voluptatem temporibus mollitia, sunt rem optio. 1",
  },
  {
    id: 2,
    username: "user 2",
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum atque ipsa totam. Magnam asperiores sint fugiat veniam sed quos illum perferendis cum minima voluptatem temporibus mollitia, sunt rem optio. 2",
  },
  {
    id: 3,
    username: "user 3",
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum atque ipsa totam. Magnam asperiores sint fugiat veniam sed quos illum perferendis cum minima voluptatem temporibus mollitia, sunt rem optio. 3",
  },
  {
    id: 4,
    username: "user 4",
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum atque ipsa totam. Magnam asperiores sint fugiat veniam sed quos illum perferendis cum minima voluptatem temporibus mollitia, sunt rem optio. 4",
  },
];

const Swipper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      effect="fade"
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className = "Swiper"
    >
      {data.map((user) => (
        <SwiperSlide key={user.id} className="slide">
          <div className="slide-content">
            <div className="user-content-img">
              <img src={logo} className="user-photo" />
            </div>
            <div className="info-content">
              <h5>{user.username}</h5>
              <p className="user-testimonial">
                "{user.testimonial}""
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swipper;

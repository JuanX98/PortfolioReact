import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, harum ad fugit illo molestias impedit at architecto, itaque eius tenetur, perspiciatis quam nemo temporibus laborum omnis",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, harum ad fugit illo molestias impedit at architecto, itaque eius tenetur, perspiciatis quam nemo temporibus laborum omnis",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, harum ad fugit illo molestias impedit at architecto, itaque eius tenetur, perspiciatis quam nemo temporibus laborum omnis",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, harum ad fugit illo molestias impedit at architecto, itaque eius tenetur, perspiciatis quam nemo temporibus laborum omnis",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonial">
      <div className="t-heading">
        <span>Clients always get</span>
        <span> Exceptional work</span>
        <span> from me...</span>
        <div
          className="blur t-blur1"
          style={{
            background: "var(--purple)",
          }}
        ></div>
        <div
          className="blur t-blur2"
          style={{
            background: "skyblue",
          }}
        ></div>
      </div>
      {/* slider  */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;

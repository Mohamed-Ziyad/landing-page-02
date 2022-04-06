import React from "react";
import { Navigation, Pagination, EffectCreative } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import shotImg1 from "../images/shot-01.jpg";
import shotImg2 from "../images/shot-02.jpg";
import shotImg3 from "../images/shot-03.jpg";
import shotImg4 from "../images/shot-04.jpg";
import shotImg5 from "../images/1.jpg";

function HomeSection() {
  return (
    <div>
      <section className="home" id="home">
        <div className="content">
          <h3>app landing page</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            labore similique eos harum atque omnis ex consectetur, assumenda
            sunt ad facilis illum quaerat doloremque. Aut eveniet culpa enim
            suscipit ullam!
          </p>
          <a href="#" className="btn">
            get started
          </a>
        </div>
        <br />
        <br />
        <Swiper
          // install Swiper modules
          modules={[Navigation, EffectCreative]}
          spaceBetween={50}
          grabCursor={true}
          //centeredSlides={true}
          slidesPerView={"auto"}
          navigation
          pagination={true}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          //  onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          //  className="mySwiper"
        >
          <SwiperSlide>
            <img src={shotImg1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={shotImg2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={shotImg3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={shotImg4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={shotImg1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={shotImg2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={shotImg3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={shotImg4} alt="" />
          </SwiperSlide>
          ...
        </Swiper>
      </section>
    </div>
  );
}

export default HomeSection;

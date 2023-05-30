import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
// slider image import  
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../..//assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import Sectiona_title from "../../../Component/Section_Title/Sectiona_title";
const Food_Category = () => {
    return (
        <div>
            <Sectiona_title
            subTitle={'From 11:00am to 10:00pm'}
            Title={'Order Online'}
            ></Sectiona_title>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper w-2/3"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h4 className="text-center -mt-14 text-2xl text-white text font-serif">Salat</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h4 className="text-center -mt-14 text-2xl text-white text font-serif">Soups</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h4 className="text-center -mt-14 text-2xl text-white text font-serif">Pizza</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h4 className="text-center -mt-14 text-2xl text-white text font-serif">Desserts</h4>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Food_Category;
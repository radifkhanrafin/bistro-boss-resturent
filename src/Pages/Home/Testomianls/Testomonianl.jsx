
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import Sectiona_title from '../../../Component/Section_Title/Sectiona_title';

const Testomonianl = () => {
    const [reviews, setreviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setreviews(data))

    }, []);
    return (
        <section>
            <Sectiona_title
                subTitle={'What Our Clients Say'}
                Title={'TESTIMONIALS'}
            ></Sectiona_title>
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='mx-28  my-12 flex flex-col items-center gap-3'>
                            <p>
                                <Rating
                                className='text-center'
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                            </p>
                            <p>{review.details}</p>
                            <h3 className='text-2xl'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
                {/* <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide> */}
            </Swiper>
        </section>
    );
};

export default Testomonianl;
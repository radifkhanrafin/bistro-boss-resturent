
import Food_card from '../Food_card/Food_card';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
const Tab_Panel = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            items.map(item => <Food_card
                                key={item._id}
                                item={item}
                            ></Food_card>)
                        }
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Tab_Panel;
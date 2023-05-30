import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

//import images
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section>
            <SectionTitle 
            heading="Order Online"
            subHeading='From 11.00am to 10.00pm'
            ></SectionTitle>


            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h1 className="text-4xl text-center uppercase text-white -mt-20 ">Salads</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h1 className="text-4xl text-center uppercase text-white -mt-20 ">Pizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h1 className="text-4xl text-center uppercase text-white -mt-20 ">Soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h1 className="text-4xl text-center uppercase text-white -mt-20 ">Deserts</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h1 className="text-4xl text-center uppercase text-white -mt-20 ">Salads</h1>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";

//rating
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

//react icons
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="my-36">
            <SectionTitle heading='Testimonials' subHeading='What out clients say'></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}>

                        <div className="m-24 flex flex-col items-center space-y-5 ">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={3}
                                readOnly 
                                className="pb-8"
                            />

                            <FaQuoteLeft className="text-[100px] " />
                            <p className="py-12 text-center">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Testimonial;
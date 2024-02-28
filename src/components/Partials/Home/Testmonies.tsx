import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "./Card";
import Customer1 from "../../../assets/cloud.jpg";
import Customer2 from "../../../assets/cust.jpg";

export default function Testmonies() {


    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={true}
                loop={true}



                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Card
                        image={Customer1}
                        stars={2}
                        description={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        }
                        name="Vannessa"
                        title="CEO"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        image={Customer2}
                        stars={4}
                        name="Jane de Cruz"
                        title="Chairman"
                        description={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        }
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        image={Customer1}
                        stars={5}
                        name="James"
                        title="CFO"
                        description={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        }
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

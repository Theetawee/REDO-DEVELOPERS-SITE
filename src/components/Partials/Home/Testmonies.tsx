import { Swiper, SwiperSlide } from "swiper/react";
import User from "../../../assets/user.webp";
import "swiper/css";
import Card from "./Card";

export default function Testmonies() {
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                loop={true}
                // modules={[Autoplay]}
                pagination={{
                    clickable: true,
                }}
            >
                <SwiperSlide>
                    <Card
                        image={User}
                        stars={5}
                        description={
                            "I can't say enough good things about Redo Developers Inc.! Their custom software solutions have revolutionized the way we do business. From the get-go, they understood our needs and delivered a product that exceeded our expectations. Their team is not just professional but genuinely caring about our success. Highly recommend them!"
                        }
                        name="Glen Meakem"
                        title="CEO and Founder of Forever Inc."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        image={User}
                        stars={5}
                        name="Jane"
                        title="Business Woman"
                        description={
                            "Working with Redo Developers Inc. has been an absolute pleasure. They didn't just build us a website; they crafted an online experience that resonates with our audience. Their attention to detail and commitment to delivering top-notch results are unparalleled. If you're looking for a web development partner you can trust, look no further"
                        }
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        image={User}
                        stars={5}
                        name="James"
                        title="Business Owner"
                        description={
                            "Partnering with Redo Developers Inc. for software consulting was one of the best decisions we've made. Their consultants are not only experts in their field but also fantastic listeners. They took the time to understand our unique challenges and provided tailored solutions that fit our needs perfectly. Couldn't be happier with the outcome!"
                        }
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

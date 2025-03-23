import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Title from "./Title";

export default function Gallery() {
  return (
    <div className="overflow-hidden px-5">
      <Title heading="Gallery" title="Our Gallery Images (CPI IT CLUB)" />
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mySwiper w-full max-w-[900px] mx-auto overflow-x-hidden"
      >
        <SwiperSlide>
          <img
            className="w-full h-full object-cover overflow-hidden"
            src="https://media.istockphoto.com/id/1443245439/photo/business-meeting-businesswoman-woman-office-portrait-job-career-happy-businessman-teamwork.jpg?s=612x612&w=0&k=20&c=1ZR02c1UKfGdBCNWzzKlrwrVZuEiOqnAKcKF4V_t038="
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full mx-auto h-[600px] object-cover overflow-hidden"
            src="https://thumbs.dreamstime.com/b/group-business-people-software-developers-working-as-team-office-group-young-business-people-software-110908089.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover"
            src="https://static.vecteezy.com/system/resources/thumbnails/027/102/824/small/group-of-business-team-members-raising-hands-in-the-sunset-sky-background-to-depict-teamwork-free-photo.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover"
            src="https://thumbs.dreamstime.com/b/business-startup-teamwork-joining-hands-team-spirit-collaboratio-business-startup-teamwork-joining-hands-team-spirit-collaboration-101314100.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

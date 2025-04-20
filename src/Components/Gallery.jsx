import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Title from "./Title";
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../Apis/axios";

export default function Gallery() {

  const {data : imgs }= useQuery({
    queryKey:["imgs"],
    queryFn:async()=>{
      const res=await axiosSecure.get("/gallery");
      return res?.data;
    }
  })

  return (
    <div className="overflow-hidden px-5">
      <Title heading="Gallery" title="Our Gallery Images (CPI IT CLUB)" />
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mySwiper w-full max-w-[900px] mx-auto overflow-x-hidden"
      >
        {imgs?.map((img) => (
          <SwiperSlide key={img?._id}>
            <img
              className="w-full h-64 sm:h-[500px] object-cover overflow-hidden "
              src={img?.imgUrl}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

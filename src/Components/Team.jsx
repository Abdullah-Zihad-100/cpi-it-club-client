import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import ProfileCard from "../Components/ProfileCard";
import Title from "./Title";
import { axiosSecure } from "../Apis/axios";
import { useQuery } from "@tanstack/react-query";

const Team = () => {
  const { data: teamData = [] } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const res = await axiosSecure.get("/members");
      return res.data;
    },
  });
  return (
    <div className="max-w-7xl mx-auto py-20 px-5">
      <Title heading="Meet Our Team" title="Get to know our team members" />
      <Swiper
        slidesPerView={1} // Default for small screens
        spaceBetween={20} // Default space between slides
        freeMode={true} // Enable free mode
        pagination={{
          clickable: true, // Enable clickable pagination
        }}
        centeredSlides={true} // Center the active slide
        modules={[FreeMode, Pagination]} // Add required modules
        // className="mySwiper w-[1200px]"
        breakpoints={{
          // Breakpoints for different screen sizes
          320: {
            // sm: Small screens
            slidesPerView: 1, // Show 1 card
            spaceBetween: 20, // Adjust space between cards
            centeredSlides: true, // Center the single card
          },
          768: {
            // md: Medium screens
            slidesPerView: 2, // Show 2 cards
            spaceBetween: 30, // Adjust space between cards
            centeredSlides: false, // Disable centering for multiple cards
          },
          1024: {
            // lg: Large screens
            slidesPerView: 3, // Show 3 cards
            spaceBetween: 40, // Adjust space between cards
            centeredSlides: false, // Disable centering for multiple cards
          },
        }}
      >
        {teamData?.length === 0 ? (
          <h4 className="sm:text-3xl text-xl text-center my-32">No members available</h4>
        ) : (
          teamData?.map((teamMember, index) => (
            <SwiperSlide key={index + 1}>
              <ProfileCard teamMember={teamMember} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default Team;

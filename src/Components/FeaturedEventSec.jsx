import Title from "./Title";
import EventCard from "./EventCard";
import { useQuery } from "@tanstack/react-query";
import { getEvents } from "../Apis/apis";

const FeaturedEventSec = () => {
  const { data: eventData = [] } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await getEvents();
      return res;
    },
  });
  return (
    <div className="pt-10 px-5 max-w-7xl mx-auto">
      <Title
        heading="Featured Events"
        title="Check out our workshops and sessions"
      />
      {eventData.length === 0 ? (
        <p className="sm:text-3xl text-xl text-center my-20">No Data Available....</p>
      ) : (
        eventData
          ?.slice(0, 1)
          .map((event) => <EventCard key={event?._id} event={event} />)
      )}
    </div>
  );
};
export default FeaturedEventSec;

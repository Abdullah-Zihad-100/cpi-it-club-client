import Title from "../Components/Title";
import EventCard from "../Components/EventCard";
import { useQuery } from "@tanstack/react-query";
import { getEvents } from "../Apis/apis";

const Event = () => {
  const { data: eventData = [] } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await getEvents();
      return res;
    },
  });

  return (
    <div className="pt-5">
      <div className="max-w-7xl mx-auto px-5">
        <div className="pt-20">
          <Title title={"Next Events In Our Club"} heading={"Our Events"} />
        </div>
        <div>
          {eventData?.map((event, index) => (
            <EventCard event={event} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Event;

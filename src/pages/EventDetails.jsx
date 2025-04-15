import { useQuery } from "@tanstack/react-query";
import { getSingleEvent } from "../Apis/apis";
import { useParams } from "react-router";


const EventDetails = () => {
  const {id}=useParams();
    const { data: event = [],isLoading,error } = useQuery({
      queryKey: ["eventsDetails"],
      queryFn: async () => {
        const res = await getSingleEvent(id);
        return res;
      },
    });


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching event details</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 text-white pt-36">
      {/* Combined Event Card */}
      <div className="bg-[#0F172A] rounded-3xl overflow-hidden shadow-2xl md:flex">
        {/* Left Image Side */}
        <div className="md:w-1/2">
          <img
            src={event.image} // Dynamic image URL
            alt="Event Poster"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content Side */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-blue-400 mb-2">
            {event.title} {/* Dynamic event title */}
          </h1>
          <h2 className="text-xl font-semibold text-blue-300 mb-4">
            {event.club} {/* Dynamic club name */}
          </h2>

          <p className="mb-4 text-gray-300">
            {event.description} {/* Dynamic event description */}
          </p>

          <div className="grid grid-cols-1 gap-3 text-gray-300 mb-4">
            <div>
              <strong className="text-blue-400">Location:</strong>{" "}
              {event.location} {/* Dynamic location */}
            </div>
            <div>
              <strong className="text-blue-400">Date:</strong> {event.date}{" "}
              {/* Dynamic event date */}
            </div>
            <div>
              <strong className="text-blue-400">Participation Fee:</strong> TK{" "}
              <span className="text-red-400">{event.price.original}</span>{" "}
              {/* Dynamic participation fee */}
            </div>
            <div>
              <strong className="text-blue-400">Winning Prizes:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>{`1st Prize: ${event.prizes.first}`}</li>{" "}
                {/* Dynamic first prize */}
                <li>{`2nd Prize: ${event.prizes.second}`}</li>{" "}
                {/* Dynamic second prize */}
                <li>{`3rd Prize: ${event.prizes.third}`}</li>{" "}
                {/* Dynamic third prize */}
              </ul>
            </div>
          </div>

          <p className="mt-4 italic underline hover:text-blue-600 text-blue-500">
            For Register Message Our Facebook Page
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

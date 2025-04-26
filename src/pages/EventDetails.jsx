import { useQuery } from "@tanstack/react-query";
import { getSingleEvent } from "../Apis/apis";
import { useParams } from "react-router";

const EventDetails = () => {
  const { id } = useParams();

  const {
    data: event,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["eventDetails", id],
    queryFn: async () => {
      const res = await getSingleEvent(id);
      return res;
    },
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500">
        Error fetching event details
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex justify-center items-center text-yellow-400">
        No event found.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 pt-28 md:pt-36 text-white">
      <div className="bg-[#0F172A] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src={event.image}
            alt="Event Poster"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
            {event.title}
          </h1>
          <h2 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">
            {event.club}
          </h2>
          <p className="mb-4 text-gray-300">{event.description}</p>

          <div className="space-y-2 text-gray-300 mb-4">
            <p>
              <strong className="text-blue-400">Location:</strong>{" "}
              {event?.location}
            </p>
            <p>
              <strong className="text-blue-400">Date:</strong> {event?.date}
            </p>
            <p>
              <strong className="text-blue-400">Participation Fee:</strong>{" "}
              <span className="text-red-400">TK {event?.price?.original}</span>
            </p>

            {event?.prizes && (
              <div>
                <strong className="text-blue-400">Winning Prizes:</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>1st Prize: {event.prizes.first}</li>
                  <li>2nd Prize: {event.prizes.second}</li>
                  <li>3rd Prize: {event.prizes.third}</li>
                </ul>
              </div>
            )}
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

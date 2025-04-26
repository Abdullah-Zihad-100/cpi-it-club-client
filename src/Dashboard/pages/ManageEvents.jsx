import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import EventCard from "../../Components/EventCard";
import { axiosSecure } from "../../Apis/axios";
import Title from "../../Components/Title";
import Loader from "../../Components/Loader";
import ImageUploadInput from "../../Components/ImageUploadInput";
import { useState } from "react";
import { imgUplord } from "../../Apis/apis";
import ConfirmModal from "../../Components/ConfirmModal"; // Import the modal

export default function EventManagement() {
  const [imageFile, setImageFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    data: events = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axiosSecure.get("/events");
      return res.data;
    },
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false); // Modal state
  const [eventToDelete, setEventToDelete] = useState(null); // Store event ID to delete

  const handleAddEvent = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;

    try {
      let imageUrl = "";
      if (imageFile) {
        imageUrl = await imgUplord(imageFile);
      }

      const rawDate = form.eventDate.value;
      const formattedDate = new Date(rawDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const newEvent = {
        title: form.eventTitle.value,
        club: "IT CLUB",
        description: form.description.value,
        location: form.location.value,
        date: formattedDate,
        price: {
          original: form.participationFee.value,
        },
        prizes: {
          first: form.firstPrize.value,
          second: form.secondPrize.value,
          third: form.thirdPrize.value,
        },
        image: imageUrl,
      };

      const res = await axiosSecure.post("/events", newEvent);
      if (res.data.insertedId) {
        toast.success("Event added successfully");
        form.reset();
        setImageFile(null);
        refetch();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add event");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await axiosSecure.delete(`/events/${eventToDelete}`);
      if (res.data.deletedId) {
        toast.success(`Event with ID: ${res.data.deletedId} deleted`);
        refetch();
      } else {
        toast.error("Event not found or failed to delete");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete event");
    } finally {
      setShowDeleteModal(false);
    }
  };

  return (
    <div className="p-6 space-y-8 max-w-6xl mx-auto">
      {/* Add Event Form */}
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">
          Add New Event
        </h2>
        <form
          onSubmit={handleAddEvent}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            name="eventTitle"
            placeholder="Event Title"
            disabled={isSubmitting}
            className="col-span-2 border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="description"
            placeholder="Event Description"
            disabled={isSubmitting}
            className="col-span-2 border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
          <input
            type="date"
            name="eventDate"
            disabled={isSubmitting}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="time"
            name="eventTime"
            disabled={isSubmitting}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            name="location"
            placeholder="Location"
            disabled={isSubmitting}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="organizer"
            placeholder="Organizer Name"
            disabled={isSubmitting}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            name="participationFee"
            placeholder="Participation Fee"
            disabled={isSubmitting}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="firstPrize"
            placeholder="1st Prize"
            disabled={isSubmitting}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="secondPrize"
            placeholder="2nd Prize"
            disabled={isSubmitting}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="thirdPrize"
            placeholder="3rd Prize"
            disabled={isSubmitting}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ImageUploadInput
            name="img"
            disabled={isSubmitting}
            onChange={(e) => setImageFile(e.target.files[0])}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? "Adding..." : "Add Event"}
          </button>
        </form>
      </div>

      {/* All Events List */}
      <div>
        {isPending ? (
          <Loader />
        ) : (
          <div>
            <Title heading={"All Events"} />
            {events.map((event) => (
              <EventCard
                event={event}
                handleDelete={() => {
                  setEventToDelete(event?._id);
                  setShowDeleteModal(true); // Open modal
                }}
                key={event._id}
              />
            ))}
          </div>
        )}
      </div>

      {/* Confirm Delete Modal */}
      <ConfirmModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        message="Are you sure you want to delete this event?"
      />
    </div>
  );
}

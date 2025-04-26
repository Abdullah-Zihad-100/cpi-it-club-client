import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Apis/axios";
import { IoMdCloseCircle } from "react-icons/io";
import { addNotice } from "../../Apis/apis";
import toast from "react-hot-toast";
import { useState } from "react";
import ConfirmModal from "../../Components/ConfirmModal";

const ManageNotice = () => {
  const { data: notices = [], refetch } = useQuery({
    queryKey: ["notices"],
    queryFn: async () => {
      const res = await axiosSecure.get("/notice");
      return res.data;
    },
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const noticeTitle = e.target.title.value;
    const now = new Date();
    const formattedDate = now.toISOString().split("T")[0];

    const data = {
      title: noticeTitle,
      date: formattedDate,
    };

    try {
      await addNotice(data);
      e.target.reset();
      toast.success("Notice added!");
      refetch();
    } catch (err) {
      console.error("Add error:", err);
      toast.error("Failed to add notice");
    }
  };

  const handleDelete = async () => {
    try {
      await axiosSecure.delete(`/notice/${selectedId}`);
      toast.success("Notice deleted!");
      refetch();
    } catch (err) {
      console.error("Delete error:", err);
      toast.error(" Failed to delete notice");
    } finally {
      setShowModal(false);
      setSelectedId(null);
    }
  };

  const openModal = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <section id="notice">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            📢 Notice Board
          </h2>
          <div className="sm:grid lg:grid-cols-2 gap-8">
            {/* Add Notice */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                ✍️ Add New Notice
              </h3>
              <form onSubmit={handleSubmit}>
                <textarea
                  rows="5"
                  name="title"
                  className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 p-4 rounded-md text-gray-700"
                  placeholder="Type your notice here..."
                  required
                />
                <button
                  type="submit"
                  className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-300"
                >
                  Add Notice
                </button>
              </form>
            </div>

            {/* All Notices */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                📄 All Notices
              </h3>
              {notices.length === 0 ? (
                <p className="text-gray-500 italic">No notices yet.</p>
              ) : (
                <ul className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                  {notices.map((notice) => (
                    <li
                      key={notice._id}
                      className="bg-blue-100 px-4 py-3 rounded-lg flex justify-between items-center hover:bg-blue-200 transition"
                    >
                      <div>
                        <p className="font-medium text-blue-900 me-4">
                          {notice.title}
                        </p>
                        <span className="text-sm text-gray-600">
                          {notice.date}
                        </span>
                      </div>
                      <button
                        onClick={() => openModal(notice._id)}
                        className="text-red-500 cursor-pointer"
                      >
                        <IoMdCloseCircle size={24} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      </div>
      <ConfirmModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
        
      />
    </div>
  );
};

export default ManageNotice;

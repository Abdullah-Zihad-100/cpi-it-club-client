import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  deleteAssignment,
  getAllAssignments,
  updateAssignmentMark,
  
} from "../../Apis/apis";
import Title from "../../Components/Title";
import Loader from "../../Components/Loader";

const ManageAssignments = () => {
  const [activeMarkInput, setActiveMarkInput] = useState(null);
  const [newMark, setNewMark] = useState("");

  const {
    data: assignments = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allAssignments"],
    queryFn: getAllAssignments,
  });

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this?");
    if (!confirm) return;

    try {
      const res = await deleteAssignment(id);
      if (res.deletedCount > 0) {
        toast.success("Assignment deleted successfully!");
        refetch();
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete assignment.");
    }
  };

  const handleMarkSubmit = async (id) => {
    if (!newMark || isNaN(newMark) || newMark < 0 || newMark > 10) {
      toast.error("Please enter a valid mark between 0 and 10.");
      return;
    }

    try {
      const res = await updateAssignmentMark(id, newMark);
      if (res.modifiedCount > 0) {
        toast.success("Mark updated successfully!");
        setActiveMarkInput(null);
        setNewMark("");
        refetch();
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update mark.");
    }
  };

  return (
    <div className="p-4 md:p-8">
      <Title heading="All Assignments" />

      {isLoading ? (
        <Loader />
      ) : assignments.length === 0 ? (
        <p className="text-center mt-32 text-gray-600 text-lg">
          No assignments available
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {assignments.map((assignment) => (
            <div
              key={assignment._id}
              className="bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <img
                src={assignment.image}
                alt={assignment.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold text-blue-700">
                  {assignment.title}
                </h3>
                <p className="text-sm text-gray-700 line-clamp-3">
                  {assignment.description}
                </p>
                <p className="text-sm text-blue-600">
                  Code:{" "}
                  <a
                    href={assignment.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    {assignment.codeLink}
                  </a>
                </p>
                <p className="text-xs text-gray-500">
                  Submitted by:{" "}
                  <span className="italic">{assignment.email}</span>
                </p>
                <p className="text-xs text-gray-500">
                  Submitted Date:{" "}
                  <span className="italic">
                    {" "}
                    {new Date(assignment.submittedAt).toLocaleDateString()} at{" "}
                    {new Date(assignment.submittedAt).toLocaleTimeString()}
                  </span>
                </p>
                <p className="text-green-600 font-semibold">
                  Mark: {assignment.mark || "Not Given"}
                </p>

                {/* Mark Input Area */}
                {activeMarkInput === assignment._id ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      placeholder="Out of 10"
                      min="0"
                      max="10"
                      className="border rounded px-2 py-1 w-full"
                      value={newMark}
                      onChange={(e) => setNewMark(e.target.value)}
                    />
                    <button
                      onClick={() => handleMarkSubmit(assignment._id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Submit
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setActiveMarkInput(assignment._id)}
                    className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-3 py-1 rounded-md text-sm"
                  >
                    Add Mark
                  </button>
                )}

                <button
                  onClick={() => handleDelete(assignment._id)}
                  className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md w-full text-sm font-medium transition"
                >
                  Delete Assignment
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageAssignments;

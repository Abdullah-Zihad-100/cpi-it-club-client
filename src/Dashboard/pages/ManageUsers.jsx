import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Apis/axios";
import { FaTrashAlt } from "react-icons/fa";
import Title from "../../Components/Title";
import Loader from "../../Components/Loader";
import { useState } from "react";
import { toast } from "react-hot-toast";

const ManageUsers = () => {
  const [searchEmail, setSearchEmail] = useState("");
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDelete = async (email) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirm) return;

    try {
      await axiosSecure.delete(`/users/${email}`);
      toast.success("User deleted successfully");
      refetch();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const handleRoleChange = async (email, role) => {
    try {
      const res = await axiosSecure.put(`/users/role/${email}`, { role });
      console.log("role change",res);
      toast.success(`User updated to ${role}`);
      refetch();
    } catch (error) {
      console.error("Role update failed:", error);
    }
  };

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchEmail.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 w-full">
      <Title heading={"All Users"} />

      {isLoading ? (
        <Loader />
      ) : (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <input
              type="email"
              placeholder="Search by email"
              className="px-4 py-2 border border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-400"
              value={searchEmail}
              onChange={(e) => setSearchEmail(e.target.value)}
            />
          </div>

          <div className="overflow-x-auto bg-white/80 backdrop-blur-md border border-blue-100 shadow-lg rounded-2xl">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                  <th className="py-4 px-6 text-left font-semibold">#</th>
                  <th className="py-4 px-6 text-left font-semibold">Name</th>
                  <th className="py-4 px-6 text-left font-semibold">Email</th>
                  <th className="py-4 px-6 text-left font-semibold">Role</th>
                  <th className="py-4 px-6 text-left font-semibold">
                    Semester
                  </th>
                  <th className="py-4 px-6 text-left font-semibold">
                    Department
                  </th>
                  <th className="py-4 px-6 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {filteredUsers.map((user, index) => (
                  <tr
                    key={user._id}
                    className="border-b border-gray-100 hover:bg-blue-50 transition-all duration-200"
                  >
                    <td className="py-4 px-6 font-medium text-gray-600">
                      {index + 1}
                    </td>
                    <td className="py-4 px-6 capitalize">{user.name}</td>
                    <td className="py-4 px-6">{user.email}</td>
                    <td className="py-4 px-6 capitalize">{user.role}</td>
                    <td className="py-4 px-6 capitalize">{user.semester}</td>
                    <td className="py-4 px-6 capitalize">{user.department}</td>
                    <td className="py-4 px-6 flex gap-2 items-center">
                      <button
                        onClick={() => handleRoleChange(user?.email, "admin")}
                        className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-all duration-300 text-xs"
                      >
                        Make Admin
                      </button>
                      <button
                        onClick={() => handleRoleChange(user?.email, "user")}
                        className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition-all duration-300 text-xs"
                      >
                        Make User
                      </button>
                      <button
                        onClick={() => handleDelete(user?.email)}
                        className="text-red-500 cursor-pointer px-2 py-1 hover:text-red-700 transition-all duration-200"
                        title="Delete User"
                      >
                        <FaTrashAlt className="text-base" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredUsers.length === 0 && (
              <div className="text-center py-6 text-gray-500">
                No users found.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;

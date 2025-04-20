import axios from "axios";
import { axiosSecure } from "./axios";

export const addNotice = async (data) => {
  const res = await axiosSecure.post("/notice", data);
  return res.data;
};

export const getClasses = async () => {
  const res = await axiosSecure.get(`/classes`);
  return res.data;
};

export const editClass = async (id, updatedClass) => {
  const res = await axiosSecure.patch(`/classes/${id}`, updatedClass);
  return res.data;
};

export const getSingleCourses = async (id) => {
  const res = await axiosSecure.get(`/courses/${id}`);
  return res.data;
};
export const getSingleClass = async (id) => {
  const res = await axiosSecure.get(`/classes/${id}`);
  return res.data;
};

export const deletedCourse = async (id) => {
  const res = await axiosSecure.delete(`/courses/${id}`);
  return res.data;
};

// image post ImgBB ---->

export const imgUplord = async (image) => {
  try {
    const formData = new FormData();
    formData.append("image", image);
    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=ca1d8160771e38600b30f7bd7e2369aa`,
      formData
    );

    // Return the uploaded image's URL or response data
    return response.data.data.url;
  } catch (error) {
    console.error("Error uploading image:", error.message);
    throw error; // Ensure the caller is aware of the error
  }
};

export const getCourses = async () => {
  const res = await axiosSecure.get(`/courses`);
  return res.data;
};

export const getEvents = async () => {
  const res = await axiosSecure.get(`/events`);
  return res.data;
};
export const getSingleEvent = async (id) => {
  const res = await axiosSecure.get(`/event/${id}`, id);
  return res.data;
};
export const addCourse = async (newCourse) => {
  const res = await axiosSecure.post("/courses", newCourse);
  return res.data;
};

// save user DataBase------->

export const saveUser = async (newUser) => {
  const res = await axiosSecure.put("/users", newUser);
  return res.data;
};

// profile Update ------------>
export const updateUser = async (id, updateData) => {
  const res = await axiosSecure.put(`/users/${id}`, updateData);
  return res.data;
};

// single user get--------->
export const getUserByEmail = async (email) => {
  const res = await axiosSecure.get(`/users/${email}`);
  return res.data;
};

// delete user----------->

export const deleteUser = async (email) => {
  const res = await axiosSecure.delete(`/users/${email}`);
  return res.data;
};

export const getToken = async (email) => {
  const res = await axiosSecure.post(`/jwt`, { email });
  return res.data;
};

export const removeToken = async () => {
  const res = await axiosSecure.post(`/logout`);
  return res.data;
};

// post assignment----------->
export const postAssignment = async (assignment) => {
  const res = await axiosSecure.post(`/assignments`, assignment);
  return res.data;
};

export const getUserAssignments = async (email) => {
  const res = await axiosSecure.get(`/assignment/${email}`);
  return res.data;
};


// get all assignments
export const getAllAssignments = async () => {
  const res = await axiosSecure.get(`/assignments`);
  return res.data;
};



// delete a assignments

export const deleteAssignment = async (id) => {
  const res = await axiosSecure.delete(`/assignments/${id}`);
  return res.data;
};


// PATCH update mark by id
export const updateAssignmentMark = async (id, mark) => {
  const res = await axiosSecure.patch(`/assignment/${id}`,{mark})
  return res.data;
};

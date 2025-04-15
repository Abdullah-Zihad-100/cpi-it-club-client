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
export const getCourses = async () => {
  const res = await axiosSecure.get(`/courses`);
  return res.data;
};


export const getEvents = async () => {
  const res = await axiosSecure.get(`/events`);
  return res.data;
};
export const getSingleEvent = async (id) => {
  const res = await axiosSecure.get(`/events/${id}`,id);
  return res.data;
};

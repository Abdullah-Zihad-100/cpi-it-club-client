import React from "react";
import ShereBanner from "../Components/ShereBanner";
import { axiosSecure } from "../Apis/axios";

const ContactUs = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const data = { name, email, subject, message };
    console.log(data);

    try {
      const res = await axiosSecure.post("/try-contact", data);
      console.log(res.data);

      // ✅ Reset form after successful submission
      form.reset();
    } catch (error) {
      console.error("Failed to send contact form", error);
    }
  };

  return (
    <div className="min-h-screen">
      <ShereBanner title={"Contact"} />
      <div className="max-w-5xl mx-auto bg-white p-7 rounded-md shadow-2xl mt-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-6">
          Get in Touch with CPI IT Club
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Have questions or want to collaborate? Drop us a message below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              className="p-3 border border-gray-300 rounded-xl focus:outline-blue-400"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              className="p-3 border border-gray-300 rounded-xl focus:outline-blue-400"
              placeholder="example@mail.com"
              required
            />
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              className="p-3 border border-gray-300 rounded-xl focus:outline-blue-400"
              placeholder="Subject"
              required
            />
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="6"
              className="p-3 border border-gray-300 rounded-xl focus:outline-blue-400"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-colors px-8 py-3 text-white font-semibold rounded-full shadow-md cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

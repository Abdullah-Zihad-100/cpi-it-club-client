import React from "react";

const Footer = () => {
  return (
    <footer className="footer-bg text-white">
      <div className="max-w-[1450px] mx-auto">
        {/* Newsletter Section */}
        <div className="text-center mb-8">
         
          <h2 className="text-white md:text-3xl text-2xl sm:w-3/6 py-5 mx-auto mb-4">
            Want to receive the latest news and updates from CPI IT Club?
          </h2>
          <div className="flex justify-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 sm:w-2/6 py-3 rounded-3xl bg-white text-gray-600 outline-none"
            />
            <button className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-3xl">
              SUBSCRIBE
            </button>
          </div>
        </div>

<div className="sm:flex justify-between items-center px-10 gap-x-20">
        {/* About Section */}
        <div className="mb-8 ms-10">
         <img className="w-[100px]  bg-white rounded-full" src="/It-Club-Logo.png" alt="" />
          <p className="text-white my-2 w-4/6">
            CPI IT Club is a student-run organization dedicated to bridging the
            gap between academia and industry.
          </p>
        </div>
        {/* Quick Links Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">QUICK LINKS</h3>
          <ul className="flex gap-4 flex-col text-white">
            <li>
              <a href="#" className=" hover:underline">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className=" hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Members
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Creative Hub
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contributors
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">CONTACT US</h3>
          <ul className="">
            <li>
              Email:{" "}
              <a
                href="mailto:itclub@cpi.edu.np"
                className="hover:underline"
              >
                cpiitclub@gmail.com
              </a>
            </li>
            <li>Phone:******* | ********</li>
            <li>Address: Academy Rode , Feni Sodor , Feni , Bangladesh</li>
          </ul>
        </div>
</div>
<hr  className="container mx-auto"/>


        {/* Copyright Section */}
        <div className="text-center py-5">
          <p className="text-sm ">
            © 2025 CPI IT Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

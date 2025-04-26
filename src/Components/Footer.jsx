import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-500 to-blue-800 text-white shadow-inner mt-16 rounded-t-3xl">
      <div className="max-w-[1450px] mx-auto px-6 py-12">
        {/* Top Message */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            Join the CPI IT Club Community
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Connect, collaborate, and grow with fellow innovators. We’re
            building the future, one student at a time.
          </p>
        </div>

        {/* Info Sections */}
        <div className="grid sm:grid-cols-3 gap-10 mb-12 text-sm px-6">
          {/* About */}
          <div>
            <img
              className="w-[80px] mb-4 bg-white rounded-full p-2 shadow-md"
              src="/It-Club-Logo.png"
              alt="CPI IT Club Logo"
            />
            <p className="text-white/80">
              CPI IT Club is a student-run organization dedicated to bridging
              the gap between academia and industry through innovation and skill
              development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-white/80">
              {[
                "Blogs",
                "Events",
                "Members",
                "Gallery",
                "Creative Hub",
                "Contributors",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:underline hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              CONTACT US
            </h3>
            <ul className="text-white/80 space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:cpiitclub@gmail.com"
                  className="hover:underline text-white"
                >
                  cpiitclub@gmail.com
                </a>
              </li>
              <li>Phone: 01XXXXXXX | 01XXXXXXX</li>
              <li>Address: Academy Road, Feni Sodor, Feni, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/30 mb-6" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row-reverse justify-between items-center text-white/70 text-sm px-4 gap-4">
          <p>© 2025 CPI IT Club. All rights reserved.</p>
          <div className="flex gap-4 text-white text-lg">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61573101647365"
              className="hover:text-blue-400 transition"
            >
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

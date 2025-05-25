import { useEffect, useState } from "react";

const CookieNoticeBar = () => {
  const [cookiesBlocked, setCookiesBlocked] = useState(false);
  const [showNotice, setShowNotice] = useState(false); 

  useEffect(() => {
    setCookiesBlocked(true);
    setTimeout(() => {
      setShowNotice(true); 
    }, 100);
  }, []);

  if (!cookiesBlocked) return null;

  return (
    <div
      className={`fixed flex bottom-24 right-4 z-50 bg-gradient-to-r from-blue-600 to-blue-600 text-white px-6 py-3 sm:hidden items-center justify-between shadow-lg rounded-lg transition-transform duration-500 ease-in-out transform
        ${
          showNotice
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }
        w-[90%] sm:w-3/4 md:w-2/4 lg:w-2/5`}
    >
      <p className="text-sm md:text-base font-medium">
        ⚠️ Enable cookies in your browser settings
        for this site to work properly.
      </p>
      <button
        onClick={() => setCookiesBlocked(false)}
        className="ml-4 bg-white text-blue-600 hover:bg-gray-100 px-3 py-1 rounded font-semibold text-sm transition cursor-pointer"
      >
        Dismiss
      </button>
    </div>
  );
};

export default CookieNoticeBar;

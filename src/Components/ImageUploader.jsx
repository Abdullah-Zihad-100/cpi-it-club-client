import { useState } from "react";

const ImageUploader = ({ handleImageChange }) => {
  const [preview, setPreview] = useState(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      handleImageChange(e); // Call the parent function
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-white font-medium">
        Upload Assignment Image
      </label>

      <div className="relative bg-white/10 border border-white/30 rounded-xl overflow-hidden backdrop-blur-md hover:shadow-lg transition-shadow">
        <input
          type="file"
          onChange={handleFile}
          required
          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
        />
        <div className="flex items-center justify-center py-3 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16V4m0 0l-4 4m4-4l4 4M17 8v12m0 0l-4-4m4 4l4-4"
            />
          </svg>
          <span className="text-sm">Choose a file</span>
        </div>
      </div>

      {preview && (
        <div className="mt-4">
          <p className="text-white mb-1">Preview:</p>
          <img
            src={preview}
            alt="Preview"
            className="w-full max-h-64 object-cover rounded-lg border border-white/20 shadow"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;

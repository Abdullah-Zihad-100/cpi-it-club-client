import React from "react";

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm z-50">
      <div className="bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-2xl w-80 text-center border border-white/20">
        <h2 className="text-xl font-semibold text-red-600 mb-4">
          Confirm Action
        </h2>
        <p className="text-gray-800 mb-6">
          Are you sure you want to delete this?
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
          >
            Confirm Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;

import { useState } from "react";

const ModalForm = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
      <div className="bg-black p-8 max-w-md w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-light hover:text-gray-400"
        >
          &times;
        </button>

        {/* Title */}
        <h3 className="text-white text-3xl font-extrabold text-center mb-10">
          Book Your Free NIL Strategy Call
        </h3>

        {/* Form */}
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-white text-black p-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-white text-black p-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-white"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-white text-black p-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-white"
          />

          <div className="flex space-x-4">
            <input
              type="date"
              placeholder="mm/dd/yyyy"
              className="w-1/2 bg-white text-black p-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-white"
            />
            <select
              defaultValue="Preferred Time"
              className="w-1/2 bg-white text-black p-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-white appearance-none"
            >
              <option disabled>Preferred Time</option>
              <option>9:00 AM</option>
              <option>11:00 AM</option>
              <option>2:00 PM</option>
              <option>4:00 PM</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black px-10 py-4 text-sm font-semibold hover:bg-gray-200 transition duration-300"
          >
            BOOK MY STRATEGY CALL
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-4">
          No obligation. No pressure. Just clarity.
        </p>
      </div>
    </div>
  );
};

export default ModalForm;

// eslint-disable-next-line no-unused-vars
import React from "react";

function Navbar() {
  return (
    <div className="max-w-md mx-auto md:max-w-fit">
      <div className="bg-gray-800 h-16 flex items-center justify-between">
        <div className="ml-5">
          <p className="text-white font-bold">Employee Management System</p>
        </div>
        <div className="m-9">
          <input
            type="text"
            placeholder="Search Employee"
            className="border-gray-300 border-gray-600 rounded-md px-9 py-1 font-sans hover:font-serif"
          />
        </div>
        <div className="flex">
          <div className="mr-5">
            <button className="bg-red-500 hover:bg-blue-700 text-white px-3 py-2 rounded">
              Add Employee
            </button>
          </div>
          <div className="mr-5">
            <button className="bg-yellow-300 hover:bg-blue-700 text-white px-3 py-2 rounded">
              Edit Employee
            </button>
          </div>
          <div className="mr-5">
            <button className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 rounded">
              Remove Employee
            </button>
          </div>
          <div className="mr-5">
            <button className="bg-green-400 hover:bg-blue-700 text-white px-3 py-2 rounded">
              View Employee
            </button>
          </div>
        </div>
        <div className="flex gap-1 mr-3">
          <button className="bg-white hover:bg-blue-500 text-black hover:text-white px-3 py-2 rounded">
            Login
          </button>
          <button className="bg-white hover:bg-blue-500 text-black hover:text-white px-3 py-2 rounded">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

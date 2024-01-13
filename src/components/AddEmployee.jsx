// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import EmployeeService from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function AddEmployee() {
  const [employee, setEmployee] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
  });

  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
  });

  const navigaye = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();

    if (validateForm()) {
      EmployeeService.saveEmployee(employee)
        .then((response) => {
          console.log(response);
          navigaye("/employeeList");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  // Build resetEmployee
  const resetEmployee = (e) => {
    e.preventDefault();
    setEmployee({
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
    });
    setError({
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
    });
  };

  function validateForm() {
    let valid = true;
    const errorCopy = { ...error };

    if (error.firstname.trim() === "") {
      errorCopy.firstname = "Firt name is required";
      valid = false;
    } else {
      errorCopy.firstname = "";
    }

    if (error.lastname.trim() === "") {
      errorCopy.lastname = "Last name is required";
      valid = false;
    } else {
      errorCopy.lastname = "";
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(employee.email.trim())) {
      errorCopy.email = "Invalid email address";
      valid = false;
    } else {
      errorCopy.email = "";
    }

    // Validate Phone
    const phoneRegex = /^\d{10}$/;
    if (
      employee.phone.trim() !== "" &&
      !phoneRegex.test(employee.phone.trim())
    ) {
      errorCopy.phone = "Invalid phone number";
      valid = false;
    } else {
      errorCopy.phone = "";
    }
    setError(errorCopy);
    return valid;
  }

  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
      <div className="px-8 py-8">
        <div className="font-sans text-xl justify-center tracking-wider">
          <h1>Add Employee</h1>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-sm font-normal text-gray-500">
            Firstname
          </label>
          <input
            placeholder="your firstname"
            name="firstname"
            value={employee.firstname}
            type="text"
            className={`h-10 w-96 px-2 py-2 rounded-md mt-2 ${
              error.firstname ? "is-invalid" : ""
            }`}
            onChange={(e) => handleChange(e)}></input>
          {error.firstname && (
            <div className="invalid-feedback"> {error.firstname} </div>
          )}
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-sm font-normal text-gray-500 mt-10">
            Lastname
          </label>
          <input
            placeholder="your lastname"
            name="lastname"
            value={employee.lastname}
            type="text"
            className={`h-10 w-96 px-2 py-2 rounded-md mt-2 ${
              error.lastname ? "is-invalid" : ""
            }`}
            onChange={(e) => handleChange(e)}></input>
          {error.firstname && (
            <div className="invalid-feedback"> {error.lastname} </div>
          )}
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-sm font-normal text-gray-500 mt-10">
            Phone
          </label>
          <input
            placeholder="import your phone number please"
            name="phone"
            value={employee.phone}
            type="number"
            className="h-10 w-96 px-2 py-2 rounded-md mt-2"
            onChange={(e) => handleChange(e)}></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-sm font-normal text-gray-500 mt-10">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={employee.email}
            placeholder="import your email please"
            className={`h-10 w-96 px-2 py-2 rounded-md mt-2 ${
              error.lastname ? "is-invalid" : ""
            }`}
            onChange={(e) => handleChange(e)}></input>
          {error.firstname && (
            <div className="invalid-feedback"> {error.email} </div>
          )}
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-3">
          <button
            onClick={saveEmployee}
            className="rounded text-white font-semibold bg-green-500 hover:bg-green-300 px-3 py-2 mt-4">
            Save
          </button>
          <button
            onClick={resetEmployee}
            className="rounded text-white font-semibold bg-red-500 hover:bg-red-300 px-3 py-2 mt-4">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;

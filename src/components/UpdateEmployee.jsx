// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

function UpdateEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    id: id,
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(employee.id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateEmployee = (e) => {
    e.preventDefault();
    console.log(employee);
    EmployeeService.updateEmployee(employee, id)
      .then(() => {
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
      <div className="px-8 py-8">
        <div className="font-sans text-xl justify-center tracking-wider">
          <h1>Edit Employee</h1>
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
            className="h-10 w-96 border mt-2 px-2 py-2"
            onChange={(e) => handleChange(e)}></input>
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
            className="h-10 w-96 border mt-2 px-2 py-2"
            onChange={(e) => handleChange(e)}></input>
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
            className="h-10 w-96 border mt-2 px-2 py-2"
            onChange={(e) => handleChange(e)}></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-3">
          <button
            onClick={updateEmployee}
            className="rounded text-white font-semibold bg-green-500 hover:bg-green-300 px-3 py-2 mt-4">
            Update
          </button>
          <button className="rounded text-white font-semibold bg-red-500 hover:bg-red-300 px-3 py-2 mt-4">
            Return
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateEmployee;

// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

function Employee({ employee, deleteEmployee }) {
  console.log("Employee Data:", employee);

  return (
    <tr key={employee.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">
          {employee.firstname || "N/A"}
        </div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.lastname}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.email}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.phone}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4"
          href="#">
          Edit
        </a>
        <a
          onClick={(e, id) => deleteEmployee(e, employee.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4"
          href="#">
          Delete
        </a>
      </td>
    </tr>
  );
}

Employee.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.number,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.number,
  }).isRequired,
  deleteEmployee: PropTypes.func.isRequired, // Add this line
};

export default Employee;

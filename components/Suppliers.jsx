import React, { useState } from "react";
import { suppliersData } from "../data/suppliersData";

const Suppliers = () => {
  const [data, setData] = useState(suppliersData);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Want to delete? ");
    if (confirmDelete) {
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
    }
  };

  const sortData = () => {
    const sortedData = [...data].sort((a, b) =>
      a.companyName.localeCompare(b.companyName)
    );
    setData(sortedData);
  };

  return (
    <div className="m-20">
      <h1 className="font-bold">Length: {data.length}</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Id
            </th>
            <th
              onClick={() => sortData()}
              className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
            >
              Company Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Contact Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Country
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {item.id}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {item.companyName}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {item.contactName}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {item.address.country}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded-lg"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Suppliers;

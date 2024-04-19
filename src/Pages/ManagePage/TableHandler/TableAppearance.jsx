import React from "react";
import { useEffect, useState } from "react";
import Scrollbars from "react-scrollbars-custom";
import Tableloading from "./Tableloading";
import { RiEdit2Line, RiDeleteBin6Line } from "react-icons/ri";

export default function TableAppearance({
  data,
  refetchData,
  handleEditButtonClick,
  handleDelete,
  isLoading,
  error,
}) {
  const [shownErrors, setShownErrors] = useState([]);

  useEffect(() => {
    if (error && !shownErrors.includes(error)) {
      setShownErrors([...shownErrors, error]);
    }
  }, [error, shownErrors]);

  return (
    <div>
      {isLoading ? (
        <Tableloading />
      ) : (
        <div className="table-container">
          <div className="table-header sticky top-0  bg-white shadow-md">
            <table className="w-full text-md bg-gray-300 rounded-t-lg">
              <thead>
                <tr>
                  <th className="text-center py-3 px-4">Title</th>
                  <th className="text-center py-3 px-4">Date & Time</th>
                  <th className="py-3 px-4">Role</th>
                </tr>
              </thead>
            </table>
          </div>
          <Scrollbars
            style={{ width: "100%", height: "900px" }}
          >
            <table className="w-full text-md bg-white shadow-md rounded-b-lg">
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className="text-center item-center border-b hover:bg-gray-100 rounded-lg shadow-md"
                  >
                    <td className="py-3 px-4">{item.Title}</td>
                    <td className="py-3 px-4">{item.Date}</td>
                    <td className="py-3 px-4">
                      <span className="flex justify-center space-x-2">
                        <button
                          onClick={() => handleEditButtonClick(item)}
                          type="button"
                          className="text-sm bg-blue-500  text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                          title="Edit"
                        >
                          <RiEdit2Line />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id, refetchData)}
                          type="button"
                          className="text-sm bg-red-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                          title="Delete"
                        >
                          <RiDeleteBin6Line />
                        </button>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Scrollbars>
        </div>
      )}
    </div>
  );
}

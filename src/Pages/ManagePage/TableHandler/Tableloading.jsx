import React from "react";
import Skeleton from "react-loading-skeleton";
import { CirclesWithBar } from "react-loader-spinner";

function Tableloading() {
  return (
    <div className="table-container">
      <table className="w-full text-md bg-white shadow-md rounded mb-10">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-center py-3 px-4">
              <Skeleton width={100} />
            </th>
            <th className="text-center py-3 px-4">
              <Skeleton width={100} />
            </th>
            <th className=" py-3 px-4">
              <Skeleton width={100} />
            </th>
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, index) => (
            <tr
              key={index}
              className="text-center item-center border-b hover:bg-gray-100"
            >
              <td className="p-3">
                <CirclesWithBar
                  height="50"
                  width="50"
                  color="#4fa94d"
                  outerCircleColor="#3b82f6"
                  innerCircleColor="#298985"
                  barColor="#000000"
                  ariaLabel="circles-with-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </td>
              <td className="p-3">
                <Skeleton />
              </td>
              <td className="p-3">
                <span className="flex justify-center space-x-2">
                  <Skeleton width={50} />
                  <Skeleton width={50} />
                  <CirclesWithBar
                    height="50"
                    width="50"
                    color="#4fa94d"
                    outerCircleColor="#3b82f6"
                    innerCircleColor="#298985"
                    barColor="#000000"
                    ariaLabel="circles-with-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tableloading;

import React, { useState, useEffect, useContext } from "react";

import axios from "axios";
import { UserContext } from "../../context_store/context/UserContext";

import {createCharts} from "./ChartDetail"

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [visibleChart, setVisibleChart] = useState("lineChart");

  const user = useContext(UserContext);
  const token = user.getToken();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token) {
          throw new Error("No token found.");
        }
        
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axios.get("https://react-camp-api.roocket.ir/api/admin/dashboard");
        setData(response.data.data);
        createCharts(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [token]);


  const handleChartClick = (chartName) => {
    setVisibleChart(chartName);
  };
return (
  <div className="m-2 mt-10">
    <div className="w-9/12 h-8/12 mx-auto shadow-lg rounded-lg p-2 bg-white">
      <ul className="flex justify-center bg-gray-200 p-2">
        {["lineChart", "barChart", "pieChart", "radarChart"].map(
          (chartName) => (
            <li key={chartName} className="mr-4 ">
              <button
                onClick={() => handleChartClick(chartName)}
                className={`px-3 py-2 mx-1 rounded-md transition duration-500 ease select-none hover:bg-gray-400 focus:outline-none focus:shadow-outline ${
                  visibleChart === chartName
                    ? "bg-blue-500 text-white"
                    : "bg-white border border-gray-400 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Show {chartName.replace("Chart", "")} Chart
              </button>
            </li>
          )
        )}
      </ul>
      <div className="flex items-center justify-center bg-gray-100 p-2">
        {["lineChart", "barChart", "pieChart", "radarChart"].map(
          (chartName) => (
            <canvas
              key={chartName}
              id={chartName}
              style={{
                display: visibleChart === chartName ? "block" : "none",
              }}
            ></canvas>
          )
        )}
      </div>
    </div>
  </div>
);

};

export default Dashboard;

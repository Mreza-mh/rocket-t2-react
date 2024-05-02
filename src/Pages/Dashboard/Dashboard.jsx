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
    
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      axios
        .get("https://react-camp-api.roocket.ir/api/admin/dashboard")
        .then((response) => {
          console.log("API Response:", response.data.data);
          setData(response.data.data);
          createCharts(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      console.error("No token found .");
    }
  }, [token]);




  const handleChartClick = (chartName) => {
    setVisibleChart(chartName);
  };
  return (
    <div className="m-5">
      <div className="container mx-auto shadow-lg rounded-lg pr-2 pb-2 pl-2 bg-white">
        <ul className="flex justify-center bg-gray-200 p-2">
          {["lineChart", "barChart", "pieChart", "radarChart"].map(
            (chartName) => (
              <li key={chartName} className="mr-2">
                <button
                  onClick={() => handleChartClick(chartName)}
                  className={`px-3 py-1 rounded-md transition duration-500 ease select-none hover:bg-gray-400 focus:outline-none focus:shadow-outline ${
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
        <div className="flex items-center justify-center bg-gray-100 p-10">
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

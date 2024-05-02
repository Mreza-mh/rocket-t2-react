import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
// import { useSelector } from "react-redux";
import { UserContext } from "../Rishe/context/UserContext";

const WelcomePage = () => {
  const [data, setData] = useState([]);
  const [visibleChart, setVisibleChart] = useState("lineChart");



  const user = useContext(UserContext)
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

  const createCharts = (data) => {
    const chartTypes = ["line", "bar", "pie", "radar"];
    chartTypes.forEach((type) => {
      createChart(
        type + "Chart",
        type,
        type.charAt(0).toUpperCase() + type.slice(1) + " Chart",
        data.map((item) => item.amount),
        data.map((item) => item.date)
      );
    });
  };

  const createChart = (id, type, title, data, labels) => {
    const ctx = document.getElementById(id);
    new Chart(ctx, {
      type: type,
      data: {
        labels: labels,
        datasets: [
          {
            label: title,
            data: data,
            backgroundColor:
              type === "pie"
                ? [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(54, 162, 235, 0.3)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.3)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(265, 459, 14, 0.4)",
                    "rgba(265, 49, 112, 0.5)",
                    "rgba(56, 142, 215, 0.3)",
                    "rgba(265, 40, 16, 0.3)",
                    "rgba(96, 102, 102, 0.5)",
                    "rgba(163, 42, 155, 0.3)",
                    "rgba(295, 901, 202, 0.5)",
                    "rgba(59, 169, 205, 0.3)",
                    "rgba(295, 216, 206, 0.2)",
                    "rgba(79, 19, 22, 0.3)",
                    "rgba(13, 12, 255, 0.2)",
                    "rgba(95, 419, 204, 0.4)",
                    "rgba(95, 41, 402, 0.5)",
                    "rgba(5, 141, 5, 0.3)",
                    "rgba(295, 41, 20, 0.3)",
                    "rgba(99, 1, 2, 0.5)",
                    "rgba(193, 1, 205, 0.3)",
                  ]
                : "rgba(50,110,126,0.6)",
            borderColor:
              type === "pie"
                ? [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ]
                : "rgba(8,140,100,1)",
            borderWidth: 1,
          },
        ],
      },
      options:
        type === "pie"
          ? {
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
                title: {
                  display: true,
                  text: "Pie Chart",
                },
              },
            }
          : {
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
                title: {
                  display: false,
                },
              },
            },
    });
  };

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

export default WelcomePage;





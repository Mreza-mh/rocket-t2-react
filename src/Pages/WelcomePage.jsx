import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

const WelcomePage = () => {
  const [data, setData] = useState([]);
  const [visibleChart, setVisibleChart] = useState(null);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userData"))?.token;

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
      console.error("No token found in local storage.");
    }
  }, []);

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

    const createPieChart = (data) => {
      const ctx = document.getElementById("pieChart");

      new Chart(ctx, {
        type: "pie",
        data: {
          labels: data.map((item) => item.date),
          datasets: [
            {
              label: "Amount",
              data: data.map((item) => item.amount),


              borderWidth: 1,
            },
          ],
        },

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
                   "rgba(255, 99, 132, 0.2)",
                   "rgba(54, 162, 235, 0.2)",
                   "rgba(255, 206, 86, 0.2)",
                   "rgba(75, 192, 192, 0.2)",
                   "rgba(153, 102, 255, 0.2)",
                   "rgba(255, 159, 64, 0.2)",
                 ]
               : "rgba(56,70,126,0.2)",
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
               : "rgba(56,70,126,1)",
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
    <div className="container mx-auto">
      <ul className="flex justify-center mt-4">
        {["lineChart", "barChart", "pieChart", "radarChart"].map(
          (chartName) => (
            <li key={chartName} className="mr-4">
              <button onClick={() => handleChartClick(chartName)}>
                Show {chartName.replace("Chart", "")} Chart
              </button>
            </li>
          )
        )}
      </ul>
      <div className="">
        <div className="flex items-center justify-center bg-slate-200 p-20 ml-14">
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

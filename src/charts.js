import Chart from "chart.js/auto";

// display charts
const revenueGrowthChart = document.getElementById("revenue-growth-chart");
const totalTransactionChart = document.getElementById(
  "total-transactions-chart"
);

// transaction chart
new Chart(totalTransactionChart, {
  type: "line",
  data: {
    labels: [
      "Sat 26",
      "Sun 27",
      "Mon 28",
      "Tue 29",
      "Wed 30",
      "Thu 31",
      "Fri 01",
    ],
    datasets: [
      {
        label: "Total transactions",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "green",
        tension: 0.1,
      },
    ],
  },
});

// revenue chart
new Chart(revenueGrowthChart, {
  type: "bar",
  data: {
    labels: [
      "Sat 26",
      "Sun 27",
      "Mon 28",
      "Tue 29",
      "Wed 30",
      "Thu 31",
      "Fri 01",
    ],
    datasets: [
      {
        label: "Revenue Growth",
        data: [12, 19, 3, 5, 2, 3, 15],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            return value === 0 ? value : "$" + value + "K";
          },
        },
      },
    },
  },
});

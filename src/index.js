import Chart from "chart.js";

const canvas = document.querySelector("#ejemplo");

const chart = new Chart(canvas, {
  type: "radar",
  data: {
    labels: ["fuerza", "velocidad", "arcano", "carisma", "agilidad"],
    datasets: [
      {
        label: "Character Stats",
        data: [10, 5, 0, 8, 5],
        backgroundColor: "rgba(255,149,128,0.5)"
      }],
  }
});

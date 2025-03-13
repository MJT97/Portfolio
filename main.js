const chartData = {
    labels: ["MECHATRONICS", "WEB_DEVELOPMENT", "BRANDING", "3D DESIGNING"],
    data: [40, 30, 15, 15],
}

const myChart = document.getElementById("my-chart");
const ul = document.querySelector(".programming-stats .details ul");

new Chart(myChart, {
    type: "doughnut",
    data: {
        labels: chartData.labels,
        datasets: [
            {
                label: "Language Popularity",
                data: chartData.data,
            },
        ],
    },
    options: {
        borderWidth: 0,
        borderRadius: 0,
        hoverBorderWidth: 0,
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});

const populateUl = () => {
    chartData.labels.forEach((l, i)  => {
        let li = document.createElement("li");
        li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}%</span>`;
        ul.appendChild(li);
    });
};

populateUl();
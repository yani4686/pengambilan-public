<template>
  <q-page>
    <div class="row">
      <!-- First Section (Upcoming Course) -->
      <div class="col-12 col-sm-6">
        <q-card class="feature-card q-ma-sm">
          <q-card-section class="" style="border-radius: 5px">
            <div id="chart">
              <apexchart
                type="donut"
                height="350"
                :options="chartDonut"
                :series="chartDonut.series"
              ></apexchart>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-sm-6">
        <q-card class="feature-card q-ma-sm">
          <q-card-section class="" style="border-radius: 5px">
            <div id="chart">
              <apexchart
                type="bar"
                height="350"
                :options="chartHorizontalBar"
                :series="series"
              ></apexchart>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="row">
      <!-- First Section (Upcoming Course) -->
      <div class="col-12 col-sm-6">
        <q-card class="feature-card q-ma-sm">
          <q-card-section class="" style="border-radius: 5px">
            <div id="chart">
              <apexchart
                type="radar"
                height="350"
                :options="chartRadar"
                :series="radarSeries"
              ></apexchart>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-sm-6">
        <q-card class="feature-card q-ma-sm">
          <q-card-section class="" style="border-radius: 5px">
            <div id="chart">
              <apexchart
                type="bar"
                height="350"
                :options="chartVerticalBar"
                :series="series"
              ></apexchart>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import chart from "vue3-apexcharts";
// import Chart from "chart.js/auto";

export default {
  components: {
    apexchart: chart,
  },
  setup() {
    const $q = useQuasar();

    //Donut Chart (Gradient)
    const chartDonut = {
      series: [44, 55, 41, 17, 15], // Your data
      chart: {
        width: 380,
        type: "donut", // Donut chart type
      },
      plotOptions: {
        pie: {
          startAngle: -90, // Custom start angle
          endAngle: 270, // Custom end angle
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient", // Gradient fill for donut chart
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: [
            "#ABE5A1",
            "#FDD835",
            "#FF4560",
            "#775DD0",
            "#00E396",
          ],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      legend: {
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      title: {
        text: "Gradient Donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };

    //Bar Chart (Horizontal)
    const chartHorizontalBar = {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        dropShadow: {
          enabled: true,
          blur: 1,
          opacity: 0.25,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "60%", // Adjust the height of the bars
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
      },
      title: {
        text: "Horizontal Bar", // You can customize the chart title
      },
      xaxis: {
        categories: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
      },
      yaxis: {
        title: {
          text: undefined, // Remove or customize y-axis title
        },
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return val + "students"; // Format the tooltip value
          },
        },
      },
      fill: {
        type: "pattern",
        opacity: 1, // Set opacity to 1 for a fully visible pattern
        pattern: {
          style: [
            "circles",
            "slantedLines",
            "verticalLines",
            "horizontalLines",
          ], // Array of pattern styles you can apply
        },
      },
      states: {
        hover: {
          filter: "none", // Disable hover effect filter
        },
      },
      legend: {
        position: "right",
        offsetY: 40,
      },
    };

    const series = [
      {
        name: "Postgraduate",
        data: [44, 55, 41, 37, 22, 43, 21], // Sample data
      },
      {
        name: "Undergraduate",
        data: [53, 32, 33, 52, 13, 43, 32],
      },
    ];

    //radar chart
    const chartRadar = {
      chart: {
        type: "radar",
        height: 350,
      },
      title: {
        text: "Radar Chart Example",
      },
      xaxis: {
        categories: [
          "Math",
          "Physics",
          "Chemistry",
          "Biology",
          "History",
          "English",
        ],
      },
      fill: {
        opacity: 0.1,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["#FF4560"],
      },
      markers: {
        size: 4,
      },
      legend: {
        show: true,
        position: "bottom",
      },
    };

    const radarSeries = [
      {
        name: "Undergraduate",
        data: [80, 90, 70, 85, 60, 75],
      },
      {
        name: "Postgraduate",
        data: [50, 60, 80, 70, 90, 95],
      },
    ];

    // Vertical Bar Chart (Column)
    const chartVerticalBar = {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        dropShadow: {
          enabled: true,
          blur: 1,
          opacity: 0.25,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false, // Change to vertical bars
          columnWidth: "60%", // Adjust the column width if needed
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
      },
      title: {
        text: " Vertical Bar",
      },
      xaxis: {
        categories: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
      },
      yaxis: {
        title: {
          text: undefined,
        },
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return val + " students";
          },
        },
      },
      fill: {
        type: "solid",
        opacity: 1,
      },
      states: {
        hover: {
          filter: "none",
        },
      },
      legend: {
        position: "right",
        offsetY: 40,
      },
    };

    return {
      chartHorizontalBar,
      series,
      chartDonut,
      chartRadar,
      radarSeries,
      chartVerticalBar,
    };
  },
};
</script>

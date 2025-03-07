import { Link } from "react-router-dom";
import Chart from "chart.js/auto";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import Api from "./../../Api/Api.js";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [liveDataResults, setLiveDataResults] = useState(null);
  const [isLiveDataResultsAvailable, setLiveDataResultsAvailable] =
    useState(false);

  useEffect(() => {
    liveDataReadings();
  }, []);
  const labels = ["Running", "Cycling", "Swimming"];

  const data = {
    legend: {
      labels: labels,
    },
    datasets: [
      {
        label: labels,
        data: [14, 23, 45],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        options: {
          responsive: true,
        },
      },
    ],
  };

  const Bardata = {
    labels: labels,
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: "Popularity of colours",
        data: [55, 23, 96],
        // you can set indiviual colors for each bar
        borderWidth: 1,
      },
    ],
  };

  const DoughnutChart = () => {
    return (
      <div style={{ position: "relative", margin: "auto", maxWidth: "280px" }}>
        <Doughnut data={data} />
      </div>
    );
  };

  const BarChart = () => {
    return (
      <div style={{ position: "relative", margin: "auto", maxWidth: "512px" }}>
        <Line data={Bardata} />
      </div>
    );
  };

  const liveDataReadings = async () => {
    let results = [];
    let limit = 20;
    await Api.get(
        process.env.REACT_APP_IOT_API +`?readings=${limit}`
    ).then((response) => {
      response.data.forEach((index) => {
        results.push(index);
        console.log("Response:", index);
      });

      setLiveDataResults(results);
      setLiveDataResultsAvailable(true);
    });
  };

  const temperatureVsTime = () => {
    let temperature = [];
    let time = [];
    let DateTime = new Date();

    liveDataResults.forEach((result) => {
      temperature.push(result.temperature);
      time.push(
        new Date(result.timeInUtc)
          .toISOString()
          .replace("T", " ")
          .substring(0, 16)
      );
    });

    let data = {
      labels: time,

      datasets: [
        {
          label: "Temperature",
          data: temperature,
          borderWidth: 1,
          backgroundColor: ["rgb(255, 99, 132)"],
          borderColor: ["rgb(255, 99, 132)"],
          options: {
            responsive: true,
          },
        },
      ],
    };

    return (
      <div style={{ position: "relative", margin: "auto", maxWidth: "512px" }}>
        <Line data={data} />
      </div>
    );
  };

  const beatAvgVsTime = () => {
    let beatAvg = [];
    let time = [];

    liveDataResults.forEach((result) => {
    beatAvg.push(result.beatAvg);
    time.push(
        new Date(result.timeInUtc)
            .toISOString()
            .replace("T", " ")
            .substring(0, 16)
    );
    });

    let data = {
      labels: time,
      datasets: [
        {
          label: "Beats Per Minute",
          data: beatAvg,
          borderWidth: 1,
          backgroundColor: ["rgb(54, 162, 235)"],
          borderColor: ["rgb(54, 162, 235)"],
          options: {
            responsive: true,
          },
        },
      ],
    };

    return (
      <div style={{ position: "relative", margin: "auto", maxWidth: "512px" }}>
        <Line data={data} />
      </div>
    );
  };

  const beatsPerMinuteVsTime = () => {
    let beatsPerMinute = [];
      let time = [];

    liveDataResults.forEach((result) => {
      beatsPerMinute.push(result.beatsPerMinute);
      time.push(
           new Date(result.timeInUtc)
              .toISOString()
              .replace("T", " ")
               .substring(0, 16)
      );
    });

    let data = {
      labels: time,
      datasets: [
        {
          label: "beatsPerMinute",
          data: beatsPerMinute,
          borderWidth: 1,
          backgroundColor: ["rgb(255, 205, 86)"],
          borderColor: ["rgb(255, 205, 86)"],
          options: {
            responsive: true,
          },
        },
      ],
    };

    return (
      <div style={{ position: "relative", margin: "auto", maxWidth: "512px" }}>
        <Line data={data} />
      </div>
    );
  };

  return (
    <div className="mt-4 mb-5 container">
      <h3 className="mt-2 font-bold">Dashboard</h3>

      {/* <div className="row">
        <div className="col-md-6">{BarChart()}</div>
        <div className="col-md-6">{DoughnutChart()}</div>
      </div> */}

      {isLiveDataResultsAvailable && (
        <div className="mt-2 mb-5 row g-4">
          <div className="col-md-4">
            <h5 className="text-center">Temperature vs Time</h5>
            {temperatureVsTime()}
          </div>
          <div className="col-md-4">
            <h5 className="text-center">Beats Average vs Time</h5>
            {beatAvgVsTime()}
          </div>
          <div className="col-md-4">
            <h5 className="text-center">Beats Per Minute vs Time</h5>
            {beatsPerMinuteVsTime()}
          </div>
        </div>
      )}
      <div className="mt-4 row animated fadeInDown g-3">
        <div className="col-md-4">
          <Link className="card card-link pt-4 pb-2 px-4" to="/health-activity">
            <h4>Health Activity</h4>
            <p className="text-muted">See your overall health activity</p>
            <p className="my-2 more-btn">
              More <i className="fa-solid fa-arrow-right fa-fw"></i>
            </p>
          </Link>
        </div>
        <div className="col-md-4">
          <Link className="card card-link pt-4 pb-2 px-4" to="/health-history">
            <h4>Health History</h4>
            <p className="text-muted">Check your health history</p>
            <p className="my-2 more-btn">
              More <i className="fa-solid fa-arrow-right fa-fw"></i>
            </p>
          </Link>
        </div>
        <div className="col-md-4">
          <Link className="card card-link pt-4 pb-2 px-4" to="/my-family">
            <h4>Family</h4>
            <p className="text-muted">Members in a family</p>
            <p className="my-2 more-btn">
              More <i className="fa-solid fa-arrow-right fa-fw"></i>
            </p>
          </Link>
        </div>
        <div className="col-md-4">
          <Link
            className="card card-link pt-4 pb-2 px-4"
            to="/known-health-issues"
          >
            <h4>Known health issues</h4>
            <p className="text-muted">Already known health problems</p>
            <p className="my-2 more-btn">
              More <i className="fa-solid fa-arrow-right fa-fw"></i>
            </p>
          </Link>
        </div>
        <div className="col-md-4">
          <Link className="card card-link pt-4 pb-2 px-4" to="/my-appointments">
            <h4>My Appointments</h4>
            <p className="text-muted">Your appointments will show here</p>
            <p className="my-2 more-btn">
              More <i className="fa-solid fa-arrow-right fa-fw"></i>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

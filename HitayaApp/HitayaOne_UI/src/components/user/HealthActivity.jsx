import { Link } from "react-router-dom";
import Api from "../../Api/Api.js";
import React, { useEffect, useState } from "react";

import NoDataFound from "../common/misc/NoPatientDataFound.jsx";

export default function HealthActivity() {
  const [isLoading, setIsLoading] = useState(true);
  const [healthActivities, setHealthActivities] = useState(null);

  const [activityType, setActivityType] = useState("");
  const [intensity, setIntensity] = useState("");
  const [distance, setDistance] = useState("");
  const [date, setDate] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    index();
  }, []);

  function index() {
    let userHealthActivities = [];

    Api.get("/user/get-all-user-health-activity")
      .then((response) => {
        userHealthActivities = response.data.userHealthActivityDetails.map(
          (health, index) => {
            return (
              <div className="col-1 col-sm-6 col-md-4" key={index}>
                <div className="card card-body">
                  <h4 className="mt-0">{health.activityType}</h4>
                  {health.intensity === "High" && (
                    <h5 className="mt-2 mb-0 text-danger">
                      {health.intensity}
                    </h5>
                  )}
                  {health.intensity === "Medium" && (
                    <h5 className="mt-2 mb-0 text-primary">
                      {health.intensity}
                    </h5>
                  )}
                  {health.intensity === "Low" && (
                    <h5 className="mt-2 mb-0 text-success">
                      {health.intensity}
                    </h5>
                  )}
                  <p className="mb-0 text-muted type-6">
                    Distance: {health.distance}
                  </p>
                  <p className="mt-0 mb-0 text-muted type-6">
                    {health.from} - {health.to}
                  </p>
                </div>
              </div>
            );
          }
        );

        if (userHealthActivities.length) {
          setIsLoading(false);
          setHealthActivities(userHealthActivities);
        } else {
          setIsLoading(false);
          setHealthActivities(<NoDataFound />);
        }
      })
      .catch((error) => {
        alert(`error occured ${error}`);
      });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case "activityType":
        setActivityType(value);
        break;
      case "intensity":
        setIntensity(value);
        break;
      case "distance":
        setDistance(value);
        break;
      case "from":
        setFrom(value);
        break;
      case "to":
        setTo(value);
        break;
      case "date":
        setDate(value);
        break;
      default:
        break;
    }
  }

  function addNewHealthActivity() {
    let payload = {
      activityType: activityType,
      intensity: intensity,
      date: date,
      from: from,
      to: to,
      distance: distance,
    };

    Api.post("/user/add-user-health-activity", payload)
      .then(() => {
        index();
      })
      .catch((error) => {
        alert(error);
      });
  }

  function resetForm() {
    setActivityType("");
    setIntensity("");
    setDate("");
    setTo("");
    setFrom("");
    setDistance("");
  }

  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="addNewActivityModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                <i className="fa-solid fa-user-plus fa-fw"></i> Add new activity
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container mb-4">
                <div className="row">
                  <div className="col-md-4">
                    <label htmlFor="activity-type" className="font-semi-bold">
                      Activity type:
                    </label>
                    <input
                      id="activity-type"
                      className="mt-2 form-control"
                      type="text"
                      name="activityType"
                      placeholder="i.e. Running"
                      value={activityType}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>
                <div className="mt-4 row">
                  <div className="col-md-4">
                    <label htmlFor="distance" className="font-semi-bold">
                      Distance:
                    </label>
                    <input
                      id="distance"
                      className="mt-2 form-control"
                      type="text"
                      name="distance"
                      placeholder="i.e. 8 KM"
                      value={distance}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="intensity" className="font-semi-bold">
                      Intensity:
                    </label>
                    <select
                      id="intensity"
                      className="mt-2 form-select"
                      name="intensity"
                      value={intensity}
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option value="" defaultValue disabled>
                        Select Intesity
                      </option>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                </div>

                <hr className="my-4" />

                <div className="mt-4 row">
                  <div className="col-md-4">
                    <label htmlFor="date" className="font-semi-bold">
                      Date:
                    </label>
                    <input
                      id="date"
                      className="mt-2 form-control"
                      type="date"
                      name="date"
                      placeholder="i.e. Running"
                      value={date}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>
                <div className="mt-4 row">
                  <div className="col-md-4">
                    <label htmlFor="from" className="font-semi-bold">
                      From (time):
                    </label>
                    <input
                      id="from"
                      className="mt-2 form-control"
                      type="time"
                      name="from"
                      placeholder="i.e. Running"
                      value={from}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="to" className="font-semi-bold">
                      To (time):
                    </label>
                    <input
                      id="to"
                      className="mt-2 form-control"
                      type="time"
                      name="to"
                      placeholder="i.e. Running"
                      value={to}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={resetForm}>
                <i className="fa-regular fa-file fa-fw"></i> Reset
              </button>
              <button
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={addNewHealthActivity}
              >
                <i className="fa-regular fa-plus fa-fw"></i> Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 mb-5 container">
        <h3 className="mt-2 font-bold">
          Health <span className="text-theme-red">Activity</span>
          <span className="float-end">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#addNewActivityModal"
              onClick={resetForm}
            >
              <i className="fa-solid fa-user-plus fa-fw"></i> Add new activity
            </button>
          </span>
        </h3>
        <div className="mt-4 row">
          {isLoading && <h6 className="text-center">...</h6>}
        </div>

        {!isLoading && (
          <div className="mb-5 row animated fadeInDown g-3">
            {healthActivities}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

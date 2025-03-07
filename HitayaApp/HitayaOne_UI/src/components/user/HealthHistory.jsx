import { Link } from "react-router-dom";
import Api from "../../Api/Api.js";
import React, { useEffect, useState } from "react";

import NoDataFound from "../common/misc/NoPatientDataFound.jsx";

export default function HealthHistory() {
  const [isLoading, setIsLoading] = useState(true);
  const [healthIssues, setHealthIssues] = useState(null);

  const [healthIssue, setHealthIssue] = useState("");
  const [treatedFrom, setTreatedFrom] = useState("");
  const [treatedTo, setTreatedTo] = useState("");
  const [treatedBy, setTreatedBy] = useState("");

  useEffect(() => {
    index();
  }, []);

  function index() {
    let userHealthIssues = [];

    Api.get("/user/get-all-user-health-history")
      .then((response) => {
        userHealthIssues = response.data.UserHealthHistoryDetails.map(
          (issue, index) => {
            return (
              <div className="col-1 col-sm-6 col-md-4" key={index}>
                <div className="card card-body">
                  <h4 className="mt-0">{issue.healthIssue}</h4>
                  <p className="mb-0 text-muted type-6">
                    <span className="font-semi-bold">Treated by:</span>{" "}
                    {issue.treatedBy}
                  </p>
                  <p className="mt-0 mb-0 text-muted type-6">
                    {issue.treatedFrom} - {issue.treatedTo}
                  </p>
                </div>
              </div>
            );
          }
        );

        if (userHealthIssues.length) {
          setIsLoading(false);
          setHealthIssues(userHealthIssues);
        } else {
          setIsLoading(false);
          setHealthIssues(<NoDataFound />);
        }
      })
      .catch((error) => {
        alert(`error occured ${error}`);
      });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case "healthIssue":
        setHealthIssue(value);
        break;
      case "treatedFrom":
        setTreatedFrom(value);
        break;
      case "treatedTo":
        setTreatedTo(value);
        break;
      case "treatedBy":
        setTreatedBy(value);
        break;
      default:
        break;
    }
  }

  function addNewHealthHistory() {
    let payload = {
      healthIssue: healthIssue,
      treatedFrom: treatedFrom,
      treatedTo: treatedTo,
      treatedBy: treatedBy,
    };

    Api.post("/user/add-user-health-history", payload)
      .then(() => {
        index();
      })
      .catch((error) => {
        alert(error);
      });
  }

  function resetForm() {
    setHealthIssue("");
    setTreatedFrom("");
    setTreatedTo("");
    setTreatedBy("");
  }

  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="addNewHealthHistoryModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                <i className="fa-solid fa-user-plus fa-fw"></i> Add new health history
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
                    <label htmlFor="health-issue" className="font-semi-bold">
                      Health Issue:
                    </label>
                    <input
                      id="health-issue"
                      className="mt-2 form-control"
                      type="text"
                      name="healthIssue"
                      placeholder="i.e. Fever"
                      value={healthIssue}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <hr className="my-4" />

                <div className="mt-4 row">
                  <div className="col-md-4">
                    <label htmlFor="treated-by" className="font-semi-bold">
                      Treated by:
                    </label>
                    <input
                      id="treated-by"
                      className="mt-2 form-control"
                      type="text"
                      name="treatedBy"
                      placeholder="i.e. jehr3473528rye8543et43"
                      value={treatedBy}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>
                <div className="mt-4 row">
                  <div className="col-md-4">
                    <label htmlFor="treated-from" className="font-semi-bold">
                      From (time):
                    </label>
                    <input
                      id="treated-from"
                      className="mt-2 form-control"
                      type="date"
                      name="treatedFrom"
                      value={treatedFrom}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="treated-to" className="font-semi-bold">
                      To (time):
                    </label>
                    <input
                      id="treated-to"
                      className="mt-2 form-control"
                      type="date"
                      name="treatedTo"
                      value={treatedTo}
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
                onClick={addNewHealthHistory}
              >
                <i className="fa-regular fa-plus fa-fw"></i> Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 mb-5 container">
        <h3 className="mt-2 font-bold">
          Health <span className="text-theme-red">History</span>
          <span className="float-end">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#addNewHealthHistoryModal"
              onClick={resetForm}
            >
              <i className="fa-solid fa-plus fa-fw"></i> Add new
            </button>
          </span>
        </h3>
        <div className="mt-4 row">
          {isLoading && <h6 className="text-center">...</h6>}
        </div>

        {!isLoading && (
          <div className="mb-5 row animated fadeInDown g-3">{healthIssues}</div>
        )}
      </div>
    </React.Fragment>
  );
}

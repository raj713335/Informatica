import React, { useEffect, useState } from "react";
import Api from "../../Api/Api.js";

import NoDataFound from "../common/misc/NoPatientDataFound.jsx";

export default function KnownHealthIsssues() {
  const [isLoading, setIsLoading] = useState(true);
  const [knownHealthIssues, setKnownHealthIssues] = useState(null);

  const [healthIssue, setHealthIssue] = useState("");
  const [severity, setSeverity] = useState("");
  const [type, setType] = useState("");
  const [isGeneticallyTransmissible, setIsGeneticallyTransmissible] =
    useState("");
  const [startedFrom, setStartedFrom] = useState("");

  useEffect(() => {
    index();
  }, []);

  function index() {
    let userKnownHealthIssues = [];

    Api.get("/user/get-all-know-health-issue")
      .then((response) => {
        userKnownHealthIssues = response.data.healthIssuesDetails.map(
          (knownIssue, index) => {
            return (
              <div className="col-1 col-sm-6 col-md-4" key={index}>
                <div className="card card-body">
                  <h4 className="mt-0">{knownIssue.healthIssue}</h4>
                  <h5 className="mt-2 mb-0 text-danger">
                    {knownIssue.severity}
                  </h5>
                  <p className="mb-0 text-muted type-6">
                    Type: {knownIssue.type}
                  </p>
                  <p className="mt-0 mb-0 text-muted type-6">
                    Started from: {knownIssue.startedFrom}
                  </p>
                </div>
              </div>
            );
          }
        );

        if (userKnownHealthIssues.length) {
          setIsLoading(false);
          setKnownHealthIssues(userKnownHealthIssues);
        } else {
          setIsLoading(false);
          setKnownHealthIssues(<NoDataFound />);
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
      case "severity":
        setSeverity(value);
        break;
      case "type":
        setType(value);
        break;
      case "isGeneticallyTransmissible":
        setIsGeneticallyTransmissible(value);
        break;
      case "startedFrom":
        setStartedFrom(value);
        break;
      default:
        break;
    }
  }

  function addNewKnownHealthIssues() {
    let payload = {
      healthIssue: healthIssue,
      severity: severity,
      type: type,
      isGeneticallyTransmissible: isGeneticallyTransmissible,
      startedFrom: startedFrom,
    };

    Api.post("/user/add-know-health-issue", payload)
      .then(() => {
        index();
      })
      .catch((error) => {
        alert(error);
      });
  }

  function resetForm() {
    setHealthIssue("");
    setSeverity("");
    setType("");
    setIsGeneticallyTransmissible("");
    setStartedFrom("");
  }

  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="addNewKnownHealthIssuesModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                <i className="fa-solid fa-user-plus fa-fw"></i> Add new know
                health issue
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
                      placeholder="i.e. Diabetes"
                      value={healthIssue}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>
                <div className="mt-4 row">
                  <div className="col-md-4">
                    <label htmlFor="severity" className="font-semi-bold">
                      Severity:
                    </label>
                    <input
                      id="severity"
                      className="mt-2 form-control"
                      type="text"
                      name="severity"
                      placeholder="i.e. Mild"
                      value={severity}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="type" className="font-semi-bold">
                      Type:
                    </label>
                    <input
                      id="type"
                      className="mt-2 form-control"
                      type="text"
                      name="type"
                      placeholder="i.e. Type II"
                      value={type}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="is-genetically-transmissible"
                      className="font-semi-bold"
                    >
                      Genetically Transmissible:
                    </label>
                    <select
                      id="is-genetically-transmissible"
                      className="mt-2 form-select"
                      name="isGeneticallyTransmissible"
                      value={isGeneticallyTransmissible}
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option value="" defaultValue disabled>
                        Select
                      </option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                </div>

                <hr className="my-4" />

                <div className="mt-4 row">
                  <div className="col-md-4">
                    <label htmlFor="started-from" className="font-semi-bold">
                      Started from:
                    </label>
                    <input
                      id="started-from"
                      className="mt-2 form-control"
                      type="date"
                      name="startedFrom"
                      value={startedFrom}
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
                onClick={addNewKnownHealthIssues}
              >
                <i className="fa-regular fa-plus fa-fw"></i> Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 mb-5 container">
        <h3 className="mt-2 font-bold">
          Known Health <span className="text-theme-red">Issues</span>
          <span className="float-end">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#addNewKnownHealthIssuesModal"
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
            {knownHealthIssues}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

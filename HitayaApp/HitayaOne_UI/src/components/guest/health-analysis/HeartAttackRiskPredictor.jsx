import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HeartAttackRiskPredictorComponent() {
  const [fullName, setFullName] = useState();
  const [age, setAge] = useState();
  const [sex, setSex] = useState();
  const [race, setRace] = useState();

  const [diastolicBP, setDiastolicBP] = useState();
  const [redBloocCells, setRedBloodCells] = useState();
  const [sedimantationRate, setSedimantationRate] = useState();

  const [serumAlbumin, setSerumAlbumin] = useState();
  const [serumCholesterol, setSerumCholesterol] = useState();
  const [serumIron, setSerumIron] = useState();
  const [serumMagnesium, setSerumMagnesium] = useState();
  const [serumProtein, setSerumProtein] = useState();

  const [systolicBP, setSystolicBP] = useState();
  const [tibc, setTibc] = useState();
  const [ts, setTs] = useState();

  const [whiteBloodCells, setWhiteBloodCells] = useState();
  const [bmi, setBmi] = useState();
  const [pulsePressure, setPulsePressure] = useState();

  return (
    <React.Fragment>
      <div className="mt-4 container">
        <Link to="/health-analysis" className="mb-0 text-muted">
          <i className="fa-solid fa-arrow-left fa-fw"></i> Back to Health Analysis
        </Link>
        <h1 className="mt-0 font-bold">
          Heart Attack <span className="text-theme-red">Risk</span> Predictor
        </h1>
      </div>
      <div className="mt-4 mb-5 container">
        <div className="row">
          <div className="col-md-5">
            <div className="bg-faint-blue py-4 px-4">
              <label>Full Name:</label>
              <input
                type="text"
                className="mt-1 form-control form-control-md"
                placeholder="Full Name"
              />
              <div className="my-3 row">
                <div className="col-6 col-md-6">
                  <label>Age:</label>
                  <input
                    type="number"
                    className="mt-1 form-control form-control-md"
                    placeholder="Age"
                  />
                </div>
                <div className="col-6 col-md-6">
                  <label>Sex:</label>
                  <select className="mt-1 form-select form-select-md" value="">
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="male">M</option>
                    <option value="female">F</option>
                  </select>
                </div>
              </div>
              <div className="my-3 row">
                <div className="col-6 col-md-6">
                  <label>Race:</label>
                  <input
                    type="text"
                    className="mt-1 form-control form-control-md"
                    placeholder="Race"
                  />
                </div>
              </div>

              <hr />

              <div className="my-3 row">
                <div className="col-6 col-md-6">
                  <label>Diastolic BP:</label>
                  <input
                    type="text"
                    className="mt-1 form-control form-control-md"
                    placeholder="Diastolic BP"
                  />
                </div>
                <div className="col-6 col-md-6">
                  <label>Red Blood Cells:</label>
                  <input
                    type="text"
                    className="mt-1 form-control form-control-md"
                    placeholder="Red Blood Cells"
                  />
                </div>
              </div>
              <div className="my-3 row">
                <div className="col-6 col-md-6">
                  <label>Sedimantation Rate:</label>
                  <input
                    type="text"
                    className="mt-1 form-control form-control-md"
                    placeholder="Sedimantation Rate"
                  />
                </div>
              </div>

              <hr />

              <div className="my-3 row">
                <div className="col-6 col-md-6">
                  <label>Serum Albumin:</label>
                  <input
                    type="text"
                    className="mt-1 form-control form-control-md"
                    placeholder="Serum Albumin"
                  />
                </div>
                <div className="col-6 col-md-6">
                  <label>Serum Cholesterol:</label>
                  <input
                    type="text"
                    className="mt-1 form-control form-control-md"
                    placeholder="Serum Cholesterol"
                  />
                </div>
              </div>
              <div className="my-3 row">
                <div className="col-6 col-md-6">
                  <label>Serum Iron:</label>
                  <input
                    type="text"
                    className="mt-1 form-control form-control-md"
                    placeholder="Serum Iron"
                  />
                </div>
                <div className="col-6 col-md-6">
                  <label>Serum Magnesium:</label>
                  <input
                    type="text"
                    className="mt-1 form-control form-control-md"
                    placeholder="Serum Magnesium"
                  />
                </div>
              </div>
              <div className="my-3 row">
                <div className="col-6 col-md-6">
                  <label>Serum Protein:</label>
                  <input
                    type="text"
                    className="mt-1 form-control form-control-md"
                    placeholder="Serum Protein"
                  />
                </div>
              </div>

              <hr />

              <div className="my-3 row">
                <div className="col-6 col-md-6">
                  <label>Systolic BP:</label>
                  <input
                    type="text"
                    className="mt-1 form-control form-control-md"
                    placeholder="Systolic BP"
                  />
                </div>
                <div className="col-6 col-md-6">
                  <label>TIBC:</label>
                  <input
                    type="text"
                    className="mt-1 form-control form-control-md"
                    placeholder="TIBC"
                  />
                </div>
              </div>
              <div className="my-3 row">
                <div className="col-6 col-md-6">
                  <label>TS:</label>
                  <input
                    type="text"
                    className="mt-1 form-control form-control-md"
                    placeholder="TS"
                  />
                </div>
                <div className="col-6 col-md-6">
                  <label>White Blood Cells:</label>
                  <input
                    type="text"
                    className="mt-1 form-control form-control-md"
                    placeholder="White Blood Cells"
                  />
                </div>
              </div>
              <div className="my-3 row">
                <div className="col-6 col-md-6">
                  <label>BMI:</label>
                  <input
                    type="text"
                    className="mt-1 form-control form-control-md"
                    placeholder="BMI"
                  />
                </div>
                <div className="col-6 col-md-6">
                  <label>Pulse Pressure:</label>
                  <input
                    type="text"
                    className="mt-1 form-control form-control-md"
                    placeholder="Pulse Pressure"
                  />
                </div>
              </div>

              <hr />

              <div className="mt-2 row">
                <div className="col-md-12">
                  <button className="btn btn-success float-end">
                    Check Risk <i className="fa-solid fa-arrow-right fa-fw"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

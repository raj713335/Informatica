import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { sleep } from "./../../../general-helpers.js";

import ApiML from "../../../Api/ApiML.js";
import NoPatientDataFound from "../../common/misc/NoPatientDataFound.jsx";
import ScreenLoader from "../../common/ScreenLoader.jsx";
import { Popover } from "bootstrap";

export default function HeartDisease() {
  const DB = "heartDiseasePatientsDB";

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  const [chestPainType, setChestPainType] = useState("");
  const [restingBloodPressure, setRestingBloodPressure] = useState(0);
  const [serumCholestoral, setSerumCholestoral] = useState(0);
  const [fastingBloodSugar, setFastingBloodSugar] = useState("");
  const [
    restingElectrocardiographicResults,
    setRestingElectrocardiographicResults,
  ] = useState("");
  const [maximumHeartRateAchieved, setMaximumHeartRateAchieved] = useState(0);
  const [exerciseInducedAngina, setExerciseInducedAngina] = useState("");
  const [oldpeak, setOldpeak] = useState(0);
  const [slope, setSlope] = useState("");
  const [numberOfMajorVessels, setNumberOfMajorVessels] = useState(0);
  const [thal, setThal] = useState("");

  const [result, setResult] = useState();
  const [isResultAvailable, setIsResultAvailable] = useState(false);
  const [patients, setPatients] = useState("");
  const [isPatientDetailsAvailable, setIsPatientDetailsAvailable] =
    useState(false);
  const [patientDetails, setPatientDetails] = useState({});
  const [showScreenLoader, setShowScreenLoader] = useState(false);

  useEffect(() => {
    index();
    // Popover on hover i-button (info button) release disease parameter info
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );

    [...popoverTriggerList].map(
      (popoverTriggerEl) => new Popover(popoverTriggerEl)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const index = () => {
    let patientsData = JSON.parse(window.localStorage.getItem(DB));
    let p = [];

    if (patientsData !== null && patientsData.length !== 0) {
      p = patientsData.map((patient, index) => {
        return (
          <div className="col-md-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h4 className="mb-0 mt-0">{patient.full_name}</h4>
                <p className="mt-0 text-success">
                  {patient.age}, {patient.gender.toUpperCase()}
                </p>
                <div className="row">
                  <div className="col-sm-6">
                    <p className="mt-2 mb-0 text-muted type-7-2">
                      # {patient.id.toUpperCase()}
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <button
                      className="btn btn-success float-end"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#patientDetailModal"
                      onClick={(e) => loadCurrentPatientDetails(e, patient.id)}
                    >
                      Details <i className="fa-solid fa-arrow-right fa-fw"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });

      setPatients(<div className="row mt-4 mb-5 g-3">{p}</div>);
      return;
    }

    setPatients(<NoPatientDataFound />);
  };

  const STORE_IN_DB = (patient) => {
    let patients = JSON.parse(window.localStorage.getItem(DB)) || [];
    patients.push(patient);

    window.localStorage.setItem(DB, JSON.stringify(patients));

    index();
  };

  const DELETE_FROM_DB = (patientId) => {
    let patients = JSON.parse(window.localStorage.getItem(DB));
    patients = patients ? patients : [];

    patients = patients.filter((obj) => obj.id !== patientId);

    window.localStorage.setItem(DB, JSON.stringify(patients));
    index();
  };

  const savePatientData = () => {
    let patientData = {
      id: Math.random()
        .toString(36)
        .substring(2, 8 + 2),
      full_name: fullName,
      age: age,
      gender: gender,
      sex: gender === "m" ? 1 : 0,
      chest_pain_type: chestPainType,
      resting_blood_pressure: restingBloodPressure,
      serum_cholestoral: serumCholestoral,
      fasting_blood_sugar: fastingBloodSugar,
      resting_electrocardiographic_results: restingElectrocardiographicResults,
      maximum_heart_rate_achieved: maximumHeartRateAchieved,
      exercise_induced_angina: exerciseInducedAngina,
      oldpeak: oldpeak,
      slope: slope,
      number_of_major_vessels: numberOfMajorVessels,
      thal: thal,
      result_status: result === "Heart Disease" ? 1 : 0,
      result: result,
    };

    resetForm();
    STORE_IN_DB(patientData);
  };

  const deletePatientData = (e, patientId) => {
    e.preventDefault();
    DELETE_FROM_DB(patientId);
    index();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "fullName":
        setFullName(value);
        break;
      case "age":
        setAge(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "chestPainType":
        setChestPainType(value);
        break;
      case "restingBloodPressure":
        setRestingBloodPressure(value);
        break;
      case "serumCholestoral":
        setSerumCholestoral(value);
        break;
      case "fastingBloodSugar":
        setFastingBloodSugar(value);
        break;
      case "restingElectrocardiographicResults":
        setRestingElectrocardiographicResults(value);
        break;
      case "maximumHeartRateAchieved":
        setMaximumHeartRateAchieved(value);
        break;
      case "exerciseInducedAngina":
        setExerciseInducedAngina(value);
        break;
      case "oldpeak":
        setOldpeak(value);
        break;
      case "slope":
        setSlope(value);
        break;
      case "numberOfMajorVessels":
        setNumberOfMajorVessels(value);
        break;
      case "thal":
        setThal(value);
        break;
      default:
        break;
    }
  };

  const fillSampleData = (e) => {
    e.preventDefault();

    setFullName("John Doe");
    setAge(58);
    setGender("m");
    setChestPainType(2);
    setRestingBloodPressure(140);
    setSerumCholestoral(211);
    setFastingBloodSugar(1);
    setRestingElectrocardiographicResults(0);
    setMaximumHeartRateAchieved(165);
    setExerciseInducedAngina(0);
    setOldpeak(0);
    setSlope(2);
    setNumberOfMajorVessels(0);
    setThal(2);

    setResult("");
    setIsResultAvailable(false);
  };

  const resetForm = () => {
    setFullName("");
    setAge("");
    setGender("");
    setChestPainType("");
    setRestingBloodPressure(0);
    setSerumCholestoral(0);
    setFastingBloodSugar("");
    setRestingElectrocardiographicResults("");
    setMaximumHeartRateAchieved(0);
    setExerciseInducedAngina("");
    setOldpeak(0);
    setSlope("");
    setNumberOfMajorVessels(0);
    setThal("");

    setResult("");
    setIsResultAvailable(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      disease: "heart_disease",
      parameters: {
        age: age,
        sex: gender === "m" ? 1 : 0,
        cp: chestPainType,
        trestbps: restingBloodPressure,
        chol: serumCholestoral,
        fbs: fastingBloodSugar,
        restecg: restingElectrocardiographicResults,
        thalach: maximumHeartRateAchieved,
        exang: exerciseInducedAngina,
        oldpeak: oldpeak,
        slope: slope,
        ca: numberOfMajorVessels,
        thal: thal,
      },
    };

    setShowScreenLoader(true);
    await sleep(3000);

    await ApiML.post("/disease", payload)
      .then((res) => {
        setShowScreenLoader(false);
        setResult(res.data);
        setIsResultAvailable(true);
      })
      .catch((err) => {
        setShowScreenLoader(false);
        console.log("Error:", err);
      });
  };

  const loadCurrentPatientDetails = (e, patientId) => {
    e.preventDefault();

    let patientsData = JSON.parse(window.localStorage.getItem(DB));
    const patientData = patientsData.find((obj) => obj.id === patientId);

    setPatientDetails(patientData);
    setIsPatientDetailsAvailable(true);
  };

  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="newPatientModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            {showScreenLoader && <ScreenLoader />}
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                <i className="fa-solid fa-user-plus fa-fw"></i> Record new
                patient
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
                  <div className="col-md-6">
                    <label htmlFor="fullName" className="mb-2 font-semi-bold">
                      Full name:
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="form-control"
                      name="fullName"
                      value={fullName}
                      onChange={(e) => handleInputChange(e)}
                      placeholder="Full name"
                    />

                    <div className="mt-3 row">
                      <div className="col-md-6">
                        <label htmlFor="age" className="mb-1 font-semi-bold">
                          Age:
                        </label>
                        <input
                          type="number"
                          id="age"
                          className="form-control"
                          name="age"
                          value={age}
                          placeholder="Age"
                          onChange={(e) => handleInputChange(e)}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="gender" className="mb-1 font-semi-bold">
                          Gender:
                        </label>
                        <select
                          id="gender"
                          className="form-select"
                          name="gender"
                          value={gender}
                          onChange={(e) => handleInputChange(e)}
                        >
                          <option value="" defaultValue disabled>
                            Select Gender
                          </option>
                          <option value="m">Male</option>
                          <option value="f">Female</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="mt-5">Body Data</h4>
                <hr />
                <div className="row">
                  <div className="col-md-4">
                    <label
                      htmlFor="chestPainType"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      <div>
                        Chest Pain Type: <span className="text-danger">*</span>
                      </div>
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/heart-disease#chest_pain_type"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Chest Pain Type"
                        data-bs-content="Chest pain type is one of the features that can be used to diagnose
                        heart disease. There are four types of chest pain that are
                        associated with heart disease: Typical angina, Atypical angina, Non-anginal pain, Asymptomatic etc."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <select
                      id="chestPainType"
                      className="form-select"
                      name="chestPainType"
                      value={chestPainType}
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option value="" defaultValue disabled>
                        Select Chest Pain Type
                      </option>
                      <option value="1">Typical Angina</option>
                      <option value="2">Atypical Angina</option>
                      <option value="3">Non-anginal Pain</option>
                      <option value="4">Asymptomatic</option>
                    </select>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-5">
                    <label
                      htmlFor="restingBloodPressure"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      <div>
                        Resting Blood Pressure:{" "}
                        <span className="text-danger">*</span>
                      </div>
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/heart-disease#rbp"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Resting Blood Pressure"
                        data-bs-content="A normal RBP reading is generally considered to be below 120/80
                        mmHg. High RBP can indicate hypertension or other cardiovascular
                        problems."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="restingBloodPressure"
                      className="form-control"
                      name="restingBloodPressure"
                      value={restingBloodPressure}
                      placeholder="Resting Blood Pressure"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-5">
                    <label
                      htmlFor="serumCholestoral"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      <div>
                        Serum Cholestoral: <span className="text-danger">*</span>
                      </div>
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/heart-disease#serum_cholestoral"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Serum Cholestoral"
                        data-bs-content="Serum cholesterol is a type of fat found in the blood. In the
                        context of heart disease, high levels of serum cholesterol are
                        associated with an increased risk of developing heart disease and
                        other cardiovascular problems."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="serumCholestoral"
                      className="form-control"
                      name="serumCholestoral"
                      value={serumCholestoral}
                      placeholder="Serum Cholestoral"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-5">
                    <label
                      htmlFor="fastingBloodSugar"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      <div>
                        Fasting Blood Sugar:{" "}
                        <span className="text-danger">*</span>
                      </div>
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/heart-disease#fbs"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Fasting Blood Sugar"
                        data-bs-content="High levels of fasting blood sugar are associated with an increased
                        risk of developing diabetes, which in turn can increase the risk of
                        heart disease."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <select
                      id="fastingBloodSugar"
                      className="form-select"
                      name="fastingBloodSugar"
                      value={fastingBloodSugar}
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option value="" defaultValue disabled>
                        Select Fasting Blood Sugar
                      </option>
                      <option value="0">Lower than 120mg/ml</option>
                      <option value="1">Greater than 120mg/ml</option>
                    </select>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-7">
                    <label
                      htmlFor="restingElectrocardiographicResults"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      <div>
                        Resting Electrocardiographic:{" "}
                        <span className="text-danger">*</span>
                      </div>
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/heart-disease#ecg"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Resting Electrocardiographic (ECG)"
                        data-bs-content="Resting Electrocardiographic (ECG) in heart disease refers to the
                        electrical activity of the heart recorded while the patient is at
                        rest."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <select
                      id="restingElectrocardiographicResults"
                      className="form-select"
                      name="restingElectrocardiographicResults"
                      value={restingElectrocardiographicResults}
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option value="" defaultValue disabled>
                        Select Resting Electrocardiographic
                      </option>
                      <option value="0">Normal</option>
                      <option value="1">Having ST-T wave abnormality</option>
                      <option value="2">
                        Showing probable or definite left ventricular
                        hypertrophy
                      </option>
                    </select>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="maximumHeartRateAchieved"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      <div>
                        Maximum Heart Rate: 
                        <span className="text-danger">*</span>
                      </div>
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/heart-disease#mhr"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Maximum Heart Rate"
                        data-bs-content="A general estimate for Maximum Heart Rate can be calculated by
                        subtracting a person's age from 220. For example, the Maximum Heart
                        Rate for a 30-year-old would be approximately 190 beats per minute
                        (220 - 30)."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="maximumHeartRateAchieved"
                      className="form-control"
                      name="maximumHeartRateAchieved"
                      value={maximumHeartRateAchieved}
                      placeholder="Maximum Heart Rate"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label
                      htmlFor="exerciseInducedAngina"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      <div>
                        Exercise Induced Angina:{" "}
                        <span className="text-danger">*</span>
                      </div>
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/heart-disease#eia"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Exercise Induced Angina"
                        data-bs-content="Exercise-induced angina is a symptom of heart disease characterized
                        by chest pain or discomfort that occurs during physical activity or
                        exertion."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <select
                      id="exerciseInducedAngina"
                      className="form-select"
                      name="exerciseInducedAngina"
                      value={exerciseInducedAngina}
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option value="" defaultValue disabled>
                        Select Exercise Induced Angina
                      </option>
                      <option value="0">No</option>
                      <option value="1">Yes</option>
                    </select>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label 
                    htmlFor="oldpeak" 
                    className="mb-1 font-semi-bold d-flex justify-content-between">
                      <div>
                      Old Peak: <span className="text-danger">*</span>
                      </div>
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/heart-disease#old_peak"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Old Peak"
                        data-bs-content="Old Peak is a term used to describe a decrease in ST segment during
                        exercise compared to baseline, as measured by an electrocardiogram
                        (ECG)."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="oldpeak"
                      className="form-control"
                      name="oldpeak"
                      value={oldpeak}
                      placeholder="Old Peak"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="slope"
                    className="mb-1 font-semi-bold d-flex justify-content-between">
                      <div>
                      Slope: <span className="text-danger">*</span>
                      </div>
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/heart-disease#slope"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Slope"
                        data-bs-content="The slope of the ST segment can provide information
                        about the blood supply to the heart and the presence of coronary
                        artery disease."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <select
                      id="slope"
                      className="form-select"
                      name="slope"
                      value={slope}
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option value="" defaultValue disabled>
                        Select Slope
                      </option>
                      <option value="0">Upsloping</option>
                      <option value="1">Flat</option>
                      <option value="2">Downsloping</option>
                    </select>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label
                      htmlFor="numberOfMajorVessels"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      <div>
                      Number of Major Vessels:{" "}
                      <span className="text-danger">*</span>
                      </div>
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/heart-disease#major_vassels"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Number of Major Vessels"
                        data-bs-content="High levels of fasting blood sugar are associated with an increased
                        risk of developing diabetes, which in turn can increase the risk of
                        heart disease."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <select
                      id="numberOfMajorVessels"
                      className="form-select"
                      name="numberOfMajorVessels"
                      value={numberOfMajorVessels}
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option value="" defaultValue disabled>
                        Select Number of Major Vessels
                      </option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2 or more</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="thal"
                    className="mb-1 font-semi-bold d-flex justify-content-between">
                      <div>
                        Thal: <span className="text-danger">*</span>
                      </div>
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/heart-disease#thal"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Fasting Blood Sugar"
                        data-bs-content="Thal or Thalassemia is a genetic blood disorder that affects the
                        production of hemoglobin in the body."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <select
                      id="thal"
                      className="form-select"
                      name="thal"
                      value={thal}
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option value="" defaultValue disabled>
                        Select Thal
                      </option>
                      <option value="0">Normal</option>
                      <option value="1">Fixed Defect</option>
                      <option value="2">Reversable Defect</option>
                    </select>
                  </div>
                </div>

                {isResultAvailable && (
                  <React.Fragment>
                    {result === "Heart Disease" ? (
                      <h4 className="mt-5">
                        Result: <span className="text-danger">{result}</span>
                      </h4>
                    ) : (
                      <h4 className="mt-5">
                        Result: <span className="text-success">{result}</span>
                      </h4>
                    )}
                  </React.Fragment>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-warning float-end"
                onClick={fillSampleData}
              >
                <i className="fa-solid fa-fill-drip fa-fw"></i> Fill Sample Data
              </button>
              <button className="btn btn-secondary" onClick={resetForm}>
                <i className="fa-regular fa-file fa-fw"></i> Reset
              </button>
              {isResultAvailable ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={savePatientData}
                >
                  <i className="fa-solid fa-floppy-disk fa-fw"></i> Save Data
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleSubmit}
                >
                  Predict <i className="fa-solid fa-long-arrow-right fa-fw"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="patientDetailModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                <i className="fa-solid fa-user fa-fw"></i> Patient{" "}
                {isPatientDetailsAvailable && (
                  <span className="text-muted">
                    # {patientDetails.id.toUpperCase()}
                  </span>
                )}
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
                {isPatientDetailsAvailable && (
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="mb-0">{patientDetails.full_name}</h3>
                      <p className="mt-0 text-success">
                        {patientDetails.age},{" "}
                        {patientDetails.gender.toUpperCase()}
                      </p>

                      <table className="my-4 table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Attributes</th>
                            <th scope="col">Values</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Chest Pain Type</td>
                            {patientDetails.chest_pain_type === 0 ? (
                              <td>Typical Angina</td>
                            ) : patientDetails.chest_pain_type === 1 ? (
                              <td>Atypical Angina</td>
                            ) : patientDetails.chest_pain_type === 2 ? (
                              <td>Non-Anginal Pain</td>
                            ) : patientDetails.chest_pain_type === 3 ? (
                              <td>Asymptomatic</td>
                            ) : (
                              <td>Unknown</td>
                            )}
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Resting Blood Pressure</td>
                            <td>{patientDetails.resting_blood_pressure}</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Serum Cholestoral</td>
                            <td>{patientDetails.serum_cholestoral}</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Fasting Blood Sugar</td>
                            <td>
                              {patientDetails.fasting_blood_sugar
                                ? "Greater than 120 mg/dl"
                                : "Less than 120 mg/dl"}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Resting Electrocardiographic Results</td>
                            <td>
                              {patientDetails.resting_electrocardiographic_results ===
                              0
                                ? "Normal"
                                : patientDetails.resting_electrocardiographic_results ===
                                  1
                                ? "Having ST-T wave abnormality"
                                : patientDetails.resting_electrocardiographic_results ===
                                  2
                                ? "Showing probable or definite left ventricular hypertrophy"
                                : "Unknown"}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>Maximum Heart Rate Achieved</td>
                            <td>
                              {patientDetails.maximum_heart_rate_achieved}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">7</th>
                            <td>Exercise Induced Angina</td>
                            <td>
                              {patientDetails.exercise_induced_angina
                                ? "Yes"
                                : "No"}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">8</th>
                            <td>Oldpeak</td>
                            <td>{patientDetails.oldpeak}</td>
                          </tr>
                          <tr>
                            <th scope="row">9</th>
                            <td>Slope</td>
                            {patientDetails.slope === 0 ? (
                              <td>Upsloping</td>
                            ) : patientDetails.slope === 1 ? (
                              <td>Flat</td>
                            ) : patientDetails.slope === 2 ? (
                              <td>Downsloping</td>
                            ) : (
                              <td>Unknown</td>
                            )}
                          </tr>
                          <tr>
                            <th scope="row">10</th>
                            <td>Number of Major Vessels</td>
                            <td>
                              {patientDetails.number_of_major_vessels === 0 ? (
                                <td>0</td>
                              ) : patientDetails.number_of_major_vessels ===
                                1 ? (
                                <td>1</td>
                              ) : patientDetails.number_of_major_vessels ===
                                2 ? (
                                <td>2 or more</td>
                              ) : (
                                <td>Unknown</td>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">11</th>
                            <td>Thal</td>
                            {patientDetails.thal === 1 ? (
                              <td>Normal</td>
                            ) : patientDetails.thal === 2 ? (
                              <td>Fixed Defect</td>
                            ) : patientDetails.thal === 3 ? (
                              <td>Reversable Defect</td>
                            ) : (
                              <td>Unknown</td>
                            )}
                          </tr>
                        </tbody>
                      </table>
                      <h4>
                        Result:{" "}
                        <span
                          className={
                            patientDetails.result_status
                              ? "text-danger"
                              : "text-success"
                          }
                        >
                          {patientDetails.result}
                        </span>
                      </h4>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={(e) => deletePatientData(e, patientDetails.id)}
              >
                <i className="fa-solid fa-trash-can fa-fw"></i> Delete Patient
                Data
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 container">
        <Link to="/health-analysis" className="mb-0 text-muted">
          <i className="fa-solid fa-arrow-left fa-fw"></i> Back to Health
          Analysis
        </Link>
        <h1 className="mt-2 font-bold">
          Heart <span className="text-theme-red">Disease</span>
          <span className="float-end">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#newPatientModal"
              onClick={resetForm}
            >
              <i className="fa-solid fa-user-plus fa-fw"></i> New Patient
            </button>
          </span>
        </h1>
        {patients}
      </div>
    </React.Fragment>
  );
}

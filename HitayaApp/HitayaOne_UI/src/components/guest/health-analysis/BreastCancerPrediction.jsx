import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { sleep } from "./../../../general-helpers.js";

import ApiML from "../../../Api/ApiML.js";
import NoPatientDataFound from "../../common/misc/NoPatientDataFound.jsx";
import ScreenLoader from "../../common/ScreenLoader.jsx";
import { Popover } from "bootstrap";

export default function BreastCancerPrediction() {
  const DB = "breastCancerPredictionPatientsDB";

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("f");

  const [radiusMean, setRadiusMean] = useState(0);
  const [textureMean, setTextureMean] = useState(0);
  const [perimeterMean, setPerimeterMean] = useState(0);
  const [areaMean, setAreaMean] = useState(0);
  const [smoothnessMean, setSmoothnessMean] = useState(0);
  const [compactnessMean, setCompactnessMean] = useState(0);
  const [concavityMean, setConcavityMean] = useState(0);
  const [concavePointsMean, setConcavePointsMean] = useState(0);
  const [symmetryMean, setSymmetryMean] = useState(0);
  const [fractalDimensionMean, setFractalDimensionMean] = useState(0);
  const [radiusSe, setRadiusSe] = useState(0);
  const [textureSe, setTextureSe] = useState(0);
  const [perimeterSe, setPerimeterSe] = useState(0);
  const [areaSe, setAreaSe] = useState(0);
  const [smoothnessSe, setSmoothnessSe] = useState(0);
  const [compactnessSe, setCompactnessSe] = useState(0);
  const [concavitySe, setConcavitySe] = useState(0);
  const [concavePointsSe, setConcavePointsSe] = useState(0);
  const [symmetrySe, setSymmetrySe] = useState(0);
  const [fractalDimensionSe, setFractalDimensionSe] = useState(0);
  const [radiusWorst, setRadiusWorst] = useState(0);
  const [textureWorst, setTextureWorst] = useState(0);
  const [perimeterWorst, setPerimeterWorst] = useState(0);
  const [areaWorst, setAreaWorst] = useState(0);
  const [smoothnessWorst, setSmoothnessWorst] = useState(0);
  const [compactnessWorst, setCompactnessWorst] = useState(0);
  const [concavityWorst, setConcavityWorst] = useState(0);
  const [concavePointsWorst, setConcavePointsWorst] = useState(0);
  const [symmetryWorst, setSymmetryWorst] = useState(0);
  const [fractalDimensionWorst, setFractalDimensionWorst] = useState(0);

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
      radius_mean: radiusMean,
      texture_mean: textureMean,
      perimeter_mean: perimeterMean,
      area_mean: areaMean,
      smoothness_mean: smoothnessMean,
      compactness_mean: compactnessMean,
      concavity_mean: concavityMean,
      concave_points_mean: concavePointsMean,
      symmetry_mean: symmetryMean,
      fractal_dimension_mean: fractalDimensionMean,
      radius_se: radiusSe,
      texture_se: textureSe,
      perimeter_se: perimeterSe,
      area_se: areaSe,
      smoothness_se: smoothnessSe,
      compactness_se: compactnessSe,
      concavity_se: concavitySe,
      concave_points_se: concavePointsSe,
      symmetry_se: symmetrySe,
      fractal_dimension_se: fractalDimensionSe,
      radius_worst: radiusWorst,
      texture_worst: textureWorst,
      perimeter_worst: perimeterWorst,
      area_worst: areaWorst,
      smoothness_worst: smoothnessWorst,
      compactness_worst: compactnessWorst,
      concavity_worst: concavityWorst,
      concave_points_worst: concavePointsWorst,
      symmetry_worst: symmetryWorst,
      fractal_dimension_worst: fractalDimensionWorst,
      result_status: result !== "Benign" ? 1 : 0,
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
      case "radiusMean":
        setRadiusMean(value);
        break;
      case "textureMean":
        setTextureMean(value);
        break;
      case "perimeterMean":
        setPerimeterMean(value);
        break;
      case "areaMean":
        setAreaMean(value);
        break;
      case "smoothnessMean":
        setSmoothnessMean(value);
        break;
      case "compactnessMean":
        setCompactnessMean(value);
        break;
      case "concavityMean":
        setConcavityMean(value);
        break;
      case "concavePointsMean":
        setConcavePointsMean(value);
        break;
      case "symmetryMean":
        setSymmetryMean(value);
        break;
      case "fractalDimensionMean":
        setFractalDimensionMean(value);
        break;
      case "radiusSe":
        setRadiusSe(value);
        break;
      case "textureSe":
        setTextureSe(value);
        break;
      case "perimeterSe":
        setPerimeterSe(value);
        break;
      case "areaSe":
        setAreaSe(value);
        break;
      case "smoothnessSe":
        setSmoothnessSe(value);
        break;
      case "compactnessSe":
        setCompactnessSe(value);
        break;
      case "concavitySe":
        setConcavitySe(value);
        break;
      case "concavePointsSe":
        setConcavePointsSe(value);
        break;
      case "symmetrySe":
        setSymmetrySe(value);
        break;
      case "fractalDimensionSe":
        setFractalDimensionSe(value);
        break;
      case "radiusWorst":
        setRadiusWorst(value);
        break;
      case "textureWorst":
        setTextureWorst(value);
        break;
      case "perimeterWorst":
        setPerimeterWorst(value);
        break;
      case "areaWorst":
        setAreaWorst(value);
        break;
      case "smoothnessWorst":
        setSmoothnessWorst(value);
        break;
      case "compactnessWorst":
        setCompactnessWorst(value);
        break;
      case "concavityWorst":
        setConcavityWorst(value);
        break;
      case "concavePointsWorst":
        setConcavePointsWorst(value);
        break;
      case "symmetryWorst":
        setSymmetryWorst(value);
        break;
      case "fractalDimensionWorst":
        setFractalDimensionWorst(value);
        break;
      default:
        break;
    }
  };

  const fillSampleData = (e) => {
    e.preventDefault();

    setFullName("Jane Doe");
    setAge(22);
    setGender("f");
    setRadiusMean(17.99);
    setTextureMean(10.38);
    setPerimeterMean(122.8);
    setAreaMean(1001);
    setSmoothnessMean(0.1184);
    setCompactnessMean(0.2776);
    setConcavityMean(0.3001);
    setConcavePointsMean(0.1471);
    setSymmetryMean(0.2419);
    setFractalDimensionMean(0.07871);
    setRadiusSe(1.095);
    setTextureSe(0.9053);
    setPerimeterSe(8.589);
    setAreaSe(153.4);
    setSmoothnessSe(0.006399);
    setCompactnessSe(0.04904);
    setConcavitySe(0.05373);
    setConcavePointsSe(0.01587);
    setSymmetrySe(0.03003);
    setFractalDimensionSe(0.006193);
    setRadiusWorst(25.38);
    setTextureWorst(17.33);
    setPerimeterWorst(184.6);
    setAreaWorst(2019);
    setSmoothnessWorst(0.1622);
    setCompactnessWorst(0.6656);
    setConcavityWorst(0.7119);
    setConcavePointsWorst(0.2654);
    setSymmetryWorst(0.4601);
    setFractalDimensionWorst(0.1189);

    setResult("");
    setIsResultAvailable(false);
  };

  const resetForm = () => {
    setFullName("");
    setAge("");
    setGender("f");
    setRadiusMean("");
    setTextureMean("");
    setPerimeterMean("");
    setAreaMean("");
    setSmoothnessMean("");
    setCompactnessMean("");
    setConcavityMean("");
    setConcavePointsMean("");
    setSymmetryMean("");
    setFractalDimensionMean("");
    setRadiusSe("");
    setTextureSe("");
    setPerimeterSe("");
    setAreaSe("");
    setSmoothnessSe("");
    setCompactnessSe("");
    setConcavitySe("");
    setConcavePointsSe("");
    setSymmetrySe("");
    setFractalDimensionSe("");
    setRadiusWorst("");
    setTextureWorst("");
    setPerimeterWorst("");
    setAreaWorst("");
    setSmoothnessWorst("");
    setCompactnessWorst("");
    setConcavityWorst("");
    setConcavePointsWorst("");
    setSymmetryWorst("");
    setFractalDimensionWorst("");

    setResult("");
    setIsResultAvailable(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      disease: "breast_cancer",
      parameters: {
        radius_mean: radiusMean,
        texture_mean: textureMean,
        perimeter_mean: perimeterMean,
        area_mean: areaMean,
        smoothness_mean: smoothnessMean,
        compactness_mean: compactnessMean,
        concavity_mean: concavityMean,
        concave_points_mean: concavePointsMean,
        symmetry_mean: symmetryMean,
        fractal_dimension_mean: fractalDimensionMean,
        radius_se: radiusSe,
        texture_se: textureSe,
        perimeter_se: perimeterSe,
        area_se: areaSe,
        smoothness_se: smoothnessSe,
        compactness_se: compactnessSe,
        concavity_se: concavitySe,
        concave_points_se: concavePointsSe,
        symmetry_se: symmetrySe,
        fractal_dimension_se: fractalDimensionSe,
        radius_worst: radiusWorst,
        texture_worst: textureWorst,
        perimeter_worst: perimeterWorst,
        area_worst: areaWorst,
        smoothness_worst: smoothnessWorst,
        compactness_worst: compactnessWorst,
        concavity_worst: concavityWorst,
        concave_points_worst: concavePointsWorst,
        symmetry_worst: symmetryWorst,
        fractal_dimension_worst: fractalDimensionWorst,
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
                          disabled
                        >
                          <option value="f" defaultValue>
                            Female
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="mt-5">Breast Data</h4>
                <hr />
                <div className="row">
                  <div className="col-md-4">
                    <label
                      htmlFor="radius_mean"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Radius Mean:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#radius_mean"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Radius Mean"
                        data-bs-content="It's mean of distances from center to points on the perimeter. 
                        Range of redius mean from approximately 6.98 mm to 28.11 mm, with a median value of 13.37 mm."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="radius_mean"
                      className="form-control"
                      name="radius_mean"
                      value={radiusMean}
                      placeholder="Radius Mean"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="texture_mean"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Texture Mean:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#texture_mean"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Texture Mean"
                        data-bs-content="In breast cancer, texture refers to the pattern and distribution of
                        the different types of tissues and cells within a tumor, as seen on
                        imaging tests like mammograms and ultrasounds."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="texture_mean"
                      className="form-control"
                      name="texture_mean"
                      value={textureMean}
                      placeholder="Texture Mean"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="perimeter_mean"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Perimeter Mean:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#perimeter_mean"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Perimeter Mean"
                        data-bs-content="Perimeter mean in breast cancer refers to the average length of the
                        tumor boundary in an imaging test. The range of perimeter mean values is approximately 43.79 to 188.5,
                        However the average value of perimeter mean is approximately 91.97
                        mm."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="perimeter_mean"
                      className="form-control"
                      name="perimeter_mean"
                      value={perimeterMean}
                      placeholder="Perimeter Mean"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label htmlFor="area_mean" className="mb-1 font-semi-bold d-flex justify-content-between">
                      Area Mean:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#area_mean"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Area Mean"
                        data-bs-content="Area mean in breast cancer refers to the average size of malignant
                        cells within a tumor, as seen on imaging tests like mammograms and
                        ultrasounds. The range of area mean values is approximately 143.5 to 2501.0
                        square units. However the average value of area mean is
                        approximately 654.89 square units."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="area_mean"
                      className="form-control"
                      name="area_mean"
                      value={areaMean}
                      placeholder="Area Mean"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="smoothness_mean"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Smoothness Mean:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#smothness_mean"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Smoothness Mean"
                        data-bs-content="In breast cancer, smoothness mean refers to the average smoothness
                        of the boundary of the tumor as seen on imaging tests like
                        mammograms and ultrasounds. The range of smoothness mean values is approximately 0.71 to 0.163.
                        However the average value of smoothness mean is approximately 0.096."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="smoothness_mean"
                      className="form-control"
                      name="smoothness_mean"
                      value={smoothnessMean}
                      placeholder="Smoothness Mean"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="compactness_mean"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Compactness Mean:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#compactness_mean"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Compactness Mean"
                        data-bs-content="Compactness mean in breast cancer refers to the measure of how
                        closely the tissue in the breast is packed together. A high
                        compactness mean value can indicate that the tissue is more dense
                        and potentially more suspicious for cancer, while a lower value can
                        suggest that the tissue is less dense and potentially less
                        concerning."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="compactness_mean"
                      className="form-control"
                      name="compactness_mean"
                      value={compactnessMean}
                      placeholder="Compactness Mean"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="concavity_mean"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Concavity Mean:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#concavity_mean"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Concavity Mean"
                        data-bs-content="Concavity mean in breast cancer refers to the measure of the amount
                        of concavity or indentation present in the boundary of the tumor or
                        mass."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="concavity_mean"
                      className="form-control"
                      name="concavity_mean"
                      value={concavityMean}
                      placeholder="Concavity Mean"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="concave_points_mean"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Concave Points Mean:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#concave_points_means"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Concave Points Mean"
                        data-bs-content="Concave points mean in breast cancer refers to the average number of
                        concave regions or 'dips' present in the boundary of the tumor or
                        mass."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="concave_points_mean"
                      className="form-control"
                      name="concave_points_mean"
                      value={concavePointsMean}
                      placeholder="Concave Points Mean"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="symmetry_mean"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Symmetry Mean:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#symmetry_mean"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Symmetry Mean"
                        data-bs-content="Symmetry mean in breast cancer refers to the degree of symmetry in
                        the shape and size of cells within a breast tissue sample.  In
                        healthy breast tissue, cells tend to be fairly uniform in size and
                        shape, resulting in a higher symmetry mean value."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="symmetry_mean"
                      className="form-control"
                      name="symmetry_mean"
                      value={symmetryMean}
                      placeholder="Symmetry Mean"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="fractal_dimension_mean"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Fractal Dimension Mean:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#fractal_dimension_mean"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Fractal Dimension Mean"
                        data-bs-content="Fractal dimension mean in breast cancer refers to a measure of the
                        complexity of the boundary of the cells within a breast tissue
                        sample. In healthy breast tissue, cells tend to have a smooth and
                        regular boundary, resulting in a lower fractal dimension mean value."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="fractal_dimension_mean"
                      className="form-control"
                      name="fractal_dimension_mean"
                      value={fractalDimensionMean}
                      placeholder="Fractal Dimension Mean"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <hr className="my-4" />

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label htmlFor="radius_se" className="mb-1 font-semi-bold d-flex justify-content-between">
                      Radius SE:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#redius_se"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Radius SE"
                        data-bs-content=" The Radius SE in breast cancer refers to the standard error of the
                        mean of the distances from the center to points on the perimeter of
                        a detected mass or tumor in the breast."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="radius_se"
                      className="form-control"
                      name="radius_se"
                      value={radiusSe}
                      placeholder="Radius SE"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="texture_se" className="mb-1 font-semi-bold d-flex justify-content-between">
                      Texture SE:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#texture_se"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Texture SE"
                        data-bs-content="Texture SE, or Texture Standard Error, is a measure of the variation
                        in texture values within the area of a breast mass or tumor. This is
                        typically calculated as the standard error of the texture values
                        within the region of interest."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="texture_se"
                      className="form-control"
                      name="texture_se"
                      value={textureSe}
                      placeholder="Texture SE"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="perimeter_se"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Perimeter SE:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#perimeter_se"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Perimeter SE"
                        data-bs-content="In breast cancer, Perimeter SE refers to the standard error of the
                        measurements of the perimeter of cell nuclei. It is an indication of
                        the variability or precision of the measurements."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="perimeter_se"
                      className="form-control"
                      name="perimeter_se"
                      value={perimeterSe}
                      placeholder="Perimeter SE"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label htmlFor="area_se" className="mb-1 font-semi-bold d-flex justify-content-between">
                      Area SE:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#area_se"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Area SE"
                        data-bs-content="In breast cancer, Area SE refers to the standard error of the mean
                        of the cross-sectional area of the cells detected in a biopsy. "
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="area_se"
                      className="form-control"
                      name="area_se"
                      value={areaSe}
                      placeholder="Area SE"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="smoothness_se"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Smoothness SE:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#smoothness_se"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Smoothness SE"
                        data-bs-content="Smoothness SE in breast cancer refers to the standard error of the
                        mean of the smoothness values for the cells in a breast cancer
                        sample."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="smoothness_se"
                      className="form-control"
                      name="smoothness_se"
                      value={smoothnessSe}
                      placeholder="Smoothness SE"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="compactness_se"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Compactness SE:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#compactness_se"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Compactness SE"
                        data-bs-content="In breast cancer, Compactness SE refers to the standard error of the
                        mean of the distribution of the local variation in shape of the cell
                        nuclei. It represents the smoothness of the boundary of the cell
                        nucleus."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="compactness_se"
                      className="form-control"
                      name="compactness_se"
                      value={compactnessSe}
                      placeholder="Compactness SE"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="concavity_se"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Concavity SE:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#concavity_se"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Concavity SE"
                        data-bs-content="In breast cancer analysis, Concavity SE refers to the standard
                        error of the mean for the severity of concavity in cell nuclei."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="concavity_se"
                      className="form-control"
                      name="concavity_se"
                      value={concavitySe}
                      placeholder="Concavity SE"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="concave_points_se"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Concave Points SE:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#concave_points_se"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Concave Points SE"
                        data-bs-content="In breast cancer, the Concave Points SE refers to the standard error
                        of the mean for the local concavity of the contour lines detected in
                        the grayscale image of a fine needle aspirate (FNA) of a breast
                        mass."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="concave_points_se"
                      className="form-control"
                      name="concave_points_se"
                      value={concavePointsSe}
                      placeholder="Concave Points SE"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="symmetry_se"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Symmetry SE:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#symmetry_se"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Symmetry SE"
                        data-bs-content="Symmetry SE (Standard Error) is a measure of the variation of the
                        symmetry values of cells in a biopsy sample. A higher value
                        indicates greater variation in the symmetry of the cells."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="symmetry_se"
                      className="form-control"
                      name="symmetry_se"
                      value={symmetrySe}
                      placeholder="Symmetry SE"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="fractal_dimension_se"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Fractal Dimension SE:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#fractal_dimention_se"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Fractal Dimension SE"
                        data-bs-content="Fractal dimension SE refers to the standard error of the mean of the
                        fractal dimension feature, which is a measure of the complexity of
                        the tumor. The fractal dimension is a mathematical concept that
                        characterizes the degree of self-similarity of a complex structure."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="fractal_dimension_se"
                      className="form-control"
                      name="fractal_dimension_se"
                      value={fractalDimensionSe}
                      placeholder="Fractal Dimension SE"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <hr className="my-4" />

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="radius_worst"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Radius Worst:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#radius_worst"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Radius Worst"
                        data-bs-content="Radius Worst refers to the largest value of the mean radius of a 
                        tumor's cells detected in breast cancer. It represents the largest 
                        distance from the center to the outer edge of the tumor. "
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="radius_worst"
                      className="form-control"
                      name="radius_worst"
                      value={radiusWorst}
                      placeholder="Radius Worst"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="texture_worst"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Texture Worst:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#texture_worst"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Texture Worst"
                        data-bs-content="Texture Worst in breast cancer refers to the standard deviation of 
                        gray-scale values in the texture of the worst-performing area of the tumor."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="texture_worst"
                      className="form-control"
                      name="texture_worst"
                      value={textureWorst}
                      placeholder="Texture Worst"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="perimeter_worst"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Perimeter Worst:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#perimeter_worst"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Perimeter Worst"
                        data-bs-content="Perimeter Worst in breast cancer refers to the largest perimeter
                        (circumference) of the tumor among all identified regions."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="perimeter_worst"
                      className="form-control"
                      name="perimeter_worst"
                      value={perimeterWorst}
                      placeholder="Perimeter Worst"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label htmlFor="area_worst" className="mb-1 font-semi-bold d-flex justify-content-between">
                      Area Worst:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#area_worst"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Area Worst"
                        data-bs-content="Area Worst in breast cancer refers to the largest area of the 
                        tumor among all identified regions. It represents the size of 
                        the tumor in terms of the total area it occupies. "
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="area_worst"
                      className="form-control"
                      name="area_worst"
                      value={areaWorst}
                      placeholder="Area Worst"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="smoothness_worst"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Smoothness Worst:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#smoothness_worst"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Smoothness Worst"
                        data-bs-content="Smoothness Worst in breast cancer refers to the variation in the 
                        local radius lengths of the tumor's contour. "
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="smoothness_worst"
                      className="form-control"
                      name="smoothness_worst"
                      value={smoothnessWorst}
                      placeholder="Smoothness Worst"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="compactness_worst"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Compactness Worst:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#compactness_worst"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Compactness Worst"
                        data-bs-content="Compactness Worst in breast cancer refers to the ratio of 
                        the perimeter squared to the area of the tumor mass. "
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="compactness_worst"
                      className="form-control"
                      name="compactness_worst"
                      value={compactnessWorst}
                      placeholder="Compactness Worst"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="concavity_worst"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Concavity Worst:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#concavity_worst"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Concavity Worst"
                        data-bs-content="Concavity Worst in breast cancer refers to the severity
                        of concave portions or depressions in the contour of the tumor mass."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="concavity_worst"
                      className="form-control"
                      name="concavity_worst"
                      value={concavityWorst}
                      placeholder="Concavity Worst"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="concave_points_worst"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Concave Points Worst:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#concave_points_worst"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Concave Points Worst"
                        data-bs-content="Concave Points Worst in breast cancer refers to the number of 
                        concave portions or points with the highest severity in the 
                        contour of the tumor mass."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="concave_points_worst"
                      className="form-control"
                      name="concave_points_worst"
                      value={concavePointsWorst}
                      placeholder="Concave Points Worst"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="symmetry_worst"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Symmetry Worst:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#symmetry_worst"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Symmetry Worst"
                        data-bs-content="Symmetry Worst in breast cancer refers to the symmetry or 
                        irregularity of the cells' shape and size in the worst or most 
                        severe area of the tumor mass."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="symmetry_worst"
                      className="form-control"
                      name="symmetry_worst"
                      value={symmetryWorst}
                      placeholder="Symmetry Worst"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="fractal_dimension_worst"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Fractal Dimension Worst:
                      <Link
                        className="mt-1 me-2"
                        to="/study/health-analysis/breast-cancer#fractal_dimension_worst"
                        target="_blank"
                        data-bs-animation="false"
                        data-bs-placement="top"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-title="Fractal Dimension Worst"
                        data-bs-content="Fractal Dimension Worst in breast cancer refers to a measure of 
                        the complexity and irregularity of the tumor mass at its worst or 
                        most severe area."
                        tabIndex="0"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="fractal_dimension_worst"
                      className="form-control"
                      name="fractal_dimension_worst"
                      value={fractalDimensionWorst}
                      placeholder="Fractal Dimension Worst"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                {isResultAvailable && (
                  <React.Fragment>
                    {result !== "Benign" ? (
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
                            <td>Radius Mean</td>
                            <td>{patientDetails.radius_mean}</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Texture Mean</td>
                            <td>{patientDetails.texture_mean}</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Perimeter Mean</td>
                            <td>{patientDetails.perimeter_mean}</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Area Mean</td>
                            <td>{patientDetails.area_mean}</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Smoothness Mean</td>
                            <td>{patientDetails.smoothness_mean}</td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>Compactness Mean</td>
                            <td>{patientDetails.compactness_mean}</td>
                          </tr>
                          <tr>
                            <th scope="row">7</th>
                            <td>Concavity Mean</td>
                            <td>{patientDetails.concavity_mean}</td>
                          </tr>
                          <tr>
                            <th scope="row">8</th>
                            <td>Concave Points Mean</td>
                            <td>{patientDetails.concave_points_mean}</td>
                          </tr>
                          <tr>
                            <th scope="row">9</th>
                            <td>Symmetry Mean</td>
                            <td>{patientDetails.symmetry_mean}</td>
                          </tr>
                          <tr>
                            <th scope="row">10</th>
                            <td>Fractal Dimension Mean</td>
                            <td>{patientDetails.fractal_dimension_mean}</td>
                          </tr>
                          <tr>
                            <th scope="row">11</th>
                            <td>Radius SE</td>
                            <td>{patientDetails.radius_se}</td>
                          </tr>
                          <tr>
                            <th scope="row">12</th>
                            <td>Texture SE</td>
                            <td>{patientDetails.texture_se}</td>
                          </tr>
                          <tr>
                            <th scope="row">13</th>
                            <td>Perimeter SE</td>
                            <td>{patientDetails.perimeter_se}</td>
                          </tr>
                          <tr>
                            <th scope="row">14</th>
                            <td>Area SE</td>
                            <td>{patientDetails.area_se}</td>
                          </tr>
                          <tr>
                            <th scope="row">15</th>
                            <td>Smoothness SE</td>
                            <td>{patientDetails.smoothness_se}</td>
                          </tr>
                          <tr>
                            <th scope="row">16</th>
                            <td>Compactness SE</td>
                            <td>{patientDetails.compactness_se}</td>
                          </tr>
                          <tr>
                            <th scope="row">17</th>
                            <td>Concavity SE</td>
                            <td>{patientDetails.concavity_se}</td>
                          </tr>
                          <tr>
                            <th scope="row">18</th>
                            <td>Concave Points SE</td>
                            <td>{patientDetails.concave_points_se}</td>
                          </tr>
                          <tr>
                            <th scope="row">19</th>
                            <td>Symmetry SE</td>
                            <td>{patientDetails.symmetry_se}</td>
                          </tr>
                          <tr>
                            <th scope="row">20</th>
                            <td>Fractal Dimension SE</td>
                            <td>{patientDetails.fractal_dimension_se}</td>
                          </tr>
                          <tr>
                            <th scope="row">21</th>
                            <td>Radius Worst</td>
                            <td>{patientDetails.radius_worst}</td>
                          </tr>
                          <tr>
                            <th scope="row">22</th>
                            <td>Texture Worst</td>
                            <td>{patientDetails.texture_worst}</td>
                          </tr>
                          <tr>
                            <th scope="row">23</th>
                            <td>Perimeter Worst</td>
                            <td>{patientDetails.perimeter_worst}</td>
                          </tr>
                          <tr>
                            <th scope="row">24</th>
                            <td>Area Worst</td>
                            <td>{patientDetails.area_worst}</td>
                          </tr>
                          <tr>
                            <th scope="row">25</th>
                            <td>Smoothness Worst</td>
                            <td>{patientDetails.smoothness_worst}</td>
                          </tr>
                          <tr>
                            <th scope="row">26</th>
                            <td>Compactness Worst</td>
                            <td>{patientDetails.compactness_worst}</td>
                          </tr>
                          <tr>
                            <th scope="row">27</th>
                            <td>Concavity Worst</td>
                            <td>{patientDetails.concavity_worst}</td>
                          </tr>
                          <tr>
                            <th scope="row">28</th>
                            <td>Concave Points Worst</td>
                            <td>{patientDetails.concave_points_worst}</td>
                          </tr>
                          <tr>
                            <th scope="row">29</th>
                            <td>Symmetry Worst</td>
                            <td>{patientDetails.symmetry_worst}</td>
                          </tr>
                          <tr>
                            <th scope="row">30</th>
                            <td>Fractal Dimension Worst</td>
                            <td>{patientDetails.fractal_dimension_worst}</td>
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
          Breast Cancer <span className="text-theme-red">Prediction</span>
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

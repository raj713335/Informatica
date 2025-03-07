import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ApiML from "../../../Api/ApiML.js";
import ScreenLoader from "../../common/ScreenLoader.jsx";

export default function SkinCancer() {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const [result, setResult] = useState("");
  const [isResultAvailable, setIsResultAvailable] = useState(false);
  const [showScreenLoader, setShowScreenLoader] = useState(false);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const resetForm = () => {
    setIsResultAvailable(false);
    setImage("");
    setImagePreview("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("file", image);

    setIsResultAvailable(false);
    setShowScreenLoader(true);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    await ApiML.post("/disease/skin_cancer", formData, config)
      .then((res) => {
        if (res.data) {
          setResult(res.data);
        } else {
          setResult("");
        }
        setIsResultAvailable(true);
        setShowScreenLoader(false);
      })
      .catch((err) => {
        setShowScreenLoader(false);
      });
  };

  const diseaseDetails = (result, description = null) => {
    let disease = {
      name: "",
      description: "Lorem Ipsum Dolor Sit Amet"
    };

    if (result === "Melanoma") {
      disease.name = "Melanoma";
    } else if (result === "Vascular lesion") {
      disease.name = "Vascular Lesion";
    } else {
      disease.name = "Unknown";
    }
    if (description !== null) {
      disease.description = description;
    }

    return (
      <React.Fragment>
        <h5 className="text-danger mb-0 font-semibold">Skin cancer type</h5>
        <h2 className="mt-0">{disease.name}</h2>
        <h4 className="mt-4 mb-0">Description:</h4>
        <p className="mt-0 text-muted">{disease.description}</p>
      </React.Fragment>
    );
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
                <i className="fa-solid fa-user-plus fa-fw"></i> Check for Skin Cancer
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                {!isResultAvailable && (
                  <div className="row">
                    <div className="col-md-6 offset-md-3">
                      {imagePreview && (
                        <img className="img-fluid" src={imagePreview} alt="" />
                      )}
                      <div className="my-2 d-grid gap-2">
                        <input
                          type="file"
                          name="file"
                          id="imageFile"
                          className="d-none"
                          onChange={(e) => handleImageUpload(e)}
                        />
                        {!imagePreview && (
                          <label
                            htmlFor="imageFile"
                            className="btn btn-primary my-5"
                            type="button"
                          >
                            Upload an Image
                          </label>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {isResultAvailable && (
                  <div className="row my-2">
                    <div className="col-md-5">
                      <img className="img-fluid" src={imagePreview} alt="" />
                    </div>
                    <div className="col-md-7">
                      {result && (
                        <React.Fragment>
                          {diseaseDetails(result, <><p>Treatment options for melanoma depend on the stage and location of the cancer but may include:</p>
                            <ol>
                              <li>
                                <strong>Surgical excision:</strong> The primary treatment for early-stage melanoma involves surgically removing the tumor and a margin of healthy skin around it.
                              </li>
                              <li>
                                <strong>Lymph node biopsy:</strong> If melanoma has spread or is at a high risk of spreading, nearby lymph nodes may be tested for the presence of cancer cells.
                              </li>
                              <li>
                                <strong>Immunotherapy:</strong> This treatment uses drugs to stimulate the immune system to recognize and destroy cancer cells.
                              </li>
                              <li>
                                <strong>Targeted therapy:</strong> Certain drugs target specific gene mutations or proteins present in melanoma cells to inhibit their growth.
                              </li>
                              <li>
                                <strong>Radiation therapy:</strong> It may be used in some cases to kill cancer cells or relieve symptoms.
                              </li>
                              <li>
                                <strong>Chemotherapy:</strong> While not as commonly used as in other types of cancer, chemotherapy drugs can be used to treat advanced melanoma that has spread to other organs.
                              </li>
                            </ol>
                          </>
                          )}
                        </React.Fragment>
                      )}
                      {!result && (
                        <div className="alert bg-faint-blue">
                          <div className="row">
                            <div className="col-1">
                              <h4 className="mt-0">
                                <i className="fa-solid fa-circle-check text-primary fa-lg fa-fw"></i>
                              </h4>
                            </div>
                            <div className="col-11">
                              <h4 className="mt-0">No disease detected!</h4>
                              <p className="text-muted">
                                Congratulations on your remarkable outcome!
                              </p>
                              <p className="text-muted mb-0">
                                Your commitment to self-care through regular
                                check-ups, exercise, and a balanced diet has
                                paid off tremendously.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={resetForm}>
                <i className="fa-regular fa-file fa-fw"></i> Reset
              </button>
              {imagePreview && (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleSubmit}
                >
                  <i className="fa-solid fa-magnifying-glass fa-fw"></i> Analyze
                </button>
              )}
              {/* {isResultAvailable ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={savePatientData}
                >
                  <i className="fa-solid fa-floppy-disk fa-fw"></i> Save Data
                </button>
              ) : (
              )} */}
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
          Skin <span className="text-theme-red">Cancer</span>
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
      </div>
    </React.Fragment>
  );
}

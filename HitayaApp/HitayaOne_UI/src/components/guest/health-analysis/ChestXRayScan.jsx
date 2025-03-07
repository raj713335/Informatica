import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ApiML from "../../../Api/ApiML.js";
import ScreenLoader from "../../common/ScreenLoader.jsx";

export default function ChestXRayScan() {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const [result, setResult] = useState([]);
  const [isResultAvailable, setIsResultAvailable] = useState(false);
  const [showScreenLoader, setShowScreenLoader] = useState(false);

  useEffect(() => {
    if (result.length) {
      displayDiseases(result);
    }

    setIsResultAvailable(true);

  }, [result]);

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

    await ApiML.post("/disease/chest_xray", formData, config)
      .then((res) => {
        if (res.data.length > 0) {
          setResult(res.data);
        } else {
          setResult([]);
        }

        setShowScreenLoader(false);
      })
      .catch((err) => {
        setShowScreenLoader(false);
      });
  };

  const displayDiseases = (resultData) => {
    let d = resultData.map((r, index) => {
      return (
        <div className="col-12 col-md-6" key={index}>
          <div className="card">
            <div className="card-body">
              <img className="img-fluid" src={r[0]} alt="" />
              <h5 className="mt-2">{r[5]}</h5>
            </div>
          </div>
        </div>
      );
    });

    return (
      <React.Fragment>
        <h4 className="mt-4">Disease Predicted as follows:</h4>
        <div className="row">{d}</div>
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
                    <div className="col-md-3">
                      <img className="img-fluid" src={imagePreview} alt="" />
                    </div>
                    <div className="col-md-9">
                      {result.length > 0 && (
                        <React.Fragment>
                          <img
                            className="img-fluid"
                            src={result[0][7]}
                            alt="detected-disease"
                          />
                          {displayDiseases(result)}
                        </React.Fragment>
                      )}
                      {!result.length && (
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
          Chest X-Ray <span className="text-theme-red">Scan</span>
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

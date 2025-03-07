import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PneumoniaXRayDetectorComponent() {
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  return (
    <React.Fragment>
      <div className="mt-3 container">
        <Link to="/health-analysis" className="mb-0 text-muted">
          <i className="fa-solid fa-arrow-left fa-fw"></i> Back to Health
          Analysis
        </Link>
        <h1 className="mt-2 font-bold">
          Pneumonia <span className="text-theme-red">X-Ray</span> Detector
        </h1>
        <div className="my-5 row">
          <div className="col-md-4 offset-md-4">
            {imagePreview && (
              <img className="img-fluid" src={imagePreview} alt="" />
            )}
            <div className="my-4 d-grid gap-2">
              <input
                type="file"
                name="file"
                id="imageFile"
                className="d-none"
                onChange={(e) => handleImageUpload(e)}
              />
              {!imagePreview ? (
                <label
                  htmlFor="imageFile"
                  className="btn btn-primary py-2"
                  type="button"
                >
                  Upload an Image
                </label>
              ) : (
                <React.Fragment>
                  <button className="btn btn-success">
                    <i className="fa-solid fa-magnifying-glass fa-fw"></i>{" "}
                    Analyze
                  </button>
                  <button className="btn btn-danger" onClick={removeImage}>
                    <i className="fa-solid fa-times fa-fw"></i> Remove
                  </button>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

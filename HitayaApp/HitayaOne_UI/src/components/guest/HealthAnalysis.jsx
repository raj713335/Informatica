import React from "react";

// import CardLink from "../common/card/CardLink.jsx";

import { Link, useLocation } from "react-router-dom";

import BREAST_CANCER from "../../assets/images/breast-cancer.png";
import CHRONIC_KIDNEY from "../../assets/images/chronic-kidney.png";
import DIABETES_PREDICTION from "../../assets/images/diabetes.png";
import HEART_DISEASE from "../../assets/images/heart.png";
import LIVER_DISEASE from "../../assets/images/liver.png";
import XRAY from "../../assets/images/x-ray.png";
import SKIN_CANCER from "../../assets/images/skin-cancer.png";
import PNEUMONIA_X_RAY from "../../assets/images/pneumonia-x-ray.png";

export default function HealthAnalysis() {
  const currentRoute = useLocation().pathname;
  const healthAnalysisCategory = [
    {
      img: BREAST_CANCER,
      title: "Breast Cancer Prediction",
      description:
        "Use ML to Predict the chances of Breast Cancer.",
      path: "/breast-cancer-prediction",
    },
    {
      img: CHRONIC_KIDNEY,
      title: "Chronic Kidney Disease",
      description:
        "Use ML to Predict the chances of Kidney Disease.",
      path: "/chronic-kidney-disease",
    },
    {
      img: DIABETES_PREDICTION,
      title: "Diabetic Prediction",
      description:
        "Use ML to Predict the chances of Diabetes.",
      path: "/diabetic-prediction",
    },
    {
      img: HEART_DISEASE,
      title: "Heart Disease",
      description:
        "Use ML to Predict the chances of Heart Disease.",
      path: "/heart-disease",
    },
    {
      img: LIVER_DISEASE,
      title: "Liver Disease",
      description:
        "Use ML to Predict the chances of Liver Disease.",
      path: "/liver-disease",
    },
    {
      img: XRAY,
      title: "Chest X-Ray Scan",
      description:
        "Use ML to Predict the chances of diease from Chest-Xray Scans.",
      path: "/chest-x-ray-scan",
    },
    {
      img: SKIN_CANCER,
      title: "Skin Cancer",
      description:
        "Use ML to Predict the chances of skin Cancer.",
      path: "/skin-cancer",
    },
    // {
    //   title: "Predict Heart Attack",
    //   description:
    //     "The major risk factors for heart disease include high blood pressure, raised blood cholesterol, diabetes, smoking and obesity.",
    //   path: "/heart-attack-risk-predictor",
    // },
    {
      img: PNEUMONIA_X_RAY,
      title: "Detect Pneumonia X-Ray",
      description:
        "Use ML to Predict the chances of Pneumonia from Chest-Xray.",
      path: "/pneumonia-x-ray-detector",
    },
  ];

  const displayHealthAnalysisCategories = () => {
    let healthAnalysisCategories = healthAnalysisCategory.map(
      (category, index) => {
        return (
          <div className="col-12 col-sm-6 col-lg-3" key={index}>
            <Link className="card card-link pt-4 pb-2 px-4" to={currentRoute + category.path}>
              {category.img && (
                <img
                  className="img-fluid mx-auto"
                  src={category.img}
                  style={{ maxWidth: "128px" }}
                  alt=""
                />
              )}
              <h4 className="mt-4">{category.title}</h4>
              <p className="text-muted">{category.description}</p>
              <p className="my-2 more-btn">
                Let's check <i className="fa-solid fa-arrow-right fa-fw"></i>
              </p>
            </Link>
          </div>
        );
      }
    );

    if (healthAnalysisCategory.length > 0) {
      return (
        <div className="row animated fadeInDown g-4">
          { healthAnalysisCategories }
        </div>
      );
    } else {
      return <div className="text-center">No categories found</div>;
    }
  };

  return (
    <React.Fragment>
      <div className="mt-4 mb-5 container">
        <h1 className="mb-5 font-bold">
          Health <span className="text-theme-red">Analysis</span>
        </h1>

        { displayHealthAnalysisCategories() }
      </div>
    </React.Fragment>
  );
}

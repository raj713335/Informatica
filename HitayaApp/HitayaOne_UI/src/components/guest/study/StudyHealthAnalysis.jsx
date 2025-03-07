import React from "react";
import { Link, useLocation } from "react-router-dom";
import CardLink from "../../common/card/CardLink.jsx";

export default function StudyHealthAnalysis() {
  const currentRoute = useLocation().pathname;
  const StudyhealthAnalysisCategory = [
    {
      title: "Breast Cancer",
      path: "/breast-cancer",
    },

    {
      title: "Diabetic Disease",
      path: "/diabetic-disease",
    },
    {
      title: "Chronic Kidney Disease",
      path: "/chronic-kidney-disease",
    },
    {
      title: "Heart Disease",
      path: "/heart-disease",
    },
    {
      title: "Liver Disease",
      path: "/liver-disease",
    },
    {
      title: "Heart Attack",
      path: "/heart-attack",
    },
    {
      title: "Pneumonia X-Ray",
      path: "/Pneumonia-x-ray",
    },
  ];
  const displayStudyHealthAnalysisCategories = () => {
    let studyhealthAnalysisCategories = StudyhealthAnalysisCategory.map(
      (category, index) => {
        return (
          <div className="col-12 col-sm-6 col-lg-3" key={index}>
            <CardLink
              to={currentRoute + category.path}
              title={category.title}
              btnText="Read more"
            />
          </div>
        );
      }
    );

    if (StudyhealthAnalysisCategory.length > 0) {
      return (
        <div className="row animated fadeInDown g-4">
          {studyhealthAnalysisCategories}
        </div>
      );
    } else {
      return <div className="text-center">No categories found</div>;
    }
  };

  return (
    <React.Fragment>
      <div className="mt-4 mb-5 container">
        <Link to="/study" className="mb-0 text-muted">
          <i className="fa-solid fa-arrow-left fa-fw"></i> Back to Study Base
        </Link>
        <h1 className="mb-5 font-bold">
          Study Health <span className="text-theme-red">Analysis</span>
        </h1>

        {displayStudyHealthAnalysisCategories()}
      </div>
    </React.Fragment>
  );
}

import React from "react";
import CardLink from "../common/card/CardLink";

export default function Study() {
  return (
    <div className="mt-4 mb-5 container">
      <h1 className="mb-5 font-bold">
        Study <span className="text-theme-red">Base</span>
      </h1>
      <div className="row animated fadeInDown">
        <div className="col-12 col-sm-6">
          <CardLink
            to="/study/health-analysis"
            title="DISEASE DICTIONARY"
            description="Learn about diseases, its existence, how it affects us and what are these values represent."
            btnText="Read Out"
          >
            <h1 className="mb-4">
              <i className="fa-solid fa-book fa-lg fa-fw"></i>
            </h1>
          </CardLink>
        </div>
        <div className="col-12 col-sm-6">
          <CardLink
            to="/study/precautions"
            title="PRECAUTIONS"
            description="Learn the healthy ways and how to treat your diseases, stay healthy and keep your body under control."
            btnText="Read Out"
          >
            <h1 className="mb-4">
              <i className="fa-solid fa-stethoscope fa-fw"></i>
            </h1>
          </CardLink>
        </div>
      </div>
    </div>
  );
}

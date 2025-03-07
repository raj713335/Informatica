import React from "react";
import { Link } from "react-router-dom";

import HeadImage from "../../assets/images/head-image.png";

export default function Home() {
  return (
    <React.Fragment>
      <div className="mt-4 mb-5 mt-sm-5 container">
        <div className="row mx-2 mx-sm-0">
          <div className="col-md-6 animated fadeInDown">
            <h1 className="mb-5 font-bold">
              Now, the noble aspiration
              <br />
              is <span className="text-theme-red">humanity.</span>
            </h1>
            <p>
              Traditionally, healthcare professionals relied on manual analysis
              of patient data, which could be time-consuming and prone to human
              error. However, with the advent of ML, large amounts of healthcare
              data can now be processed and analyzed efficiently.
            </p>
            <p>
              Machine Learning has been revolutionizing on healthcare domain. ML
              models can now detect patterns that depicts an underlying
              diseases.
            </p>
            <br />
            <Link className="btn btn-primary btn-lg" to="/health-analysis">
              Health Analysis <i className="fa-solid fa-arrow-right fa-fw"></i>
            </Link>
            &nbsp;&nbsp;
            <Link className="btn btn-success btn-lg" to="/study">
              <i className="fa-solid fa-book fa-fw"></i> Knowledge Base
            </Link>
          </div>
          <div className="col-md-6 animated fadeInLeft">
            <img className="img-fluid" src={HeadImage} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

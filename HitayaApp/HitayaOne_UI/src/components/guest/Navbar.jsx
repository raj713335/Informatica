import { Link, useLocation } from "react-router-dom";
import LOGO from "../../assets/images/logo512.png";

export default function Navbar() {
  const location = useLocation().pathname;

  return (
    <nav className="navbar bg-body-tertiary navbar-expand-md sticky-top">
      <Link className="navbar-brand ms-2 ms-md-0" to="/">
        <img
          src={LOGO}
          style={{ width: "32px", marginRight: "4px" }}
          alt="logo"
        />
        {process.env.REACT_APP_NAME}
      </Link>
      <span
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <i className="fa-solid fa-bars fa-lg fa-fw"></i>
      </span>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            {process.env.REACT_APP_NAME}
          </h5>
          <button
            type="button"
            className="btn-close-offcanvas"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fa-solid fa-times fa-fw"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            {/* <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-vial-circle-check fa-fw"></i> Health
                Analysis
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="health-analysis/heart-attack-risk-predictor">
                    Heart Attack Risk Predictor
                  </Link>
                  <Link className="dropdown-item" to="health-analysis/pneumonia-x-ray-detector">
                    Pneumonia X Ray Detector
                  </Link>
                </li>
              </ul>
            </li> */}
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <Link
                className={`nav-link ${
                  (location === "/health-analysis" ||
                    location === "/health-analysis/diabetic-prediction" ||
                    location === "/health-analysis/breast-cancer-prediction" ||
                    location === "/health-analysis/chronic-kidney-disease" ||
                    location === "/health-analysis/heart-disease" ||
                    location === "/health-analysis/liver-disease" ||
                    location ===
                      "/health-analysis/heart-attack-risk-predictor" ||
                    location === "/health-analysis/pneumonia-x-ray-detector") &&
                  "active"
                }`}
                to="/health-analysis"
              >
                <i className="fa-solid fa-vial-circle-check fa-fw"></i> Health
                Analysis
              </Link>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <Link
                className={`nav-link ${location === "/study" && "active"}`}
                to="/study"
              >
                <i className="fa-solid fa-book fa-fw"></i> Study
              </Link>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <Link
                className={`nav-link ${location === "/about" && "active"}`}
                to="/about"
              >
                <i className="fa-solid fa-circle-info fa-fw"></i> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

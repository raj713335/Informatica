import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useStateContext } from "../context/ContextProvider.jsx";

import DividerLineWithText from "../components/common/DividerLineWithText.jsx";

import Api from "../Api/Api.js";

import BG_LOGIN from "../assets/images/vectors/bg-login.jpg";

export default function ViewRegister() {
  const navigate = useNavigate();
  const { setUser, setToken } = useStateContext();

  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [signupError, showSignupErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const fieldName = e.target.name;

    if (fieldName === "username") {
      setUsername(e.target.value);
    }

    if (fieldName === "userId") {
      setUserId(e.target.value);
    }

    if (fieldName === "password") {
      setPassword(e.target.value);
    }

    if (fieldName === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }

    showSignupErrorMessage("");
  };

  const isUsernameExist = (uname) => {
    const payload = {
      userName: uname,
    };

    axios
      .post(process.env.REACT_APP_API + "/user/checkUsername", payload)
      .then((response) => {
        return response.data.resp;
      })
      .catch((err) => {
        showSignupErrorMessage(
          "Username is not available! Select different username."
        );
      });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!username || !userId || !password || !confirmPassword) {
      showSignupErrorMessage("Empty fields!");
      return;
    }

    if (isUsernameExist(username)) {
      showSignupErrorMessage(
        "Username is not available! Select different username."
      );
      return;
    }

    if (password !== confirmPassword) {
      showSignupErrorMessage("Passwords do not match!");
      return;
    }

    const payload = {
      userName: username,
      userID: userId,
      password: password,
      confirmPassword: confirmPassword,
    };

    await axios
      .post(process.env.REACT_APP_API + "/user/signup", payload)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => showSignupErrorMessage(true));

    return;
  };

  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_API}/user/login/authGoogle`, "_self");
  };

  return (
    <Fragment>
      <div className="auth-bg"></div>
      <div className="row">
        <div className="d-none d-lg-block col-lg-4" style={{ zIndex: "1000" }}>
          <img src={BG_LOGIN} alt="Image" style={{ maxHeight: "100vh" }} />
        </div>
        <div
          className="col-11 col-sm-8 col-lg-8 mx-auto"
          style={{ zIndex: "1000" }}
        >
          <div className="mt-4 row">
            <div className="col-12 col-md-12 col-lg-6 mx-auto">
              <h3 className="font-bold mt-5 mb-0">CREATE ACCOUNT</h3>
              <p className="mt-0">
                Already have an account? <Link to="/login">Login here</Link>
              </p>

              <div className="mt-5 d-grid">
                <button className="btn btn-secondary py-3" onClick={googleAuth}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 186.69 190.5"
                    className="me-2 mb-1"
                  >
                    <g transform="translate(1184.583 765.171)">
                      <path
                        clip-path="none"
                        mask="none"
                        d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z"
                        fill="#4285f4"
                      />
                      <path
                        clip-path="none"
                        mask="none"
                        d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z"
                        fill="#34a853"
                      />
                      <path
                        clip-path="none"
                        mask="none"
                        d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z"
                        fill="#fbbc05"
                      />
                      <path
                        d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z"
                        fill="#ea4335"
                        clip-path="none"
                        mask="none"
                      />
                    </g>
                  </svg>
                  Sign up with Google
                </button>
              </div>

              <DividerLineWithText text="OR LOGIN WITH" />

              {signupError && (
                <p className="mt-2 text-center text-danger">{signupError}</p>
              )}

              <label className="font-semi-bold" htmlFor="username">
                Username:
              </label>
              <input
                id="username"
                type="text"
                className="mt-1 py-2 form-control"
                name="username"
                placeholder="Username"
                onChange={(e) => handleInputChange(e)}
              />

              <p class="my-2 text-danger p-small">Wrong username or password</p>

              <label className="mt-2 font-semi-bold" htmlFor="email">
                Email:
              </label>
              <input
                id="email"
                type="text"
                className="mt-1 py-2 form-control"
                name="userId"
                placeholder="Email address"
                onChange={(e) => handleInputChange(e)}
              />
              <p class="mt-2 mb-1 text-danger p-small">
                Enter correct email address
              </p>

              <div className="row g-3">
                <div className="col-6">
                  <label className="mt-3 font-semi-bold" htmlFor="password">
                    Password:
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="mt-1 py-2 form-control"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <div className="col-6">
                  <label
                    className="mt-3 font-semi-bold"
                    htmlFor="confirm-password"
                  >
                    Confirm Password:
                  </label>
                  <input
                    id="confirm-password"
                    type="password"
                    className="mt-1 py-2 form-control"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>

              <p class="my-2 text-danger p-small">Password doesn't match</p>

              <hr className="mt-4" />

              <p className="my-0 text-muted">
                By creating an account, you agree to our{" "}
                <Link to="/tc">Terms and Conditions</Link> and{" "}
                <Link to="/privacy-policy">Privacy Policy</Link>.
              </p>

              <hr />

              <div className="mt-4 d-grid">
                <button className="btn btn-primary py-3" onClick={onSubmit}>
                  <i className="fa-solid fa-user-plus fa-fw"></i> Create my
                  account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

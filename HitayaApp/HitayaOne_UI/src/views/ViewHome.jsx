import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useStateContext } from "../context/ContextProvider.jsx";
import Api from "../Api/Api.js";

import BG_LOGIN from "../assets/images/vectors/bg-login.jpg";

export default function ViewLogin() {
  const navigate = useNavigate();

  const { setUser, setToken } = useStateContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, showLoginErrorMessage] = useState(false);

  const handleInputChange = (e) => {
    const fieldName = e.target.name;

    if (fieldName === "username") {
      setUsername(e.target.value);
    }

    if (fieldName === "password") {
      setPassword(e.target.value);
    }

    showLoginErrorMessage(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      showLoginErrorMessage(true);
      return;
    }

    const payload = {
      userName: username,
      password: password,
    };

    await axios
      .post(process.env.REACT_APP_API + "/user/login", payload)
      .then((response) => {
        let userData = response.data;

        if (userData?.token) {
          setToken(userData.token);

          Api.get("/user/get-user-details").then((res) => {
            let userDetails = res.data.userDetails;

            setUser(userDetails);

            navigate("/dashboard");
            return;
          });
        }

        showLoginErrorMessage(true);
      })
      .catch((error) => showLoginErrorMessage(true));

    return;
  };

  return (
    <Fragment>
      <div className="auth-bg"></div>
      <div className="row">
        <div className="col-md-5" style={{ zIndex: "1000" }}>
          <img src={BG_LOGIN} alt="Image" style={{ maxHeight: "100vh" }} />
        </div>
        <div className="col-md-7" style={{ zIndex: "1000" }}>
          <div className="row mt-5 px-5">
            <div className="col-md-6">
              <h3 className="font-bold mt-5 mb-0">HOME</h3>
              <p className="mb-5">
                Don't have an account?{" "}
                <Link to="/register">Create account</Link>
              </p>

              <div className="d-grid">
                <button className="btn btn-secondary py-3">
                  <i className="fa-brands fa-google fa-fw"></i> Sign in with
                  Google
                </button>
              </div>
              <hr className="my-4" />
              {loginError && (
                <p className="text-center text-danger">
                  Wrong email or password
                </p>
              )}
              <label className="mt-2 font-semi-bold" htmlFor="username">
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
              <div className="mt-4 d-grid">
                <button className="btn btn-success py-3" onClick={onSubmit}>
                  <span className="font-semi-bold">Let me in</span>{" "}
                  <i className="fa-solid fa-arrow-right fa-fw"></i>
                </button>
              </div>
              <div className="my-4 text-center">
                <Link to="/forgot-password">Forgot password? Click here to reset it</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

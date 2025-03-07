import { Link } from "react-router-dom";
import Api from "../../Api/Api.js";
import React, { useEffect, useState } from "react";
import { useStateContext } from "./../../context/ContextProvider.jsx";

import NoDataFound from "../common/misc/NoPatientDataFound.jsx";

export default function Family() {
  const { user } = useStateContext();

  const [isLoading, setIsLoading] = useState(true);
  const [family, setFamily] = useState(null);

  const [relationType, setRelationType] = useState("");

  useEffect(() => {
    index();
  }, []);

  function index() {
    let userFamily = [];

    Api.get("/user/get-all-user-family")
      .then((response) => {
        userFamily = response.data.userFamilyDetails.map((member, index) => {
          return (
            <div className="col-1 col-sm-6 col-md-4" key={index}>
              <div className="card card-body">
                <p className="mb-0 text-muted">Relation type:</p>
                <h4 className="mt-0">{member.relationType}</h4>
              </div>
            </div>
          );
        });

        if (userFamily.length) {
          setIsLoading(false);
          setFamily(userFamily);
        } else {
          setIsLoading(false);
          setFamily(<NoDataFound />);
        }
      })
      .catch((error) => {
        alert(`error occured ${error}`);
      });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case "relationType":
        setRelationType(value);
        break;
      default:
        break;
    }
  }

  function addNewFamilyMember() {
    let payload = {
      relationType: relationType,
      relationUserId: user._id,
    };

    Api.post("/user/add-user-family", payload)
      .then(() => {
        index();
      })
      .catch((error) => {
        alert(error);
      });
  }

  function resetForm() {
    setRelationType("");
  }

  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="addNewFamilyModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                <i className="fa-solid fa-user-plus fa-fw"></i> Add new family
                member
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container mb-4">
                <div className="row">
                  <div className="col-md-4">
                    <label htmlFor="relation-type" className="font-semi-bold">
                      Relation type:
                    </label>
                    <input
                      id="relation-type"
                      className="mt-2 form-control"
                      type="text"
                      name="relationType"
                      placeholder="i.e. Daughter"
                      value={relationType}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={resetForm}>
                <i className="fa-regular fa-file fa-fw"></i> Reset
              </button>
              <button
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={addNewFamilyMember}
              >
                <i className="fa-regular fa-plus fa-fw"></i> Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 mb-5 container">
        <h3 className="mt-2 font-bold">
          My <span className="text-theme-red">Family</span>
          <span className="float-end">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#addNewFamilyModal"
              onClick={resetForm}
            >
              <i className="fa-solid fa-plus fa-fw"></i> Add new
            </button>
          </span>
        </h3>
        <div className="mt-4 row">
          {isLoading && <h6 className="text-center">...</h6>}
        </div>

        {!isLoading && (
          <div className="mb-5 row animated fadeInDown g-3">{family}</div>
        )}
      </div>
    </React.Fragment>
  );
}

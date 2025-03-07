import { Link } from "react-router-dom";
import Api from "../../Api/Api.js";
import React, { useEffect, useState } from "react";

import NoDataFound from "../common/misc/NoPatientDataFound.jsx";
import ApiML from "../../Api/ApiML.js";
import axios from "axios";

// this data is for informatica
const diet_plan_data = {
  content: {
    created: "1713331915",
    usage: {
      completion_tokens: "512",
      prompt_tokens: "44",
      total_tokens: "556",
    },
    model: "gpt-3.5-turbo-0125",
    id: "chatcmpl-9EsBf6laT6x1pd3Y0ihmOREhcP5qY",
    system_fingerprint: "fp_c2295e73ad",
    choices: {
      finish_reason: "length",
      index: "0",
      message: {
        role: "assistant",
        content:
          "<table className='table'><tr><th>Day</th><th>Breakfast</th><th>Snack</th><th>Lunch</th><th>Evening Snack</th><th>Dinner</th></tr><tr><td>1. Sunday</td><td><ul><li>Scrambled eggs with spinach and tomatoes</li><li>Whole grain toast</li><li>Unsweetened Greek yogurt</li></ul></td><td><ul><li>Handful of almonds</li></ul></td><td><ul><li>Grilled chicken breast</li><li>Quinoa salad with mixed vegetables</li><li>Steamed broccoli</li></ul></td><td><ul><li>Celery sticks with hummus</li></ul></td><td><ul><li>Baked salmon with lemon and herbs</li><li>Roasted Brussels sprouts</li><li>Brown rice</li></ul></td></tr><tr><td>2. Monday</td><td><ul><li>Oatmeal with sliced strawberries and almonds</li><li>Hard-boiled egg</li></ul></td><td><ul><li>Cottage cheese with cucumber slices</li></ul></td><td><ul><li>Turkey and avocado wrap with whole grain tortilla</li><li>Mixed green salad with vinaigrette dressing</li></ul></td><td><ul><li>Sugar-free yogurt</li></ul></td><td><ul><li>Stir-fried tofu with vegetables</li><li>Quinoa pilaf</li><li>Steamed asparagus</li></ul></td></tr><tr><td>3. Tuesday</td><td><ul><li>Whole grain cereal with almond milk</li><li>Sliced banana</li></ul></td><td><ul><li>Baby carrots with hummus</li></ul></td><td><ul><li>Grilled shrimp skewers</li><li>Brown rice</li><li>Steamed green beans</li></ul></td><td><ul><li>Apple slices with peanut butter</li></ul></td><td><ul><li>Baked chicken breast with herbs</li><li>Roasted sweet potatoes</li><li>Sauteed spinach</li></ul></td></tr><tr><td>4. Wednesday</td><td><ul><li>Whole wheat toast with avocado</li><li>Hard-boiled egg</li></ul></td><td><ul><li>String cheese</li></ul></td><td><ul><li>Grilled salmon</li><li>Quinoa salad with mixed vegetables</li><li>Steamed asparagus</li></ul></td><td><ul><li>Orange slices</li></ul></td><td><ul><li>Lean beef stir-fry with broccoli and bell peppers</li><li>Brown rice</li></ul></td></tr><tr><td>5. Thursday</td><td><ul><li>Greek yogurt with berries and nuts</li></ul></td><td><ul><li>Hard-boiled egg</li></ul></td><td><ul><li>Turkey and vegetable stir-fry</li><li>Brown rice noodles</li></ul></td><td><ul><li>Carrot sticks with hummus</li></ul></td><td><ul><li>Baked fish with lemon and herbs</li><li>Quinoa pilaf</li><li>Steamed broccoli</li></ul></td></tr><tr><td>6. Friday</td><td><ul><li>Vegetable omelette</li></ul></td><td><ul><li>Almonds</li></ul></td><td><ul><li>Grilled chicken Caesar salad</li></ul></td><td><ul><li>String cheese</li></ul></td><td><ul><li>Grilled tofu with teriyaki sauce</li><li>Brown rice</li><li>Stir-fried vegetables</li></ul></td></tr><tr><td>7. Saturday</td><td><ul><li>Whole grain pancakes with sugar-free syrup</li></ul></td><td><ul><li>Cottage cheese with pineapple chunks</li></ul></td><td><ul><li>Whole wheat wrap with turkey, lettuce, and tomato</li><li>Baby carrots with hummus</li></ul></td><td><ul><li>Sliced apple with peanut butter</li></ul></td><td><ul><li>Baked chicken thighs with herbs</li><li>Quinoa pilaf</li><li>Steamed green beans</li></ul></td></tr></table>",
      },
      logprobs: "",
    },
    object: "chat.completion",
  },
};

export default function DietPlans() {
  const [isLoading, setIsLoading] = useState(true);

  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [condition, setCondition] = useState("");

  const [isResultLoading, setIsResultLoading] = useState(false);
  const [isResultAvailable, setIsResultAvailable] = useState(false);
  const [result, setResult] = useState("");

  function handleInputChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case "weight":
        setWeight(value);
        break;
      case "age":
        setAge(value);
        break;
      case "condition":
        setCondition(value);
        break;
      default:
        break;
    }
  }

  function resetForm() {
    setIsResultAvailable(false);

    setWeight(0);
    setAge(0);
    setCondition("");
  }

  function sampleFill() {
    setIsResultAvailable(false);

    setWeight(62);
    setAge(30);
    setCondition("Diabetic");
  }

  function generateDietPlans() {
    if (isResultLoading) {
      return;
    }
    setIsResultLoading(true);
    setIsResultAvailable(false);

    const payload = {
      weight: weight,
      age: age,
      condition: condition,
    };
    // ApiML.post("/disease/diet_plans", payload).then((response) => {
    //   setResult(response.data.text);
    //   setIsResultLoading(false);
    //   setIsResultAvailable(true);
    // });

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION_BEARER_TOKEN}`,
    };
    axios
      .post(
        "https://usw5-cai.dm-us.informaticacloud.com/active-bpel/public/rt/lpeNWMV1DMIkCpkmMBB50L/Diet_Plan_Gen_AI",
        payload,
        { headers: headers }
      )
      .then((response) => {
        // setResult(response.data.text);
        setResult(response.data.content.choices.message.content);
        setIsResultLoading(false);
        setIsResultAvailable(true);
      });
    // setIsResultLoading(false);
    // setIsResultAvailable(true);
  }

  return (
    <React.Fragment>
      <div className="mt-4 mb-5 container">
        <h3 className="mt-2 font-bold">
          Diet <span className="text-theme-red">Plans</span>
        </h3>

        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="card card-body">
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="age" className="font-semi-bold">
                    Age (in years):
                  </label>
                  <input
                    id="age"
                    className="mt-2 form-control"
                    type="number"
                    name="age"
                    placeholder="i.e. 30"
                    value={age}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="weight" className="font-semi-bold">
                    Weight (in kg):
                  </label>
                  <input
                    id="weight"
                    className="mt-2 form-control"
                    type="number"
                    name="weight"
                    placeholder="i.e. 62"
                    value={weight}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="condition" className="font-semi-bold">
                    Condition:
                  </label>
                  <input
                    id="condition"
                    className="mt-2 form-control"
                    type="text"
                    name="condition"
                    placeholder="i.e. Diabetic"
                    value={condition}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
              <div className="mt-3 d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => resetForm()}
                >
                  <i className="fa-regular fa-file me-1"></i> Reset Form
                </button>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => sampleFill()}
                >
                  <i className="fa-solid fa-fill me-1"></i> Sample Fill
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => generateDietPlans()}
                >
                  <i className="fa-solid fa-wand-magic-sparkles"></i> Generate
                </button>
              </div>

              {isResultLoading && (
                <div className="mt-5 row text-center">
                  <div className="col-md-12">
                    <h4>Generating Healthy Recommendation...</h4>
                  </div>
                </div>
              )}

              {isResultAvailable && (
                <div className="mt-5 row">
                  <div className="col-md-12">
                    <h5>
                      Recommended Diet Plan for an Indidividual of age{" "}
                      <span className="text-primary">{age} years</span>, weighs around{" "}
                      <span className="text-primary">{weight} kg</span> having a
                      medical condition of{" "}
                      <span className="text-primary">{condition}</span> as
                      follows:
                    </h5>
                    <div
                      className="bg-faint-blue my-2 p-4"
                      dangerouslySetInnerHTML={{
                        __html: result,
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

import axios from "axios";

const ApiML = axios.create({
  baseURL: process.env.REACT_APP_ML_API,
});

// ApiML.defaults.baseURL = process.env.REACT_APP_ML_API;

// ApiML.defaults.headers = {
//   "Content-Type": "application/json",
//   "Accept": "application/json",
// };

//All request will wait 5 seconds before timeout
// ApiML.defaults.timeout = 5000;

// ApiML.defaults.withCredentials = true;

export default ApiML;

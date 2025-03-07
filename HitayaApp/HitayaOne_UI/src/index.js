import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "../src/assets/css/typography.css";
import "../src/assets/css/color.css";
import "../src/assets/css/navbar.css";
import "../src/assets/css/footer.css";
import "../src/assets/css/form.css";
import "../src/assets/css/buttons.css";
import "../src/assets/css/animations.css";
import "../src/assets/css/modal.css";
import "../src/assets/css/card.css";
import "../src/assets/css/background-colors.css";
import "../src/assets/css/miscellaneous.css";
// import "../src/assets/css/styles.css";

import { RouterProvider } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider.jsx";
import router from "./router.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);

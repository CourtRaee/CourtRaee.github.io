import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home/home.jsx";
import { RouterProvider, createHashRouter } from "react-router-dom";
import F1DriverResults from "./pages/f1/f1-driver-results";
import Serveasy from "./pages/serveasy/serveasy";
import Dialled from "./pages/dialled/dialled";
import Soc from "./pages/soc/soc";
import ScrollToTop from "../src/components/ScrollToTop";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Home />
      </>
    ),
  },
  {
    path: "/f1",
    element: (
      <>
        <ScrollToTop />
        <F1DriverResults />
      </>
    ),
  },
  {
    path: "/serveasy",
    element: (
      <>
        <ScrollToTop />
        <Serveasy />
      </>
    ),
  },
  {
    path: "/dialled",
    element: (
      <>
        <ScrollToTop />
        <Dialled />
      </>
    ),
  },
  {
    path: "/soc",
    element: (
      <>
        <ScrollToTop />
        <Soc />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

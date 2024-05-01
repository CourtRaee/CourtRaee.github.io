import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home/home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import F1DriverResults from "./pages/f1/f1-driver-results";
import Serveasy from "./pages/serveasy/serveasy";
import Dialled from "./pages/dialled/dialled";
import Soc from "./pages/soc/soc";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/f1",
    element: <F1DriverResults />,
  },
  {
    path: "/serveasy",
    element: <Serveasy />,
  },
  {
    path: "/dialled",
    element: <Dialled />,
  },
  {
    path: "/soc",
    element: <Soc />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

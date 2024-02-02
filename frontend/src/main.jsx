import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Navbar from "./components/Navbar/Navbar";
import FindASong from "./pages/FindASong/FindASong";
import NewSong from "./pages/NewSong/NewSong";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/newSong",
    element: (
      <>
        <Navbar />
        <NewSong />
      </>
    ),
  },
  {
    path: "/findASong",
    element: (
      <>
        <Navbar />
        <FindASong />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

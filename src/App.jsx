import React from "react";
import Layout from "./pages/Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import CreateGroup from "./components/CreateGroup";
import AllGroups from "./components/AllGroups";
import Contact from "./components/Contact";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="createGroup" element={<CreateGroup />} />
        <Route path="allGroups" element={<AllGroups />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import Loading from "./pages/Loading";
import Navbar from "./components/Navbar";

const App = () => {
  const { loading } = useSelector((state) => state.uiSlice);
  return (
    <div style={{ display: "flex" }}>
      {loading ? (
        <Routes>
          <Route path="/" Component={Loading} />{" "}
        </Routes>
      ) : (
        <>
          <Navbar />
          <div style={{ width: "100%", top: "80px", position: "absolute" }}>
            <Routes>
              <Route path="/" Component={Home} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
};

export default App;

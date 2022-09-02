import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducers/rootReducer";
import { createLogger } from "redux-logger";
import Cpu from "./Components/Cpu";
import Gpu from "./Components/Gpu";
import Hdd from "./Components/Hdd";
import Ssd from "./Components/Ssd";
import Ram from "./Components/Ram";
import Saved from "./Components/Saved";
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
const logger = createLogger({});
const store = createStore(rootReducer, applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <h1 className="Title">BenchMark</h1>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Cpu" element={<Cpu />} />
        <Route path="/Gpu" element={<Gpu />} />
        <Route path="/Ram" element={<Ram />} />
        <Route path="/Ssd" element={<Ssd />} />
        <Route path="/Hdd" element={<Hdd />} />
        <Route path="/Saved" element={<Saved />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

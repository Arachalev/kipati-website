import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/Landing/LandingPage";
import Create from "./components/pages/Create/Create";
import Pricing from "./components/pages/Pricing/Pricing"
import Profile from "./components/pages/Profile/Profile"
import Reminders from "./components/pages/Reminders/Reminders"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/kipati" element={<App/>} >
        <Route path="home" element={<LandingPage />} />
        <Route path="create-account" element={<Create />} />
        <Route path="pricing" element={<Pricing/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="reminders" element={<Reminders/>}/>

        </Route>        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

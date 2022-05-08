import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/UI/Header";
import HeaderLogged from "./components/UI/HeaderLogged";
import Footer from "./components/UI/Footer";

// import classes from "./App.module.css";
import './App.css'
// import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <div className='App'>
        {/* <Header /> */}
        {/* <HeaderLogged/> */}

        <Outlet />

        {/* <Footer/> */}
      </div>
    </Fragment>
  );
}

export default App;

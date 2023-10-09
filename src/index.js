import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage  from "./pages/home"
import ShowTeams from './pages/showTeams';
import TeamPage from './pages/Team';
import SeasonsPage from './pages/seasons';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
      <Routes>
        <Route path="/"  Component={HomePage} />
        <Route path="/teams" Component={ShowTeams} />
        <Route path="/teams/:teamName/season/:season" Component={SeasonsPage} />
        <Route path="/teams/:teamName" Component={TeamPage} />
      </Routes>
    </Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/notFound/NotFound';
import Contact from './components/contacts/Contact';
import Layouts from './components/layouts/Layouts';
import Home from './components/home/Home';
import Login from './components/login/Login';
import BoardOfDirectors from "./components/boardOfDirectors/BoardOfDirectors";
import TravelDestinations from "./components/travelDestinations/TravelDestinations";
import Festivals from "./components/festivals/Festivals";
import Embassies from "./components/embassies/Embassies";
import Members from "./components/tabs/Members";
import Gallery from "./components/tabs/Gallery";
import AboutBangladesh from "./components/tabs/AboutBangladesh";
import TourismNews from "./components/tabs/TourismNews";
import AllAirlines from "./components/allAirlines/AllAirlines";
import ForeinMinistry from './components/tabs/ForeinMinistry';
import MinistryInfo from './components/tabs/MinistryInfo';
import BangladeshMission from './components/tabs/BangladeshMission';
import BangladeshMap from './components/tabs/BangladeshMap';
import OurEvents from './components/home/OurEvents';


// import ManagementSolution from './ManagementSolution';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />}></Route>
        <Route path="our-events" element={<OurEvents />}></Route>

        <Route path="board-of-directors" element={<BoardOfDirectors />}></Route>
        <Route path="travel-destinations" element={<TravelDestinations />}></Route>
        <Route path="all-airlines" element={<AllAirlines />}></Route>
        <Route path="festivals" element={<Festivals />}></Route>
        <Route path="embassies" element={<Embassies />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        
        <Route path="gallery" element={<Gallery />}></Route>
        <Route path="forein-ministry" element={<ForeinMinistry />}></Route>
        <Route path="ministry-info" element={<MinistryInfo />}></Route>
        <Route path="bangladesh-mission" element={<BangladeshMission />}></Route>
        <Route path="bangladesh-map" element={<BangladeshMap />}></Route>
        <Route path="about-bangladesh" element={<AboutBangladesh />}></Route>
        <Route path="tourism-news" element={<TourismNews />}></Route>
        <Route path="members" element={<Members />}></Route>
        <Route path="login" element={<Login />}></Route>
        {/* <Route path="/management" element={<ManagementSolution />}> </Route> */}

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

  );
}

export default App;

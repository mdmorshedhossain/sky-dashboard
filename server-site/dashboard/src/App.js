import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/Dashboard';
import { Route, Routes } from 'react-router-dom';
import BannerImage from './Component/bannerImage/BannerImage';
import 'react-toastify/dist/ReactToastify.css';
import Welcome from './Component/welcome/Welcome';
import OurEvents from './Component/ourEvents/OurEvents';
import UpcommingEvents from './Component/upcommingEvents/UpcommingEvents';
import TourismNews from './Component/tourismNews/TourismNews';
import OurPartners from './Component/ourPartners/OurPartners';
import BoardOfDirectory from './Component/boardOfDirectory/BoardOfDirectory';
import AllAirlines from './Component/allAirlines/AllAirlines';
import EnquiryForms from './Component/enqueryForm/EnquiryForms';
import Gallery from './Component/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      {/* <Dashboard/> */}
      <Routes>
        <Route path='/' element={<Dashboard/>} >
          
        <Route index element={<BannerImage/>} />
          <Route path='dashboard/landing-page/banner-image' element={<BannerImage/>} />
          <Route path='dashboard/landing-page/welcome' element={<Welcome/>} />
          <Route path='dashboard/landing-page/our-events' element={<OurEvents/>} />
          <Route path='dashboard/landing-page/upcoming-events' element={<UpcommingEvents/>} />
          <Route path='dashboard/landing-page/tourism-news' element={<TourismNews/>} />
          <Route path='dashboard/landing-page/gallery' element={<Gallery/>}></Route>
          <Route path='dashboard/landing-page/our-partners' element={<OurPartners/>} />
          <Route path='dashboard/board-of-directory' element={<BoardOfDirectory/>} />
          <Route path='dashboard/all-airlines' element={<AllAirlines/>} />
          <Route path='dashboard/enquiry-form' element={<EnquiryForms/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

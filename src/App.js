import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import On from './component/On';
import Off from './component/Off';
import DetailsId from './component/Detailsid';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/on" element={<On />} />
        <Route path="/off" element={<Off />} />
        <Route path="/detailsid" element={<DetailsId />} />
       

      </Routes>
    </Router>
  );
};

 export default App;






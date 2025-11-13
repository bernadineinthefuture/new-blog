import React from 'react';
import Footer from '../common/Footer.jsx';
import Header from '../common/Header.jsx';
import { Outlet } from 'react-router';

function CommonLayout() {
  return <div>
    <Header />
    <Outlet />
    <Footer /> 
  </div>;
  
}

export default CommonLayout;
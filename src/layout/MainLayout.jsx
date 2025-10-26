import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import WhatsAppButton from '../Components/WhatsAppButton';
import AnalyticsTracker from '../Components/AnalyticsTracker';

function MainLayout() {
  return (
    <div>
        <Navbar/>
        <WhatsAppButton />
        <AnalyticsTracker/>
        <main>
            <Outlet />
        </main>
        <Footer/>
    </div>
  )
}

export default MainLayout
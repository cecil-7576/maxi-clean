import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

function AnalyticsTracker() {
    const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search + location.hash });
  }, [location]); 

  return null;
}

export default AnalyticsTracker;
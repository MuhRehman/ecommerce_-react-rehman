import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from '../utils/AppRoute';
import ScrollReveal from '../utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from "../Components/layout/LayoutDefault"

// Views 
import HOME2 from "../views/Home";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const Home = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={()=><LayoutDefault><HOME2/></LayoutDefault>}

 />
  );
}


export default Home;
import './App.scss';
import { Routes, Route } from 'react-router-dom'
// import Layout from './components/Layout'
// import LayoutMobile from './components/LayoutMobile'
import { Desktop } from './components/desktop.component'
import { Mobile } from './components/mobile.component'
import { useMediaQuery } from 'react-responsive'
import React, { useState, useEffect } from 'react'

function App() {

  // const [width, setWindowWidth] = useState(0);

  // useEffect(() => {

  //   updateDimensions();

  //   window.addEventListener('resize', updateDimensions);
  //   return () =>
  //     window.removeEventListener('resize', updateDimensions);
  // }, [])

  // const updateDimensions = () => {
  //   const width = window.innerWidth
  //   setWindowWidth(width)
  // }

  
  // const responsive = {
  //   isDesktop: width > 780
  // }
  // // console.log(responsive.isDesktop);
  
  // if(responsive.isDesktop){
  //   return <Desktop />;
  // }else{
  //   return <Mobile />;
  // }

  return <Desktop />;
  
}

export default App;

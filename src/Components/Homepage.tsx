import Nav from './Nav'
import SocialsBar from './SocialsBar'
import Content from './Content'
import LogoLoader from "./logoLoader/LogoLoader"
import { useState, useEffect } from 'react'
import ReactGA from 'react-ga';


function Homepage() {
  
  useEffect(() => {
    ReactGA.initialize(import.meta.env.VITE_trackingKey);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);


  const [disp, setDisp] = useState(false);
  return (
    disp ?
      <>
        <Nav />
        <SocialsBar />
        <Content />
      </>
      :
      <LogoLoader setDisp={setDisp} />
  )
}

export default Homepage;
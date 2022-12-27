import Nav from './Nav'
import SocialsBar from './SocialsBar'
import Content from './Content'
import LogoLoader from "./logoLoader/LogoLoader"
import { useState } from 'react'

function Homepage() {
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
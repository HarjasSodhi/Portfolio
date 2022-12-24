import './App.css'
import Nav from './Components/Nav'
import SocialsBar from './Components/SocialsBar'
import Content from './Components/Content'

function App() {

  return (
    <>
      <Nav />
      <SocialsBar />
      <Content />
      {/* <MarkdownPreview source={m} warpperElement={{ "data-color-mode": "dark" }} /> */}
    </>
  )
}

export default App
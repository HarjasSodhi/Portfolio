import Homepage from './Components/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './Components/Blog'
import NotFound404 from './Components/NotFound404'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='blog/:name' element={<Blog />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
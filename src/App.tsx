import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutPage from './components/pages/AboutPage/AboutPage'
import VideoPage from './components/pages/VideoPage/VideoPage'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<VideoPage />}/>
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
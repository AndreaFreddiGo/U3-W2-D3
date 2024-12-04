import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/custom-bootstrap.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import NetflixNavbar from './components/NetflixNavbar'
import TvShows from './pages/TvShows'
import MovieDetails from './pages/MovieDetails'

function App() {
  return (
    <BrowserRouter>
      <header>
        <NetflixNavbar />
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/TvShows" element={<TvShows />} />
        <Route path="/MovieDetails/:movieId" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

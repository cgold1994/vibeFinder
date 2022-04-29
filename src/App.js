import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import VibePage from './pages/VibePage'
import PlaylistPage from './pages/PlaylistPage'
import HomePage from './pages/HomePage'
import './App.css';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/playlist" element={<PlaylistPage/>} />
        <Route path="/findvibe" element={<VibePage/>}  />
      </Routes>
    </div>
  );
}

export default App;

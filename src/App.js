import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import VibePage from './pages/VibePage'
import PlaylistPage from './pages/PlaylistPage'
import HomePage from './pages/HomePage'
import Card from './components/Card'
import './App.css';


// const musicData = {
//   Happy: [
//     {song: "I feel It Coming", artist: "The Weeknd" },
//     {song: "Adore You", artist: "Harry Styles" },
//     {song: "Ballin", artist: "DJ Mustard ft. Roddy Ricch" },
//     {song: "Ginger", artist: "WizKid ft. Burna Boy" },
//     {song : "", artist: "" },

//   ],
//   Chill: [
//     {song: "Free Mind", artist: "Tems" },
//     {song: "ZTFO", artist: "Big Sean" },
//     {song: "Blessed", artist: "WizKid ft. Damian Marley" },
//     {song: "Good Days", artist: "SZA" },
//     {song: "Blast Off", artist: "Silk Sonic" },
//   ],
//   Sad: [
//     {song: "After the Storm", artist: "Kali Uchis ft Tyler the Creator,Bootsy Collins" },
//     {song: "Cranes in The Sky", artist: "Solange" },
//     {song: "Born Tired", artist: "Jhene Aiko" },
//     {song: "Pink and White", artist: "Frank Ocean ft. Beyonce" },
//     {song: "Piece of Mind", artist: "Kehlani" },
//   ],
//   Mad: [
//     { song: "Don't Hurt Yourself", artist: "Beyonce" },
//     {song: "Black Skinhead", artist: "Kanye West" },
//     {song: "0-100", artist: "Drake" },
//     {song: "Smack a B*tch", artist: "Rico Nasty" },
//     {song: "I Hate U", artist: "SZA" },
//   ]
// }

function App() {
  return (
    <div className="App">
      <Card/>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/findvibe" element={<VibePage/>}  />
        <Route path="/playlist" element={<PlaylistPage/>} />
      </Routes>
    </div>
  );
}

export default App;

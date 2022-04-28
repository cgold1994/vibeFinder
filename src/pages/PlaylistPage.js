// import Card from './components/Card'
import {useState} from 'react'

const dataList = {
    Loved: [
      {song: "Someone Like You", artist: "Snoh Alegra" },
      {song: "I Don't Do Drugs", artist: "Doja Cat ft. Ariana Grande" },
      {song: "Get You", artist: "Daniel Caesar ft Kali Uchis " },
      {song: "Feels", artist: "Kehlani" },
      {song : "More Than Enough", artist: "Alina Baraz" },
      {song : "CPR", artist: "Summer Walker" },
      {song : "True Love", artist: "Wizkid ft. Tay Iwar,Projexx" },
      {song : "I Belong to You", artist: "Sabrina Claudio ft. 6LACK" },
  
    ],
    Focused: [
      {song: "family ties", artist: "Baby Keem ft. Kendrick Lamar" },
      {song: "Ambition For Cash", artist: "Key Glock" },
      {song: "Nonstop", artist: "Drake" },
      {song: "APESH*T", artist: "The Carters" },
      {song: "ZTFO", artist: "Big Sean" },
      {song: "Chun-Li", artist: "Nicki Minaj" },
      {song: "Where the Bag At", artist: "City Girls" },
      {song: "Wants and Needs", artist: "Drake ft Lil Baby" },
    ],
    Untouchable: [
      {song: "No Love", artist: "Summer Walker ft SZA" },
      {song: "MOOD 4EVA", artist: "Beyonce ft JayZ" },
      {song: "Megan's Piano", artist: "Megan Thee Stallion" },
      {song: "Shen Yeng Anthem", artist: "Shenseea" },
      {song: "Do it", artist: "Chloe x Halle" },
      {song: "Needed Me", artist: "Rihanna" },
      {song: "Icey", artist: "Melii" },
      {song: "Material Girl", artist: "Saucy Santana" },
    ],
    Emotional: [
        {song: "Stll Your Best", artist: "Giveon" },
        {song: "Triggered", artist: "Jhene Aiko" },
        {song: "If", artist: "Destiny's Child" },
        {song: "Resentment", artist: "Beyonce" },
        {song: "Girl Like Me", artist: "Jazmine Sullivan" },
        {song: "Same ol Song", artist: "The Weeknd" },
        {song: "Over", artist: "Lucky Dave" },
        {song: "Karma", artist: "Queen Naija" }
      ]
}    


let dataBaseList = Object.keys(dataList)


function PlaylistPage() {
    const [selectMood, setSelectMood] = useState("Loved")

    function clickEventHandler(mood) {
        setSelectMood(mood)
    }

    return(
        <div className ="playlist">
         <h1>Ready Playlists</h1> 
         <h3>Click a mood to explore some extra playlists</h3>
         <div>
             {dataBaseList.map(function (mood) {
                 return (
                     <button key={mood} onClick={() => clickEventHandler(mood)}>
                         {mood}
                     </button>
                 )
             })}
         </div>
         <hr />
         <ul>
             {dataList[selectMood].map(function (music) {
                 return (
                     <li className="play" key={music.song}>
                         <div className="list">{music.song}</div>
                         <div>{music.artist}</div>
                     </li>
                 )
             })}
         </ul>
        </div>
    )
}

export default PlaylistPage
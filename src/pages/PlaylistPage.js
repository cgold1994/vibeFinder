import {useState} from 'react'

const dataList = {

    Happy: [
        {description:"You can barely contain your smile and your feet won't stop moving. Dance it out !"},
        {song: "I feel It Coming", artist: "The Weeknd" },
        {song: "Slide", artist: "Calvin Harris ft Frank Ocean, Migos" },
        {song: "Ballin", artist: "DJ Mustard ft. Roddy Ricch" },
        {song: "Ginger", artist: "WizKid ft. Burna Boy" },
        {song : "New Apartment", artist: "Ari Lennox" },
        {song: "Work", artist: "Rihanna"},
        {song: "September", artist: "Earth,Wind and Fire"},
        {song: "Kiss Me More", artist:"Doja Cat ft SZA"}
        
    ],
    Loved: [
        {description: "A special someone has you glowing in and out. These melodies will nurture your love"},
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
        {description: " Whether it's working out or on the grind, you need these songs to keep you going"},
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
        {description: "Nothing and no one in this world can bring you down. If you're geting ready for a night out this is perfect for you "},
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
        {description: "If your toxic trait is listening to sad music while you're sad, these might take you deeper"},
        {song: "Stll Your Best", artist: "Giveon" },
        {song: "Triggered", artist: "Jhene Aiko" },
        {song: "If", artist: "Destiny's Child" },
        {song: "Resentment", artist: "Beyonce" },
        {song: "Girl Like Me", artist: "Jazmine Sullivan" },
        {song: "Same ol Song", artist: "The Weeknd" },
        {song: "Over", artist: "Lucky Dave" },
        {song: "Karma", artist: "Queen Naija" }
    ],
    Chill: [
        {description: "Relaxed, Cool as a cucumber with not a care in the world describes you."},
        {song: "Free Mind", artist: "Tems" },
        {song: "ZTFO", artist: "Big Sean" },
        {song: "Blessed", artist: "WizKid ft. Damian Marley" },
        {song: "Good Days", artist: "SZA" },
        {song: "Blast Off", artist: "Silk Sonic" },
        {song: "Peaches", artist: "Justin Bieber ft Giveon, Daniel Caesar"},
        {song:"Passionfruit", artist: "Drake"}
    ],
    Mad: [
        {description: "Sometimes you just want to scream at the world. Blast these songs to let it all out !"},
        {song: "Don't Hurt Yourself", artist: "Beyonce" },
        {song: "Black Skinhead", artist: "Kanye West" },
        {song: "0-100", artist: "Drake" },
        {song: "Smack a B*tch", artist: "Rico Nasty" },
        {song: "I Hate U", artist: "SZA" },
        {song:"Smells Like Teen Spirit" , artist: "Nirvana"},
        {song: "I Hate You Much Right Now", artist: "Kelis"}
    ],
    Sad: [
        {description:"Life's got you down but lets boost that mood of yours. Always remember, it gets better. "},
        {song: "After the Storm", artist: "Kali Uchis ft Tyler the Creator,Bootsy Collins" },
        {song: "Cranes in The Sky", artist: "Solange" },
        {song: "Born Tired", artist: "Jhene Aiko" },
        {song: "Pink and White", artist: "Frank Ocean ft. Beyonce" },
        {song: "Piece of Mind", artist: "Kehlani" },
        {song:"Normal Girl", artist: "SZA"},
        {song:"Tears Dry on their Own", artist: "Amy Winehouse"}
          ],
}    


let dataBaseList = Object.keys(dataList)
console.log(Object.keys(dataList))



function PlaylistPage() {
    const [selectMood, setSelectMood] = useState("Loved")

    function clickEventHandler(mood) {
        setSelectMood(mood)
    }

    return(
        <div className ="playlist">
         <h1>Ready Playlists</h1> 
         <h3>Click a mood to explore some playlists</h3>
         <div>
             {dataBaseList.map(function (mood) {
                //  console.log(mood)
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
                //  console.log(music)
                 return (
                     <li className="play" key={music.song}>
                         <div>{music.description}</div>
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
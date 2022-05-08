import {useState} from 'react'


const dataList = {

    Happy: [
        {description:"You can barely contain your smile and your feet won't stop moving. Dance it out !"},
        {video :<iframe id='AmazonMusicEmbedf53e1405a8134543ba224fa16e967a18sune' src='https://music.amazon.com/embed/f53e1405a8134543ba224fa16e967a18sune/?id=JhLW9IbPG6&marketplaceId=ATVPDKIKX0DER&musicTerritory=US' width='50%' height='550px'></iframe>},
        
        
    ],
    Loved: [
      {description: "A special someone has you glowing in and out. These melodies will nurture your love"},
      {video :<iframe id='AmazonMusicEmbedf79e21ef603b4767a428ab00329c51cesune' src='https://music.amazon.com/embed/f79e21ef603b4767a428ab00329c51cesune/?id=HK2EGFVuFD&marketplaceId=ATVPDKIKX0DER&musicTerritory=US' width='50%' height='550px'></iframe> },
  
    ],
    Focused: [
        {description: " Whether it's working out or on the grind, you need these songs to keep you going"},
        {video:<iframe id='AmazonMusicEmbeda52786b0a7be4480b7a8347c926a2a8esune' src='https://music.amazon.com/embed/a52786b0a7be4480b7a8347c926a2a8esune/?id=kWgCnHmc6H&marketplaceId=ATVPDKIKX0DER&musicTerritory=US' width='50%' height='550px'></iframe> },
    //   {song: "family ties", artist: "Baby Keem ft. Kendrick Lamar" },
    //   {song: "Ambition For Cash", artist: "Key Glock" },
    //   {song: "Nonstop", artist: "Drake" },
    //   {song: "APESH*T", artist: "The Carters" },
    //   {song: "ZTFO", artist: "Big Sean" },
    //   {song: "Chun-Li", artist: "Nicki Minaj" },
    //   {song: "Where the Bag At", artist: "City Girls" },
    //   {song: "Wants and Needs", artist: "Drake ft Lil Baby" },
    ],
    Untouchable: [
        {description: "Nothing and no one in this world can bring you down. If you're geting ready for a night out this is perfect for you "},
        {video:<iframe id='AmazonMusicEmbed3498d9564cda4aa08a9cee22c506aa66sune' src='https://music.amazon.com/embed/3498d9564cda4aa08a9cee22c506aa66sune/?id=UOjWHEfZA2&marketplaceId=ATVPDKIKX0DER&musicTerritory=US' width='50%' height='550px'></iframe> },
    //   {song: "No Love", artist: "Summer Walker ft SZA" },
    //   {song: "MOOD 4EVA", artist: "Beyonce ft JayZ" },
    //   {song: "Megan's Piano", artist: "Megan Thee Stallion" },
    //   {song: "Shen Yeng Anthem", artist: "Shenseea" },
    //   {song: "Do it", artist: "Chloe x Halle" },
    //   {song: "Needed Me", artist: "Rihanna" },
    //   {song: "Icey", artist: "Melii" },
    //   {song: "Material Girl", artist: "Saucy Santana" },
    ],
    Emotional: [
        {description: "If your toxic trait is listening to sad music while you're sad, these might take you deeper"},
        {video:<iframe id='AmazonMusicEmbed02228ef7a02b47c68b428db6a43b27eesune' src='https://music.amazon.com/embed/02228ef7a02b47c68b428db6a43b27eesune/?id=1TlVz6qQvG&marketplaceId=ATVPDKIKX0DER&musicTerritory=US' width='50%' height='550px'></iframe>},
        // {song: "Stll Your Best", artist: "Giveon" },
        // {song: "Triggered", artist: "Jhene Aiko" },
        // {song: "If", artist: "Destiny's Child" },
        // {song: "Resentment", artist: "Beyonce" },
        // {song: "Girl Like Me", artist: "Jazmine Sullivan" },
        // {song: "Same ol Song", artist: "The Weeknd" },
        // {song: "Over", artist: "Lucky Dave" },
        // {song: "Karma", artist: "Queen Naija" }
    ],
    Chill: [
        {description: "Relaxed, Cool as a cucumber with not a care in the world describes you."},
        {video:<iframe id='AmazonMusicEmbeda5c72ae8a9244db5a3e0a9cf8d3fafb5sune' src='https://music.amazon.com/embed/a5c72ae8a9244db5a3e0a9cf8d3fafb5sune/?id=vTRDgPi86s&marketplaceId=ATVPDKIKX0DER&musicTerritory=US' width='50%' height='550px'></iframe>},
        // {song: "Free Mind", artist: "Tems" },
        // {song: "ZTFO", artist: "Big Sean" },
        // {song: "Blessed", artist: "WizKid ft. Damian Marley" },
        // {song: "Good Days", artist: "SZA" },
        // {song: "Blast Off", artist: "Silk Sonic" },
        // {song: "Peaches", artist: "Justin Bieber ft Giveon, Daniel Caesar"},
        // {song:"Passionfruit", artist: "Drake"}
    ],
    Mad: [
        {description: "Sometimes you just want to scream at the world. Blast these songs to let it all out !"},
        {video:<iframe id='AmazonMusicEmbed0a79a14e1e0c41d58484228ee5754f45sune' src='https://music.amazon.com/embed/0a79a14e1e0c41d58484228ee5754f45sune/?id=ClKdZqM3D8&marketplaceId=ATVPDKIKX0DER&musicTerritory=US' width='50%' height='550px'></iframe>},
        // {song: "Don't Hurt Yourself", artist: "Beyonce" },
        // {song: "Black Skinhead", artist: "Kanye West" },
        // {song: "0-100", artist: "Drake" },
        // {song: "Smack a B*tch", artist: "Rico Nasty" },
        // {song: "I Hate U", artist: "SZA" },
        // {song:"Smells Like Teen Spirit" , artist: "Nirvana"},
        // {song: "I Hate You Much Right Now", artist: "Kelis"}
    ],
    Sad: [
        {description:"Life's got you down but lets boost that mood of yours. Always remember, it gets better. "},
        {video:<iframe id='AmazonMusicEmbedaaa5ba3a287f489d80eb1cfaf6a86925sune' src='https://music.amazon.com/embed/aaa5ba3a287f489d80eb1cfaf6a86925sune/?id=EC9riEvmFp&marketplaceId=ATVPDKIKX0DER&musicTerritory=US' width='50%' height='550px'></iframe>},
        // {song: "After the Storm", artist: "Kali Uchis ft Tyler the Creator,Bootsy Collins" },
        // {song: "Cranes in The Sky", artist: "Solange" },
        // {song: "Born Tired", artist: "Jhene Aiko" },
        // {song: "Pink and White", artist: "Frank Ocean ft. Beyonce" },
        // {song: "Piece of Mind", artist: "Kehlani" },
        // {song:"Normal Girl", artist: "SZA"},
        // {song:"Tears Dry on their Own", artist: "Amy Winehouse"}
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
                         <div>{music.video}</div>
                     </li>
                 )
             })}
         </ul>
        </div>
    )
}

export default PlaylistPage
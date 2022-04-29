import Background from '../images/music.jpg'


const HomePage = () => {
    return(
        <div className = "home">
          <h1>Welcome to vibeFinder</h1>
            <img src={Background} alt={Background}/>
          <h3> Inspired by the love of curated music and finding the "perfect" song to fit the mood, 
           vibeFinder was created to recommend songs to add to your playlist.
          Click a link and lets get started !</h3>
        </div>
    )    
}    

export default HomePage
import { useState} from 'react'



const VibePage = () => {
    const [myGenre, setMyGenre] = useState("")
    const [myMood, setMyMood] =useState("")
    const [myBehavior, setMyBehavior]= useState("")

    const handleChange = (e) => {
        setMyGenre(e.target.value)
        setMyMood(e.target.value)
        setMyBehavior(e.target.value)
    }
    return(
        <div classname="vibe">
           <h1>Find a Vibe</h1>

           <h3>In order for us to curate a playlist , please fill out the form to better understand your frame of mind</h3>
            <form>
                <label>Enter your name :</label>
                <input type="text" />
            </form>
            <form>
                <label>Enter your E-mail address</label>
                <input type="email" />
            </form>
            <form>
                <label>Genre</label>
                <select value={myGenre} onChange={handleChange}>
                    <option value="Hip-Hop">Hip-Hop</option>
                    <option value="R and B">R and B</option>
                    <option value="Pop">Pop</option>
                    <option value="Rock">Rock</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Reggae/Soca">Reggae/Soca</option>
                    <option value="Dance">Dance</option>
                </select>
            </form>    
            <form>
                 <label>Mood that best describes you </label>
                <select value={myMood} onChange={handleChange}>
                    <option value="Energetic">Energetic</option>
                    <option value="Gloomy">Gloomy</option>
                    <option value="Confident">Confident</option>
                    <option value="Loved">Loved</option>
                    <option value="Peaceful">Peaceful</option>
                    <option value="Hopeful">Hopeful</option>
                    <option value="Renewed">Renewed</option>
                </select>
            </form>    
            <form>
                <label> What action are you currently doing ? </label>
                <select value={myBehavior} onChange={handleChange}>
                    <option value="smiling">Smiling</option>
                    <option value="crying">Crying</option>
                    <option value="Relaxing">Relaxing</option>
                    <option value="dancing">Dancing</option>
                    <option value="concentrating">Concentrating</option>
                    <option value="day-dreaming">Day-Dreaming</option>
                    <option value="cleaning">Cleaning</option>
                </select>
            </form>
            <button type="submit">Submit</button>
        </div>

    )
}

export default VibePage
import { useState } from "react"
import { Tweet } from "./components/Tweet"
import { AppRoutes } from "./Routes"

function App(){

  const [tweets, setTweets] = useState<string[]>([
    'Tweet',
  ])

  
  function addTweet(){
    let i = 0
    while(tweets[i]){
      setTweets([...tweets, `Tweet-${i}`])
      i++
    }
    
  }

  return(
    
    <div>
      <AppRoutes/>
      <h1>Hello Wolrd</h1>
      {
        tweets.map(tweets =>{
          return <Tweet text={tweets}/>
        })
      }

      <button onClick={addTweet}style={{
          backgroundColor:'#8257e6',
          border:0,
          padding: '6px 12px',
          color:'#fff'
        }}> Add Tweet </button>
    </div>
    
  )

}
export default App

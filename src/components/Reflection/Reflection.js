import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';


function Reflection() {
    const [data, setData] = useState("");
    const videoUrl = "https://www.youtube.com/watch?v=OlJY7IGLyFQ&list=PLpTzvCOJa7DAoMqHc4moKtTJSI6gsth32&index=7";
    const opts = {
        height: '600',
        width: '800',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };
    //TODO: implement when api is ready
    // useEffect(async () => {
    //     const result = await axios(
    //       '',
    //     );
    
    //     setData(result.data);
    //   });
    

    return(

        <YouTube
        videoId="OlJY7IGLyFQ"
        opts={opts}
        className="reflection-video"
        />



    )
}

export default Reflection;
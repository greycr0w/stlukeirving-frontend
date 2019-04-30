import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';


function Reflection() {
    const [data, setData] = useState("");
    const opts = {
        height: '600',
        width: '800',
        playerVars: { 
          autoplay: 0
        }
      };

    useEffect(() => {
        async function fetchData(){

          var result = await axios({ method: 'get',
            url: 'https://api.stlukeirving.org/reflection',
          })
          .then( (response) => {

              
              console.log(response.data)
              return response.data
              
          });


          setData(result);

        }
        fetchData()
        
      });
    

    return(

        <YouTube
        videoId={data || ""}
        opts={opts}
        className="reflection-video"
        />



    )
}

export default Reflection;
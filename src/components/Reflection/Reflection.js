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

        // <YouTube
        // videoId={data || ""}
        // opts={opts}
        // className="reflection-video"
        // />
        <div>
          <iframe src="https://widget.spreaker.com/player?episode_id=16218812&theme=light&autoplay=false&playlist=false&cover_image_url=https%3A%2F%2Fd3wo5wojvuv7l.cloudfront.net%2Fimages.spreaker.com%2Foriginal%2Ff4d9de61db8431c673c794ad2de8f0d9.jpg" width="100%" height="400px" frameborder="0"></iframe>
        </div>



    )
}

export default Reflection;
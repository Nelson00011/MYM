import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, CircularProgress} from "@mui/material";
import { shades } from "../theme";

function ImagePage() {
  const [item, setItem] = useState({});
  const [loadingItem, setLoadingItem] = useState(true);

  // const [day, setDay] = useState('Today')
  // const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", 'Saturday'];
 

  const API_KEY = `gUdhos3PY4O7IZ6pb7QnNwiVVa6EpfxZhRxJKPZ4`
  const URL = `https://api.nasa.gov/planetary/apod?api_key=`

  async function getItem() {
    setLoadingItem(true)
    const items = await fetch(
      URL+API_KEY ,
      { method: "GET" ,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (items.status === 504 || items.status === 401 ) {
      alert(`Alert Response Status: `, items.status)
      }
else{
    const itemsJSON = await items.json();
    console.log("itemJson", itemsJSON)
    await setItem(itemsJSON)
    setLoadingItem(false)
    }
}

  useEffect(() => {
    getItem();
  }, []); 

  useEffect(() => {
    setLoadingItem(false)
  }, [item])


    return (
      <Box width="80%" m="30px auto">
    
        <Typography>ASTRONOMY DAILY PHOTO</Typography>
          {loadingItem && <div>Loading..</div>}  
        
          <Box justifyContent="space-between"  m="30px auto">
                  
          {loadingItem && <CircularProgress />}
          {!loadingItem && <img
            alt={item.title}
            width="500px"
            height="300px"
            src={item.url} 
            style={{ cursor: "pointer",  borderColor: 'black', border: '10px' }}
          />}
          </Box>
          <Typography>{item.title}</Typography>
          <hr/>
          <Typography sx={{ mt: "20px" }}>
              {item.explanation}
            </Typography>
            <Box width="80%" m="30px auto">
            <Button
                onClick={() => {
                  window.open(`https://apod.nasa.gov/apod/astropix.html`)
                }}
                sx={{ backgroundColor: 'black', color: "white", borderRadius:0, minWidth: "125px", padding:"10px 50px" , '&:hover': {
                  color: 'black',
                  borderColor: 'black',
                  backgroundColor:  shades.secondary[300]
                }}}
              >
                Learn More
              </Button>
            </Box>
      </Box>
    );
  }
  
  export default ImagePage;
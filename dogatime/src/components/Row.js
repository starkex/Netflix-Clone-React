import React, {useState, useEffect} from 'react';
import axios from './axios';


function Row({title, fetchUrl}) {

    const [movies, setMovies] = useState([]);

useEffect(() => {
async function fetchData() {
const req = await axios.get(fetchUrl);
console.log(req);
   return req; 
   }
     fetchData();

   },[]);

    return (
        <div>
        <h2>{title}</h2>
            {/*title*/}
            {/**/}
            
        </div>
    )
}

export default Row

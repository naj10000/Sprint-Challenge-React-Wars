import React, {useState, useEffect} from "react";
import axios from "axios";
import CharacterCard from "./characterCard"

function CharacterData (){
    const [data , setData] = useState([])
    useEffect( () => {
      axios 
        .get('https://swapi.co/')
        .then(response => {
          console.log(response);
          setData(response.data)
          
        })
        .catch(error => {
          console.log(error);
        })
    }, []);
    return(
        <div>

        </div>

    )
}

export default CharacterData
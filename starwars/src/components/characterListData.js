import React, {useState, useEffect} from "react";
import axios from "axios";
import CharacterCard from "./characterCard";
import SearchForm from "./SearchForm";

function CharacterData (){
    const [data , setData] = useState([])
    useEffect( () => {
      axios 
        .get('https://swapi.co/api/people/')
        .then(response => {
          console.log(response.data.results);
          setData(response.data.results)
          
        })
        .catch(error => {
          console.log(error);
        })
    }, []);
    return(
        <div>
          <SearchForm data={data} />
            {data.map((item,index) =>
             (<CharacterCard data={item} key={index}/>))} 
        </div>

    )
}

export default CharacterData
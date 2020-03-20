import React, { useState, useEffect } from "react";
import axios from 'axios';



export default function SearchForm(props) {
 const [names, setNames] = useState([]);
 const [query, setQuery] = useState('');

 

const handleInputChange = event => {
  setQuery(event.target.value);
}

const characterS  = props.data.filter(character=>
    character.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    
    <section className="search-form">
     <form>
       <input
       type="text"
       onChange={handleInputChange}
       value={query}
       name="names"
       tabIndex="0"
       placeholder="search by name"
       autoComplete="off"
       
       />
     </form>
     
    </section>
  );
}
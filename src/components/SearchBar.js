import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import './SearchBar.css';
import { useFetchAutoSuggestionsQuery, useFetchSongsByArtistQuery } from "../store";
import { FetchSuggestion } from "./useFetchSuggestion";
import axios from "axios";
import { Button } from "bootstrap";
import SongList from "./SongList";

const SearchBar = () => {
   
    const [suggestions, setSuggestions] = useState([])
    const [term, setTerm] = useState('')
    const ref = useRef()
    const sug = useRef()
    const [shouldDisplay, setShouldDispaly] = useState(false)
    var id;
    const handleChange = (e) => {
        
        let URL = `https://api.jamendo.com/v3.0/autocomplete/?client_id=0db4c8f4&format=jsonpretty&limit=3&prefix=${e.target.value}&matchcount=1`
        clearTimeout(id)
        console.log(id)
        id = setTimeout(() => {
            axios.get(URL)
        .then(response => setSuggestions(response.data.results.tracks))
        .catch(error => console.log(error))
        .finally(()=>{
            sug.current.classList.remove('d-none')
        })
        },100)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        clearTimeout(id)
        sug.current.classList.add('d-none')
        setTerm(ref.current.value)
        setShouldDispaly(true)
        setSuggestions([])
    }

    const mapper = suggestions && suggestions.map(suggestion => {
        return (
            <div onClick={(e) => {
                setTerm(suggestion.match)
                ref.current.value = suggestion.match
                setSuggestions([])
                setShouldDispaly(true)
                sug.current.classList.add('d-none')
            }} style={{cursor:"pointer"}} className="row p-3">{suggestion.match}</div>
        );
    })
    return (
        <>
        <Container className="bg-dark">
            <form className="search-bar" onSubmit={handleSubmit}>
            <h4 className="text-light">Search for marc, dkz, m, saregama and more...</h4>
                <div className="input-group">
                    <input placeholder="What do you wanna listen?" ref={ref} type="text"  onChange={handleChange} className="form-control" />
                    <button className="btn btn-light submit">Search</button>
                </div>
                <div ref={sug} className="suggestions d-none">
                    {mapper}
                </div>
            </form>
        </Container>
        <div className="list">
            {
               shouldDisplay && <SongList artist = {term}/>
            }
        </div>
        </>
        
    );
}

export default SearchBar;
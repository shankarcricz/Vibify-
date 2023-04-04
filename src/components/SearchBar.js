import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { useFetchSongsQuery } from "../store/apis";
import { UseLazyQuery, copyWithStructuralSharing } from "@reduxjs/toolkit/query";
import {songsApi} from "../store/apis/index";
import { useDispatch, useSelector } from "react-redux";
import { addsongs } from "../store";
import { AccessToken } from "./AccessToken";

const SearchBar = () => {
    useEffect(() => {
        AccessToken()
    }, [])
    const [term, setTerm] = useState('');
    const inp = useRef();
    const dispatch = useDispatch();
    // const {data} = useFetchSongsQuery(term)
    const { data, isLoading, error } = useFetchSongsQuery(
        term,
        {
          skip: !term,
        }
      );
      console.log(data)
    data && dispatch(addsongs(data))

    const handleClick = (e) => {
        e.preventDefault();
        setTerm(inp.current.value)
    }

    return (
        <Container>
            <form>
                <div className="form-group">
                    <input ref={inp} type="text" className="form-control" placeholder="Search" />
                    <button onClick={handleClick} type="submit" className="btn btn-primary">Search</button>
                </div>
            </form>
        </Container>
    );
}

export default SearchBar;
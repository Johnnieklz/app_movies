'Access-Control-Allow-Origin: *'
'use client';
import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import { get } from 'http';




export default function MovieList(){
    const [movies, setMovies] = useState([]);

    useEffect (() => {
        getMovies();
    }, [])

    const getMovies = () =>{
        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/trending/movie/{time_window}',
            params: {
                api_key: '4f144526ac92c2ac1c178d4289f006e3',
                language: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results);
            console.log(response.data.results);
        })
    }

    getMovies();
   
    return (
        <ul className="movie-list">
            {movies.map((movie) => 
                <li></li>
            )}
        </ul>
    );
}
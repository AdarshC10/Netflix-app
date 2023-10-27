import axios from 'axios'
import React, { useEffect, useState } from 'react'
import instance from '../instanceConfig';
import './Row.css';
function Row({title,fetchUrl}) {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movies,setMovies]= useState([])

    //api call 
    const fetchData= async()=>{
        const result = await instance.get(fetchUrl)
        console.log(result.data.results);
        setMovies(result.data.results)
    }
    console.log(movies);//array of movies(20)
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className='row'>

        <h1>{title}</h1>
        <div className='movie-row'>
            {
                movies.map((movie)=>(
                    <img  className='movie-image' src={`${base_url}/${movie.backdrop_path}`}  />
                ))
            }
        </div>
    </div>
  )
}

export default Row
import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instanceConfig'
import requests from '../request'
function Banner() {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movieImg,setmovieImg]= useState([])

    const fetchData = async()=>{
        const response= await instance.get(requests.fetchNetflixOriginals)//path is request
        console.log(response.data.results);
        setmovieImg(response.data.results[Math.floor(Math.random()*response.data.results.length)])
    }
    console.log(movieImg);
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <header>
    <div className='banner-text'
    style={{backgroundImage:`url(${base_url}/${movieImg.backdrop_path})`,backgroundSize:'cover',height:'500px'}}>

        <div className="banner-content">
          
        <h1 className='banner-title'>{movieImg.name}</h1> 
        <div className="banner-buttons">
            <button className="banner-button">
                Play
            </button>
            <button className="banner-button">
                My List
            </button>
        </div>

        <h3 className='banner-overview'>{movieImg.overview}</h3>
        
        </div>
        <div className="fade_bottom"></div>
       
       

       
    
       
        
    </div>
  
            
    </header>
  )
}

export default Banner


import React, { useState, useEffect } from 'react'
import axios from '../utils/axios'

const base_url = 'https://image.tmdb.org/t/p/original/'

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([])

    //Asnippet of code which runs based on a condition
    useEffect(() => {
        //if [], run once when the row loads
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request
        }
        fetchData()
    },[fetchUrl])

    console.table(movies)

  return (
    <div className='row'>
        <h2 className='text-white'>{title}</h2>
        <div className='row_posters'>
            {/* several row posters */}
            {movies.map(movie => (
                <img 
                key={movie.id}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name} />
            ))}
        </div>
    </div>
  )
}

export default Row
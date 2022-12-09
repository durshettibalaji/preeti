import { moviesData } from "../data/movieslist";
import MovieCard from "./MovieCard";
import { CiSearch } from "react-icons/ci";
import "./movielist.css";
import { useEffect, useState } from "react";

const MovieList = () => {
  const [array, SetArray] = useState(moviesData);

  console.log();
  useEffect(() => {
    SetArray(array);
  }, [array]);
  const sort=()=>{
    let arr1 = [];
    var arr = array.sort((a, b) => {
      // if(abc=="imdbRating")
      return a.imdbRating - b.imdbRating;
    });
    for (let i of arr) {
      arr1.push(i);
    }
    SetArray(arr1);
  };

  const sortYear = () => {
    let arr1 = [];
    var arr = array.sort((a, b) => {
      // if(abc=="imdbRating")
      return a.year - b.year;
    });
    for (let i of arr) {
      arr1.push(i);
    }
    SetArray(arr1);
    
  };

  return(  <>

            


      
      <div className="sort-container">
      <div className='search-container'>
                 <CiSearch className='search-icon' />
               <input className='search-input' placeholder='Search...' />
           </div>
       <div>
        <div class="dropdown m-1 left">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort by
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#" onClick={sort}>
                imdbRating
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#" onClick={sortYear}>
                Year
              </a>
            </li>
          </ul>
        </div>
        </div>

      <div className="movie-container">
        {array.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
     </div>
     
     
    </>
  );
};

export default MovieList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("Depardieu");
  const [sortGoodBad, setSortGoodBad] = useState(null);

  useEffect(() => {
              axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`
      )
      .then((res) => setMoviesData(res.data.results));
  }, [search]);

  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <form className="items-center">
        
          <input
            type="text"
            placeholder="Pfff bah cherche"
            id="search-input"
            className="appearance-none block bg-white text-white bg-opacity-25 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none mb-4"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" value="Rechercher" className=""/>
        </form>

        <div>
          <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"id="goodToBad" onClick={() => setSortGoodBad("goodToBad")}>
            Top<span>➜</span>
          </button>

          <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" id="badToGood" onClick={() => setSortGoodBad("badToGood")}>
            Flop<span>➜</span>
          </button>
        </div>
      </div>
      <div className="result grid grid-cols-1 lg:grid-cols-3 md:break-before-column">
        {moviesData
          .slice(0, 12)
          .sort((a, b) => {
            if (sortGoodBad === "goodToBad") {
              return b.vote_average - a.vote_average;
            } else if (sortGoodBad === "badToGood") {
              return a.vote_average - b.vote_average;
            }
          })
          .map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Form;

import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Card from "../components/Card";
import Header from "../components/Header";

const UserList = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);

  return (
  <div>
     <div className="text-white min-h-screen bg-neutral-800 font-mono ">
            <Header />
            <div className="bg-image flex flex-wrap">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-32 py-12 border-2 border-teal-700 shadow-xl">
          <div className="text-center pb-12 w-full mb-3 pb-3 border-b border-1 border-teal-700">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-teal-700 font-roboto">
              Mon profil
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            </div>
            <div>
                <h3>Mes informations : </h3>
        
                <h4>Mon nombre de coup de coeur :</h4>
                <h5>Ma ville</h5>


            </div>
            </section>
         </div>
         
   <section>
      <h2 className="text-center font-mono ">
        Mes coups de coeur <span>💖</span>
      </h2>
      <div className="result grid grid-cols-3">
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
      </div>
      </section>
    </div>
    </div>
  );
};

export default UserList;
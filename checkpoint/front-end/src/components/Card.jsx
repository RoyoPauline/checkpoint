import React from "react";

const Card = ({ movie }) => {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  const addStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    if (!storedData.includes(movie.id.toString())) {
      storedData.push(movie.id);
      window.localStorage.movies = storedData;
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.movies.split(",");

    let newData = storedData.filter((id) => id != movie.id);

    window.localStorage.movies = newData;
  };

  return (
    <div className ="flex min-w-260 max-w-280 h-200 bg-neutral-800 overflow-hidden relative px-20 m-5">
       <div className="bg-neutral-700 hover:bg-teal-900 rounded-md text-center border-solid border-2 border-teal-700">
         
      <img className="w-full h-70"
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
            : "https://fr.web.img4.acsta.net/pictures/15/07/27/15/04/271855.jpg"
        }
        alt="affiche film"
      />
     
      <div className="">
      <h2 className="text-lg">{movie.title}</h2>
      {movie.release_date ? (
        <h5 className="underline">Sorti le : {dateFormater(movie.release_date)}</h5>
      ) : (
        ""
      )}
      <h4>
        {movie.vote_average}/10 <span>⭐</span>
      </h4>

      <ul>
        {movie.genre_ids
          ? genreFinder()
          : movie.genres.map((genre, index) => (
              <li key={index}>{genre.name}</li>
            ))}
      </ul>
      {movie.overview ? <h3 className="underline">Synopsis</h3> : ""}
      <p>{movie.overview}</p>

      {movie.genre_ids ? (
        <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => addStorage()}>
          Ajouter aux coups de coeur
        </button>
      ) : (
        <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          
          onClick={() => {
            deleteStorage();
            window.location.reload();
          }}
        >
          Supprimer de la liste
        </button>
      )}
      </div>
      </div>
    </div>
  );
};

export default Card;
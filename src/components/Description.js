  
import React from "react";
const lesfilms=[
    {
      id: '1',
      name: 'Batman',
      Rate: 5,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Batman_%28black_background%29.jpg/420px-Batman_%28black_background%29.jpg',
      designation:'Batman aventure'
    },
    {
      id: '2',
      name: 'Superman',
      Rate: 4,
      image: 'https://i-mom.unimedias.fr/2021/03/03/superman_henry_cavill.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=590&w=1050',
      designation:'Superman aventure'
    },
    {
      id: '3',
      name: 'Titanic',
      Rate: 5,
      image: 'https://upload.wikimedia.org/wikipedia/en/1/19/Titanic_%28Official_Film_Poster%29.png',
      designation:'Tiatnic romance'
    },
  ]
  const Description = ({ match, history }) => {
    const movie = lesfilms.find((el) => el.name == match.params.name);
    console.log(movie);
    return (
        <div>
            <h2> {movie.name}</h2>
            <p> this is the description of the :{movie.description}</p>
            <button onClick={() => history.push("/about")}>goBack</button>
        </div>
    );
};

export default Description;
import React from 'react';
import Films from './Films';
export default function Main(props) {
  const {films} = props


  return (

    <main className="block col-2">

   

      <div className="row">
        {films.map((film) => (
          <Films key={film.id} film={film} ></Films> ))}
</div>

    </main>

  )

}
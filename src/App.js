
import './App.css';
import React, {useState} from 'react'
import Search from './components/Search'
import Main from './components/main'
import Description from "./components/Description";
import { Button } from "react-bootstrap";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
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
 
  const[films,setFilms]=useState(lesfilms)

const handleInput = (e) => {
  let s = e.target.value;
if (s==""){setFilms([...lesfilms])}
else  { setFilms(lesfilms.filter((x) => x.name == s)); }
   
  console.log(films)
}

   
 
  


  return (
    <BrowserRouter>
    <div className="App">
     
        
     
     
        <h1>Movie Data Base</h1>
       
          <body>
            
          <Link to={`/`}>
                    <Button >Movies list</Button>
                </Link>
      
        <Search handleInput={handleInput}  films={films} /> 
                
           
</body>
<Switch>
 
<Route exact path="/" render={()=>(<Main films={films} /> )}/>
      <Route exact path="/description/:name" component={Description}/>
      </Switch>


    </div >
   </BrowserRouter>
  );
}

export default App;

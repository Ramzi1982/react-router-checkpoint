import { useState, useEffect } from 'react';
import AddMovie from "./AddMovie/AddMovie.js";
import "./App.css";
import MovieList from './MovieList/MovieList.js';
import Filtring from './Filtring/Filtring.js';
import Description from './Description/Description.js';
import {Routes,Route } from "react-router-dom";

const info = [
  { title: 'Kingdom of Heaven', img: '/image/Kingdom.jpeg', description: "Quelque part dans le royaume de France en 1186, Balian, jeune forgeron accablé par l'existence, apprend qu'il est le fils de Godefroy d'Ibelin. Mais cette noble lignée le contraint de se rendre en Terre sainte pour défendre Jérusalem reconquise. Une fois en Palestine, il s'initie à l'art de la guerre et aux intrigues politiques, grâce à l'aide de Tiberias, le puissant conseiller militaire du roi.", posterURL: "www.kingdomofheaven.com", rating: 9.4 },
  { title: 'Matrix', img: '/image/Matrix.jpg', description: "Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il est l'un des pirates les plus recherchés du cyber-espace. À cheval entre deux mondes, Neo est assailli par d'étranges songes et des messages cryptés provenant d'un certain Morpheus. Celui-ci l'exhorte à aller au-delà des apparences et à trouver la réponse à la question qui hante constamment ses pensées : qu'est-ce que la Matrice ?", posterURL: "www.Matrix.com", rating: 9.3 },
  { title: 'Moonwalker', img: '/image/Michael.jpeg', description: "Dans les années trente, Monsieur Big, un malfrat de la pire espèce, sévit dans les rues de Chicago. Lorsqu'il s'en prend à de jeunes enfants, Michael Jackson ne peut s'empêcher de réagir et avec l'aide de ses amis, Sean, Zeke et Katie, ils vont tout faire pour mettre ce dangereux truand sous les verrous. Un combat du bien contre le mal au sommet.", posterURL: "www.MoonWalker.com", rating: 8.5 },
  { title: 'Titanic', img: '/image/Titanic.jpg', description: "En 1997, l'épave du Titanic est l'objet d'une exploration fiévreuse, menée par des chercheurs de trésor en quête d'un diamant bleu qui se trouvait à bord. Frappée par un reportage télévisé, l'une des rescapées du naufrage, âgée de 102 ans, Rose DeWitt, se rend sur place et évoque ses souvenirs. 1912. Award-winning, 11 episodes, five years in the making, the most expensive nature documentary series ever commissioned by the BBC, and the first to be filmed in high definition.", posterURL: "www.Titanic.com", rating: 9.4 },
  { title: 'The Legend of Zorro', img: '/image/Zoro.jpg', description: "An innocent oaquin, le fils de Don Alejandro de la Vega - alias Zorro - et de son épouse Elena, a aujourd'hui 10 ans et ignore tout de l'identité secrète de son père. Elena voudrait qu'Alejandro range définitivement son masque pour se consacrer enfin à sa famille. Son époux considère quant à lui qu'il est encore trop tôt pour prendre sa retraite de justicier. Elena se sent trahie et demande le divorce. is imprisoned and sentenced to death, and his only hope now is in his younger brother, who commits a crime in order to send himself to prison and devises a plan for their escape together, in addition to some other civilians in prison, they encounter a series of interesting and exciting problems and dilemmas, and they try to solve them in order to implement the plan, no matter what it costs them.", posterURL: "www.Zoro.com", rating: 8.3 },

];

function App() {

  const [list, setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate, setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie) {
    if (movie.title && movie.img && movie.description && movie.posterURL) {
      setList([...list, movie]);
    }
  }


  function filter(key, rate) {
    setKeyword(key);
    setRate(rate);
    setFiltredList(list.filter((element) => { return ((element.title.toLowerCase().includes(key.toLowerCase())) && (element.rating >= rate)) }));
  }

  useEffect(() => { filter(keyword, rate); }, [list]);


  return (
    <div className="App">
    <Routes>
      {/* SHOW THIS TWO COMPONENTS IF WE ARE IN THE ROOT PATH */}
      <Route path="/"  element={ <> <Filtring filter={filter}/>  <MovieList list={filtredList} /> <AddMovie adding={adding} />   </> } />
      {/*  SHOW THIS COMPONENT IF WE ARE IN : /:id  */}
      <Route path="/:id" element={ <Description list={list} /> } />
    </Routes>
  </div>
    );
}


export default App;
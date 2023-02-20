
import './App.css';
import Title from './Components/Title';
import Description from './Components/Description';
import Button from './Components/Button';
import Actors from './Components/Actors';
import Genres from './Components/Genres';

function App() {
  return (
    <>
    <hr />
    <Title title="Avengers"/>
    <hr />
    <Description/>
    <hr />
    <Button/>
    <hr />
    <Genres title="Generos">
      <li>Acción</li>
      <li>Romance</li>
      <li>Drama</li>
   </Genres>
    <hr />
    <Actors title="Actores">
      <li>Leonardo DiCaprio</li>
      <li>Brad Pitt</li>
      <li>Tom Cruise</li>
      <li>Will Smith</li>
      <li>Julia Roberts</li>
      <li>Angelina Jolie</li>
      <li>Meryl Streep</li>
      <li>Scarlett Johansson</li>
    </Actors>
    <hr />
    </>
  )
}

export default App

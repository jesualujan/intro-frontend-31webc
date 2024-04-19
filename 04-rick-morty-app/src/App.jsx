import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Character from './Components/Character/Character'
import PagButtons from './Components/PagButtons/PagButtons'
import './App.css'

function App () {
  // LÓGICA DEL COMPONENTE , EL ESTADO Y LA LLAMADA A LA API
  //* Estado del componente
  // camelCase: funciones, métodos o variables
  const [character, setCharacter] = useState([]) // el estado inicia vacío
  const [info, setInfo] = useState({}) // el estado inicia vacío

  // DEFINIR MI ENDPOINT:
  // SNAKE_UPPERCASE: entornos globables
  const BASE_URL = 'https://rickandmortyapi.com/api/character'

  useEffect(() => {
    getCharacters(BASE_URL)
  }, [])

  const getCharacters = (BASE_URL) => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        setCharacter()
        console.log(data.info)
        setInfo(data.info)
      })
      .catch((error) => console.log('Algo salio mal', error))
  }

  // MANEJADOR DE EVENTOS

  const onPrevious = () => {
    getCharacters(info.prev)
  }

  const onNext = () => {
    getCharacters(info.next)
  }

  return (
    <>
      <Navbar />
      <div>
        <PagButtons prev={info.prev} next={info.next} handlePrevious={onPrevious} handleNext={onNext} />
        <Character />
        <PagButtons prev={info.prev} next={info.next} handlePrevious={onPrevious} handleNext={onNext} />
      </div>
    </>
  )
}

export default App

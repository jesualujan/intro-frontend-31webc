/* eslint-disable react/prop-types */
import './pagbuttons.css'

// eslint-disable-next-line react/prop-types
// PascalCase
const PagButtons = ({ handlePrevious, handleNext }) => {
  return (
    <>
      {/* aplicando kebabcase para las clases de los componentes */}
      <ul className='pagination__buttons'>
        <li className='pagination__buttons-item'>
          <button onClick={handlePrevious}> prev </button>
        </li>
        <li className='pagination__buttons-item'>
          <button onClick={handleNext}> next </button>
        </li>
      </ul>
    </>
  )
}

export default PagButtons

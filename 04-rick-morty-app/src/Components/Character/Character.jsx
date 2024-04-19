/* eslint-disable react/prop-types */
import './character.css'

const Character = ({ characterList }) => {
  return (
    <div className='container custom-container'>
      <div className='row'>
        {
                        /* Transformar la lista de personajes */
                        characterList.map((item, index) => (
                          /* Codigo html genérico de las tarjetas */
                          <div key={index} className='col-lg-3 col-md-6 col-sm-12 mb-4'>
      
                          </div>
                        ))
                    }
      </div>
    </div>
  )
}

export default Character

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
                          <div className='card col-lg-3 col-md-6 col-sm-12 mb-4' key={index}>
                            <div className='card_container' style={{ minWidth: '300px' }}>
                              <img className='card-img-top' src={item.image} alt={item.name} />
                              <div>
                                <h2 className='card-title'>{item.name}</h2>
                                <h3 className='card-title'>ID: {item.id}</h3>
                                <hr />
                                <p className='card-text'>Species: {item.species}</p>
                                <p className='card-text'>Gender: {item.gender}</p>
                                <p className='card-text'>Location: {item.location.name}</p>
                                <p className='card-text'>Status: {item.status}</p>
                              </div>
                            </div>
                          </div>
                        ))
                    }
      </div>
    </div>
  )
}

export default Character

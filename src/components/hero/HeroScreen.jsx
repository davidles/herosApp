import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

const heroImages = require.context('../../assets/heroes', true)

export const HeroScreen = () => {

  const { heroeId } = useParams()

  const hero = useMemo(() => getHeroById(heroeId), [ heroeId ] ) 

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero

  const navigate = useNavigate()

  const handleReturn = () =>{
    navigate( -1 )
  }

  if (!hero) return <Navigate to='/' />

  // const imagePath = `/assets/${id}.jpg`


  return (
    <div className='row mt-5 mb-5'>
      <div className="col-4">
        <img
          src={ heroImages(`./${id}.jpg`).default }
          alt={ superhero }
          className='img-thumbnail animate__animated animate__fadeInLeft  mb-5'
        />

      </div>

      <div className="col-8 animate__animated animate__fadeInRight">
        <h3>
          {superhero}
        </h3>
        <ul className="list-group list-group-flush bg-dark text-white">
          <li className="list-group-item bg-dark text-white">
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item bg-dark text-white ">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item  bg-dark text-white">
            <b>First Appearance:</b> {first_appearance}
          </li>
        </ul>



        <h5 className='col-mt-5' >Characters</h5>
        <p>{characters}</p>

        <button
          className="btn btn-outline-info"
          onClick={ handleReturn }  
        >
          Regresar
        </button>



      </div>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

const heroImages = require.context('../../assets/heroes', true)


export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    // const imagePath = `/assets/${id}.jpg`

    return (
        <div className="col">
            <div className='card bg-dark text-white'>
                
                <div className="row no-gutters justify-content-center">
                    <div className="col-6">
                        <img src={heroImages(`./${id}.jpg`).default} alt={ superhero } className={'card-img'} />
                    </div>
                    <div className="col-6">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-subtitle">{alter_ego}</p>
                            {
                                (alter_ego !== characters) 
                                    && <p className="text-muted">{ characters } </p>
                            }

                            <p className="card-text">
                                <small className="text-muted">
                                    {first_appearance}
                                </small>
                            </p>

                            <Link to={`/hero/${id}`}>Más...</Link>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

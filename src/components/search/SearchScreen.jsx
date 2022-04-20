import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';


export const SearchScreen = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)



  const initialForm = {
    searchText: q
  };

  const [formValues, handleInputChange] = useForm(initialForm);

  const { searchText } = formValues

  const heroesFileted = useMemo(() => getHeroesByName(q), [q])

  const handleSearch = (e) => {
    e.preventDefault()

    navigate(`?q=${searchText}`)


  }



  return (
    <>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder='Buscar héroe'
              className='form-control'
              name="searchText"
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}
            />

            <button
              type="submit"
              className='btn btn-outline-info mt-2 mb-5'
            >
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {
            (q === '')
              ? <div className="alert alert-info">Encuentra tu heroe</div>
              : (heroesFileted.length === 0) && <div className="alert alert-danger">No se encontraron resultados</div>
          }

          {
            heroesFileted.map(hero => (
              <HeroCard
                key={hero.id}
                {...hero}
              />
            ))
          }
        </div>


      </div>
    </>
  )
}
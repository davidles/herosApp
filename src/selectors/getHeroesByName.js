import {
    heroes
} from "../data/heroes"


export const getHeroesByName = (name = '') => {

    console.log('Called')

    if (name === ''){

        return []
    }
    else{
        name = name.toLowerCase()
        return heroes.filter(hero => hero.superhero.toLowerCase().includes(name))
    }

    




}
import { heroes } from "../data/heroes"

export const getHeroById = ( id='') =>{
    console.log('getHero called')
    return heroes.find( hero => hero.id === id)

}
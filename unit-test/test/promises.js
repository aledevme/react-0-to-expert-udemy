import { getHeroeById } from '../test/example-with-data'
export const getHeroByIdAsync = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroeById(id)

            if (hero) {
                resolve(hero)
            } else {
                reject("No se encontro el heroe")
            }
        })
    }, 10000)
}
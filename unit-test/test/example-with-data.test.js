import { getHeroeById, getHeroesByOwner } from "./example-with-data"

describe("prueba con data", () => {
    test("get heroe by id, debe retornar un heroe por ID", () => {
        const id = 1
        const hero = getHeroeById(id)
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })
    test("getHeroeById debe retornar undefined si no existe", () => {
        const id = 100
        const hero = getHeroeById(id)
        expect(hero).toBeFalsy()
    })

    //tareas:

    //Debe retornar un arreglo con los heroes de DC
    //Length === 3
    //ToEqual al arreglo filtrado
    test("get heroes by owner DC, retornar los heroes de DC", () => {
        const dcHeroes = getHeroesByOwner('DC')
        expect(dcHeroes.length).toEqual(3)
        expect(dcHeroes).toEqual(getHeroesByOwner('DC'))
    })

    //Debe de retornar un arreglo con los heroes de Marvel
    //Length === 2
    //ToEqual al arreglo filtrado
    test("get heroes by owner marvel, retornar los heroes de Marvel", () => {
        const marvelHeroes = getHeroesByOwner('Marvel')
        expect(marvelHeroes.length).toEqual(2)
        expect(marvelHeroes).toEqual(getHeroesByOwner('Marvel'))
    })
})
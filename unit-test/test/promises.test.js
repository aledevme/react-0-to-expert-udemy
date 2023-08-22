import { getHeroByIdAsync } from "./promises"

describe('pruebas con promesas', () => {
    test("debe de retornar un hero ", (done) => {
        const id = 1
        getHeroByIdAsync(id).then(hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
            done()
        })
    })
    test("debe de obtener un error si heroe no existe ", (done) => {
        const id = 100
        getHeroByIdAsync(id).catch((error) => {
            expect(error).toBe("No se encontro el heroe")
            done()
        })
    })
})
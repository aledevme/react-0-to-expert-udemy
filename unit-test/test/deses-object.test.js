import { retornarArreglo } from "./deses-object"

describe("prueba en deses-array", () => {
    test("debe de retornar un string y un numero", () => {
        const [letters, numbers] = retornarArreglo()

        expect(letters).toBe('ABC')
        expect(numbers).toBe(123)

        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')

        //mas flexibilidad para las pruebas
        expect(letters).toStrictEqual(expect.any(String))
    })
})
import { getUser } from "./return-object"

describe('pruebas con funciones', () => {
    test('get user deberia retornar un usuario', () => {
        const testUser = {
            id: 2,
            name: 'jose',
            email: 'jose-media@gmail.com'
        }

        const user = getUser()
        expect(testUser).toStrictEqual(user)
    })
})
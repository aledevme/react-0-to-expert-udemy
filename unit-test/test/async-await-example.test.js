import { getImagen } from "./async-await-example"

describe("probar la api para retornar una imagen", () => {
    test("get imagen debe retornar url de la imagen", async () => {
        const url = await getImagen()
        console.log(url)
    })
})
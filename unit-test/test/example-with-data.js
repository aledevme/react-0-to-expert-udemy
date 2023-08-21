import heroes from '../data/heroes'
export const getHeroeById = (id) => {
    return heroes.find((el) => el.id === id)
}
export const getHeroesByOwner = (ownerCompany) => {
    return heroes.filter(el => el.owner === ownerCompany)
}


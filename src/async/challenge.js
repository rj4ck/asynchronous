const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (urlAPI) => {
    try {
        const data = await fetchData(urlAPI)
        const character = await fetchData(`${urlAPI}${data.results[0].id}`)
        const origin = await fetchData(character.origin.url)

        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.dimension)

    } catch(error) {
        console.error(error)
    }
}

console.log('BEFORE')
anotherFunction(API)
console.log('AFTER')

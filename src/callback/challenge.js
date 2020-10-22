let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const API = 'https://rickandmortyapi.com/api/character/'

const fetchData = (apiURL, callback) => {
    let xhttp = new XMLHttpRequest()

    xhttp.open('GET', apiURL, true)
    xhttp.onreadystatechange = (event) => {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error(`Error ${apiURL}`)

                return callback(error)
            }
        }
    }
    xhttp.send()
}

fetchData(API, (error1, data1) => {
    if (error1) return console.log(error1)

    const [character] = data1.results;
    const { id } = character;

    fetchData(API + id, (error2, data2 ) => {
        if (error2) return console.log(error2)

        fetchData(data2.origin.url, (error3, data3) => {
            if (error3) return console.log(error3)

            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)

        })

    })
})
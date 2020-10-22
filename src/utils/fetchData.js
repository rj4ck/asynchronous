let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const API = 'https://rickandmortyapi.com/api/character/'

const fetchData = url_API => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()

        xhttp.open('GET', url_API, true)
        xhttp.onreadystatechange = ((event) => {
            if (xhttp.readyState === 4) {
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error(`Èrror ${url_API}`))

            }
        })
        xhttp.send()
    })
}

module.exports = fetchData


const express = require ('express')
const res = require('express/lib/response')
const app = express()
const port = 3000


app.use(express.static(__dirname +'/public'));


app.get('/', (request, response) => {
    response.sendFile(__dirname +'/views/home-page.html')
})

app.get('/about', (request, response) => {
    response.sendFile(__dirname +'/views/about-page.html')
})

app.get('/work', (request, response) => {
    response.sendFile(__dirname +'/views/work-page.html')
})
// app.get('/photo-gallery', (request, response) => {
//     response.send('<h1>this is the photo-gallery page <h1>')
// })

app.listen(port, () => {
    console.log(`listening of port ${port}`)
})
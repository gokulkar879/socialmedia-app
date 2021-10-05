const express = require('express')
const app = express()
const port = 5000

app.use(express.static("public"))
app.get('/', (req, res) => {
    res.sendFile(__dirname+"/landingPage/index.html")
})

app.listen(port, () => {
    console.log("the app has started at port 5000")
})
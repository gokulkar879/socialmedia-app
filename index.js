const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("Hello Mr!")
})

app.listen(5000, () => {
    console.log("the app has started at port 5000")
})




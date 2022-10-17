const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json())
app.use(cors())
//app.use is middleware

app.get("/api/users", (req,res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"]
    res.status(200).send(friends)
})

// app.get("/weather/:temperature", (req, res) => {
//     const phrase = `<h3> It was ${req.params.temperature} today </h3>`
//     res.status(200).send(phrase)
// })

//Easier way to read it.

app.get("/weather/:temperature", (req,res) => {
    const { temperature } = req.params
    const phrase = `<h3> It was ${temperature} today </h3>`
    res.status(200).send(phrase)
})




let PORT = 4000
app.listen(4000, () => console.log(`Server running on port ${PORT}`))

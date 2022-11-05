const express = require("express")
const server = express()
const path = require("path")


server.all("/public/*", (req, res)=>{
    res.sendFile(path.join(__dirname + req.url), (e)=>res.sendStatus(404))
})

server.listen(8000, ()=>console.log(`Server running!`))
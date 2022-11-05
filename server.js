const express = require("express")
const server = express()
const path = require("path")


server.all("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/Public/HTML/index.html"))
})

server.all("/public/*", (req, res)=>{
    res.sendFile(path.join(__dirname + req.url))
})

server.listen(8000, ()=>console.log(`Server running!`))
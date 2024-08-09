const { Socket } = require("dgram")
const express= require("express")
const http= require("http")
const app= express()
const path= require('path')
const {Server}= require('socket.io')
const server= http.createServer(app)
const io= new Server(server)

//socket io
io.on('connection', (client)=>{})
app.use(express.static(path.resolve('./public')))
app.get('/', (req, res)=>{
    return res.sendFile('./public/index.html')
})
server.listen(9000, ()=> console.log(`server started at 9000`))

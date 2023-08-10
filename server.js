const express = require('express');
const dotenv = require('dotenv').config();
const { chats } = require('./data/data');
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes")
const connectDB = require('./config/db')
const messageRoutes = require('./routes/messageRoutes')
const { notFound, errorHandler} = require('./middleware/errorMiddleware')
const cors = require('cors')
const path = require('path')

connectDB();
const app = express();
app.use(express.json())
app.get('/', (req, res)=>{
    res.send("API is running")
})

// app.use(cors({
//     origin: 
// }))

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes)
app.use("/api/message", messageRoutes);

app.use(notFound)
app.use(errorHandler)
app.use(express.static(path.join(__dirname, '../frontend/build')))

app.get('*', (req, res)=>{
    res.sendFile(path.json(__dirname, '../frontend/build/index.html'))
})

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, ()=>{
    console.log('Server is running');   
})

// const io = require('socket.io')(server, {
//     pingTimeout: 60000,
//     cors: {
//         origin: "http://localhost:3000",
//     }
// })

// io.on("connection", (socket) => {
//     console.log("Connected to socket.io");
// })
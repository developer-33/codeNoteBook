// require('dotenv').config()

// const express = require('express');
// const router = require('vite-express');
// const { requireUser } = require("./api/utils");
// const userRoutes = require('./api/users'); // Import the user routes
// const app = express();


// const bodyParser = require('body-parser')
// app.use(bodyParser.json());

// app.use(express.static('public'))



// const db = require('./db/client')
// db.connect()

// const apiRouter = require('./api');
// app.use('/api', apiRouter);

// app.use('/api/users', requireUser, userRoutes); // Assuming the user-related routes are mounted at '/api/users'

// router.listen(app, 3000, () =>
//   console.log('Server is listening on port 3000...')
// );

// module.exports = router;




const express = require("express");
const http = require("http");

const cors = require("cors");

const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");



const corsOptions = {
  origin: "http://127.0.0.1:5174", // Change to match your frontend
  methods: ["GET", "POST"],
  credentials: true,
};


app.use(cors(corsOptions));



const io = require("socket.io")(server, {
  cors: {
    origin: "http://127.0.0.1:5174", // Same as frontend origin
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("send-message", (message) => {
    io.emit("message", message); // Broadcast to all clients
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(5000, () => console.log("Server running on port 5000"));

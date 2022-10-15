const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
var cors = require("cors");

// cors
const whitelist = [
  "http://127.0.0.1:8080",
  "http://127.0.0.1:8080/",
  "http://localhost:8080",
  "http://localhost:8080/",
];
const corsOptions = {
  origin(origin, callback) {
    if (!origin) {
      // for mobile app and postman client
      return callback(null, true);
    }
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
  methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  allowedHeaders: "*",
  "Access-Control-Request-Headers": "*",
};
app.use(cors(corsOptions));

app.get("/", function (req, res) {
  res.send("HELLO GUYS..");
});

//Whenever someone connects this gets executed
io.on("connection", function (socket) {
  console.log("A user connected");

  //Whenever someone disconnects this piece of code executed
  socket.on("disconnect", function () {
    console.log("A user disconnected");
  });
});

http.listen(3000, function () {
  console.log("listening on *:3000");
});

require('dotenv').config({path : "./config.env"});
const express = require('express');
require('./server/config/mongoose.config'); 
const errorHandler = require ("./server/middleware/error");


// const connectDB = require("./config")

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json()); 
require('./server/routes/readers.routes')(app);
require('./server/routes/private')(app);



// the I have no idea about lines : 

// app.use("/api/auth", require("./routes/readers.routes"));
// app.use("/api", require("./routes/private"));

// ///////////

app.get("/", (req, res, next) => {
    res.send("Api running");
  });

const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => {
    console.log(`Listening at Port ${PORT}`)
})

//Error Handler Middleware
app.use(errorHandler);

process.on("unhandledRejection", (err, Promise) => {
    console.log(`Logged Error:${err}`);
    Server.close(() => process.exit(1));
});
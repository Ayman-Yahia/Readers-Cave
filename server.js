require('dotenv').config({path : "./config.env"});
const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config'); 
const errorHandler = require ("./server/middleware/error");
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 8000;

require('./server/routes/readers.routes')(app);
require('./server/routes/private')(app);



// the I have no idea about lines : 

// app.use("/api/auth", require("./routes/readers.routes"));
// app.use("/api", require("./routes/private"));

// ///////////

// app.get("/", (req, res, next) => {
//     res.send("Api running");
//   });



app.listen(PORT, () => {
    console.log(`Listening at Port ${PORT}`)
})

//Error Handler Middleware
app.use(errorHandler);

process.on("unhandledRejection", (err, Promise) => {
    console.log(`Logged Error:${err}`);
    Server.close(() => process.exit(1));
});
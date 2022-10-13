const connectToMongo=require('./db');

connectToMongo();

const express = require('express')
const app = express()
const port = 5000;
//const cc = require("./routes/auth")
app.use(express.json());

//available routes
app.use("/api/auth",require("./routes/auth"));
app.use('/api/notes',require("./routes/notes"));
// app.get('/api/auth',require(./routes/notes));
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
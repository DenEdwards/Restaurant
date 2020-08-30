const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const itemRouter = require("./routes/item");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/items", itemRouter);

const port = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_ATLAS, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
    console.log("Connection to MongoDB Atlas successful!");
});

console.log( process.env.REACT_APP_GOOGLE_MAPS_API_KEY);


app.get("/", (req,res) => {
    res.send("Hello");
});

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
});

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const itemRouter = require("./routes/item");
const path = require('path');
const buildPath = path.join(__dirname, '..', 'build');

const app = express();
app.use(express.json());
app.use(express.static(buildPath));

app.use("/items", itemRouter);

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_ATLAS, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
    console.log("Connection to MongoDB Atlas successful!");
});


app.get('/*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../public/index.html'), function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
});

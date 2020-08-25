const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    price:{
        type:Number,
        required: true,
        unique: true,
        trim: true
    },
    image:{
        type: String,
        required: true,
        trim: true
    }
});

const Item = mongoose.model("Item",itemSchema);

module.exports = Item;
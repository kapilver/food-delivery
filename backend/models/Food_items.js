const mongoose = require('mongoose');
const Food_items_Schema = new mongoose.Schema({

   

    categoryName: String,
    name: String,
    img: String,
    description:String,
    options:Array



})

module.exports = mongoose.model('Food_items',Food_items_Schema);


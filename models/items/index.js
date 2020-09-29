const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    qty: { type: Number, required: true },
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item
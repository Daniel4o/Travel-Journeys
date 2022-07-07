const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const favoriteSchema = new Schema({
    _id: String,
    title: {
        type: String,
        required: true,
        min: 3,
        max: 25,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        data: Buffer,
        type: String,
        required: true,
    },
    date: { type: Date }
});

const Favorites = mongoose.model('favorites', favoriteSchema);

module.exports = Favorites;
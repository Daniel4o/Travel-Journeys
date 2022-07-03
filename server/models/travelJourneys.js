const mongoose  = require("mongoose");
const Schema = mongoose.Schema;
const travelJourneySchema = new Schema({
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
        date: { type:Date}
    });

const TravelJourney = mongoose.model('FavoritesPlace', travelJourneySchema);

module.exports = TravelJourney;
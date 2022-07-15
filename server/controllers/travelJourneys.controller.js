let TravelJourney = require('../models/travelJourneys');

exports.getTravelJourney = async (req, res) => {
    await TravelJourney.findById(req.params.id)
        .then(travelJ => res.status(200).json(travelJ))
        .catch(error => res.status(400).json("Error" + error));
}

exports.getTravelJourneys = async (req, res) => {
    await TravelJourney.find()
        .then(travelJ => res.status(200).json(travelJ))
        .catch(error => res.status(400).json("Error" + error));
}

exports.addTravelJourney = async (req, res) => {
    const newTravelJourney = new TravelJourney(req.body);
    await newTravelJourney.save()
        .then(() => res.status(200).json("Travel journey added"))
        .catch(error => res.status(400).json("Error" + error));
}

exports.updateTravelJourney = async (req, res) => {
    const updateTravelJourney = await TravelJourney.findById(req.params.id);
    await updateTravelJourney.update(req.body)
        .then(() => res.status(200).json(travelJ))
        .catch(error => res.status(400).json("Error" + error));
}

exports.deleteTravelJourney = async (req, res) => {
    await TravelJourney.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json("Travel journey deleted."))
        .catch(error => res.status(400).json("Error" + error))
}


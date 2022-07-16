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

exports.addTravelJourney =  (req, res) => {
    const title = req.body.title;
    const image = req.file.image;
    const date = req.body.date;
    const description = req.body.description;

    const newTravelJourney = {
        title,
        image,
        date,
        description
    }
    const newJourney = new TravelJourney(newTravelJourney);
     newJourney.save()
        .then(() => res.status(200).json("Travel journey added"))
        .catch(error => res.status(400).json("Error" + error));
}

exports.updateTravelJourney =  (req, res) => {
    const updateTravelJourney =  TravelJourney.findById(req.params.id)
    .then((journey) => {
        journey.title = req.body.title;
        journey.image = req.file.image;
        journey.date = req.body.date;
        journey.description = req.body.description

         updateTravelJourney.update(journey)
    })
        .then(() => res.status(200).json(travelJ))
        .catch(error => res.status(400).json("Error" + error));
}

exports.deleteTravelJourney = async (req, res) => {
    await TravelJourney.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json("Travel journey deleted."))
        .catch(error => res.status(400).json("Error" + error))
}


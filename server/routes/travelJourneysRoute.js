const router = require('express').Router();
const travelJourneys = require('../controllers/travelJourneys.controller');

router.get("/", travelJourneys.getTravelJourneys);
router.get("/:id", travelJourneys.getTravelJourney);
router.post("/", travelJourneys.addTravelJourney);
router.patch("/:id", travelJourneys.updateTravelJourney);
router.delete("/:id", travelJourneys.deleteTravelJourney);

module.exports = router
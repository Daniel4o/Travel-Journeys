const upload = require('../images/storage');
const router = require('express').Router();
const travelJourneys = require('../controllers/travelJourneys.controller');

router.get("/", travelJourneys.getTravelJourneys);
router.get("/:id", travelJourneys.getTravelJourney);
router.post("/", upload.single('image'), travelJourneys.addTravelJourney);
router.patch("/:id", upload.single('image'), travelJourneys.updateTravelJourney);
router.delete("/:id", travelJourneys.deleteTravelJourney);

module.exports = router;
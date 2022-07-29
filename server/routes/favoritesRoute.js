const upload = require('../images/storage');
const favorites = require('../controllers/favorites.controller');
const router = require('express').Router();

router.get("/:id", favorites.getFavorite);
router.get("/", favorites.getFavorites);
router.post("/", favorites.addFavorite);
router.patch("/:id", favorites.updateFavorite);
router.delete("/:id", favorites.removeFavorite);

module.exports = router;
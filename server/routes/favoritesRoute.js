const favorites = require('../controllers/favorites.controller');
const router = require('express').Router();

router.post("/favorited", favorites.Favorites);
router.get("/getFavorites", favorites.getFavorites);
router.post("/addToFavorites", favorites.addFavorite);
router.delete("/removeFromFavorites", favorites.removeFavorite);

module.exports = router;
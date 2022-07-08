const favorites = require('../controllers/favorites.controller');
const router = require('express').Router();

router.get("/", favorites.getFavorites);
router.post("/", favorites.addFavorite);
router.delete("/:id", favorites.removeFavorite);

module.exports = router;
let Favorites = require('../models/favorites');

exports.getFavorites = async (req, res) => {
    await Favorites.find()
        .then(favorite => res.status(200).json(favorite))
        .catch(error => res.status(400).json("Error" + error));
}


exports.addFavorite = async (req, res) => {
    const favorite = new Favorites(req.body);
    await favorite.save()
        .then(() => res.status(200).json("Added to favorites"))
        .catch(error => res.status(400).json("Error" + error));
}

exports.removeFavorite = async (req, res) => {
    await Favorites.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json("Removed from favorites"))
        .catch(error => res.status(400).json("Error" + error));
}
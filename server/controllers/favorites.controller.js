let Favorites = require('../models/favorites');

exports.getFavorite = async (req, res) => {
    await Favorites.findById(req.params.id)
        .then(favorite => res.status(200).json(favorite))
        .catch(error => res.status(400).json("Error" + error));
}

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

exports.updateFavorite = async (req, res) => {
    const updateFavorite = await Favorites.findById(req.params.id);
    await updateFavorite.update(req.body)
        .then(() => res.status(200).json(travelJ))
        .catch(error => res.status(400).json("Error" + error));
}

exports.removeFavorite = async (req, res) => {
    await Favorites.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json("Removed from favorites"))
        .catch(error => res.status(400).json("Error" + error));
}
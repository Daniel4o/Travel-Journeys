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
    const title = req.body.title;
    const image = req.file.image;
    const date = req.body.date;
    const description = req.body.description;

    const newFavorite = {
        title,
        image,
        date,
        description
    }

    const favorite = new Favorites(newFavorite);
    await favorite.save()
        .then(() => res.status(200).json("Added to favorites"))
        .catch(error => res.status(400).json("Error" + error));
}

exports.updateFavorite = async (req, res) => {
    const updateFavorite = await Favorites.findById(req.params.id)
        .then((favorite) => {
            favorite.title = req.body.title;
            favorite.image = req.file.image;
            favorite.date = req.body.date;
            favorite.description = req.body.description

            updateFavorite.update(favorite)
        })
        .then(() => res.status(200).json(travelJ))
        .catch(error => res.status(400).json("Error" + error));
}

exports.removeFavorite = async (req, res) => {
    await Favorites.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json("Removed from favorites"))
        .catch(error => res.status(400).json("Error" + error));
}
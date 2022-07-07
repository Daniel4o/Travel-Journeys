let Favorites = require('../models/favorites');

exports.Favorites = (req, res) => {
    Favorites.find({ "_id": req.body._id })
        .exec((err, favorite) => {
            if (err) return res.status(400).send(err)

            //How can we know if I already favorite this movie or not ? 
            let result = false;
            console.log(favorite)
            if (favorite.length !== 0) {
                result = true
            }

            res.status(200).json({ success: true, favorited: result });

        })

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

exports.removeFavorite = async (req, res) => {
    Favorites.findOneAndDelete({ _id: req.body._id })
        .then(() => res.status(200).json("Removed from favorites"))
        .catch(error => res.status(400).json("Error" + error));
}
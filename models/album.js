const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    artistName: String,
    albumName: String,
    releaseDate: String,
    genres: [],
})

const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;

//this is Karla's change------:)


import { Model } from "mongoose";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    albumName: String,
    name: String,
    releasedData: String,
    genres: [],
})

const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
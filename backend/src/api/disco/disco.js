const restful = require('node-restful')
const mongoose = restful.mongoose

const trackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: Number, min: 1, required: true, unique: true },
    duration: { type: Number, min:0, required: true }
})

const discoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    month: { type: Number, min: 1, max: 12, required: true },
    year: { type: Number, min: 1, required: true },
    artist: { type: String, required: true },
    genre: { type: String, required: true },
    tracks: [discoSchema]
  })

  module.exports = restful.model('Disco', discoSchema)
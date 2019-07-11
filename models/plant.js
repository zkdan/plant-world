const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
  name: String,
  type: String,
  stock: Number,
  commonName: String,
  botanicalName: String,
  otherNames: Array,
  varieties: Array,
  lightRequirements: Array,
  water: String,
  humidity: String,
  poisonousToPets: Boolean,
  image: String
});

module.exports = mongoose.model('Plant', PlantSchema);
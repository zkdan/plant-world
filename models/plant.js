const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
  commonName:String,
  botanicalName:String,
  otherNames:Array,
  varieties:Array,
  light:Array,
  water:Array,
  humidity: String,
  poisonous: Boolean
});

// this is what this file exports
module.exports = mongoose
// defines the model , retreives the Schema 
  .model('Plant', PlantSchema);
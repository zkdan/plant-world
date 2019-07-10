const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
  name: String,
  lightRequirements: Array,
  poisonousToPets: Boolean,
  type:'String'
});

// this is what this file exports
module.exports = mongoose
// defines the model , retreives the Schema 
  .model('Plant', PlantSchema);
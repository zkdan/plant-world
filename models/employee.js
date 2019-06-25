const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: String,
  otherNames: Array,
  title: String,
  favoritePlants: Array,
  leastFavoritePlants: Array,
  enemies: Array,
  microwavesFish: Boolean,
  wholeDeal:String
});

// this is what this file exports
module.exports = mongoose
  // defines the model , retreives the Schema 
  .model('Employee', EmployeeSchema);
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cakesSchema = new Schema({
  name: {type: String, required: false},
  flavor: {type: String, required: false},
  color: {type: String, required: false},
  allergyInfo: {type: String, required: false},
  price: {type: Number, required: false},
  imgUrl: {type: String, required: false},
}, {
  timestamps: false,
});

const Cakes = mongoose.model('Properties', cakesSchema);

module.exports = Cakes;
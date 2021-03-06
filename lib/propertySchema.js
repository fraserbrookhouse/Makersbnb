const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
name: String,
address: String,
description: String,
ppn: Number,
contact: String,
start_date: String,
end_date: String
})

const Property = mongoose.model('properties', propertySchema);

module.exports = Property
// const villa = new Property({
//   name: 'Villa', address: '124 cool kids lane', description: 'Cool villa for cool kids', 
// ppn: 234.55, contact: 'coolkidz@cool.com', availability: true });
//   console.log(villa.name);

//   villa.save(function (err, villa) {
//     if (err) return console.error(err);
//     console.log(villa.name);
//   });
//   export { Property };


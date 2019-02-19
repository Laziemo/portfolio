/*
Legends DB
*/
//-o_O===init===================================================~|
'use strict';
//-o_o===modules=================================================|
const mongoose = require('mongoose');
//const validator = require('validator');//for email validation
//-o_o===schema==================================================|
const Schema = mongoose.Schema;

const legendSchema = new Schema({
  name : {type: String},
  form: {type: String},
  sex:{type: String},
  world: {type: String},
  description:{type: String}, 
  image: {data: Buffer, contentType: String}
});
//-o_o===exports=================================================|
module.exports = mongoose.model('legends', legendSchema);
//-o_o===fin=====================================================|
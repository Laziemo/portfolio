/*
Users DB
*/
//-o_O===init===================================================~|
'use strict';
//-o_o===modules=================================================|
const mongoose = require('mongoose');
//const validator = require('validator');//for email validation
//-o_o===schema==================================================|
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username : {type: String},
  password256: {type: String},
  email:{type: String},
});
//-o_o===exports=================================================|
module.exports = mongoose.model('users', userSchema);
//-o_o===fin=====================================================|
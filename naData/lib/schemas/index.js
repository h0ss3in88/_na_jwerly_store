const {CategorySchema} = require('./lib/categorySchema');
const {ProductSchema} = require('./lib/productSchema');
const {UserSchema} = require('./lib/userSchema');
const {LogSchema} = require('./lib/logSchema');
const {OrderSchema} = require('./lib/orderSchema');

module.exports = Object.assign({},{CategorySchema,ProductSchema,UserSchema,LogSchema,OrderSchema});
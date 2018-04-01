

let mongoose = require('mongoose');

let adminSchema = require('../schema/admin.js');

export default  mongoose.model('admin', adminSchema)
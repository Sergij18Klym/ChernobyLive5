const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  createDate: {
    type: String
  }
});

module.exports = mongoose.model('Admin', adminSchema);
const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  createDate: {
    type: Date,
    default: Date.now
  },
  tourType: {
    type: String,
    required: true,
    enum: ['type1', 'type2'],
    default: 'type1'
  },
  language: {
    type: String,
    required: true,
    enum: ['en', 'ua', 'ru'],
    default: 'en'
  },
  startDate: {
    type: Date,
    required: true
  },
  actual: {
    type: Boolean
  },
  guide: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Guide'
  }
});

module.exports = mongoose.model('Tour', tourSchema);
const mongoose = require('mongoose');

const healthSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Health = mongoose.model('Health', healthSchema);

module.exports = Health;
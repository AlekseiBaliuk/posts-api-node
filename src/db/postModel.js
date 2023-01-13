const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
  topic: {
    type: String,
    require: true,
    unique: true,
  },
  text: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Post = mongoose.model('Post', postsSchema);

module.exports = {Post};

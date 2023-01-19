const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
  topic: {
    type: String,
    require: true,
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'Users',
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

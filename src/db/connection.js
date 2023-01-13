const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
// connectMongo().catch((err) => console.log(err));

/** */
async function connectMongo() {
  return await mongoose.connect(process.env.MONGO_URL);

//   const Posts = db.model('posts');
//   return Posts;
//   const posts = await Posts.find({});
//   console.log(posts);
}

module.exports = {connectMongo};

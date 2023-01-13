const {Post} = require('../db/postModel');
const {WrongParametersError} = require('../helpers/errors');

const getPosts = async () => {
  const posts = await Post.find({});
  return posts;
};

const getPostById = async (id) => {
  const post = await Post.findById(id);

  // if (!post) {
  //   return res
  //       .status(400)
  //       .json({status: `failure, no post with id ${id} found`});
  // }

  if (!post) {
    throw new WrongParametersError(`failure, no post with id ${id} found`);
  }

  return post;
};

const addPosts = async ({topic, text}) => {
  const post = new Post({topic, text});
  await post.save();
  return post;
};

const changePostsById = async (id, {topic, text}) => {
  await Post.findByIdAndUpdate(id, {$set: {topic, text}});
};

const deletePostsById = async (id) => {
  await Post.findByIdAndDelete(id);
};

module.exports = {
  getPosts,
  getPostById,
  addPosts,
  changePostsById,
  deletePostsById,
};

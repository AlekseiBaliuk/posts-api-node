const {Post} = require('../db/postModel');
const {WrongParametersError} = require('../helpers/errors');

const getPosts = async (userId) => {
  const posts = await Post.find({userId});
  return posts;
};

const getPostById = async (postId, userId) => {
  const post = await Post.findOne({_id: postId, userId});

  if (!post) {
    throw new WrongParametersError(`failure, no post with id ${postId} found`);
  }

  return post;
};

const addPosts = async ({topic, text}, userId) => {
  const post = new Post({topic, text, userId});
  await post.save();
  return post;
};

const changePostsById = async (postId, {topic, text}, userId) => {
  await Post.findOneAndUpdate({_id: postId, userId}, {$set: {topic, text}});
};

const deletePostsById = async (postId, userId) => {
  await Post.findOneAndRemove({_id: postId, userId});
};

module.exports = {
  getPosts,
  getPostById,
  addPosts,
  changePostsById,
  deletePostsById,
};

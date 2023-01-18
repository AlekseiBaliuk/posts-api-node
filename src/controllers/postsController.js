
const {
  getPosts,
  getPostById,
  addPosts,
  changePostsById,
  deletePostsById,
} = require('../services/postsService');

const getPostsController = async (req, res) => {
  const {_id: userId} = req.user;
  const posts = await getPosts(userId);
  res.json({posts});
};

const getPostByIdController = async (req, res) => {
  const {id: postId} = req.params;
  const {_id: userId} = req.user;
  const post = await getPostById(postId, userId);

  res.json({post, status: 'success'});
};

const addPostController = async (req, res) => {
  const {_id: userId} = req.user;

  const {topic, text} = req.body;
  const post = await addPosts({topic, text}, userId);

  res.json({post, status: 'success'});
};

const changePostController = async (req, res) => {
  const {id: postId} = req.params;
  const {topic, text} = req.body;
  const {_id: userId} = req.user;

  await changePostsById(postId, {topic, text}, userId);

  res.json({status: 'success'});
};

// const patchPost = (req, res) => {
//   const {topic, text} = req.body;

//   posts.forEach((post) => {
//     if (post.id === req.params.id) {
//       if (topic) {
//         post.topic = topic;
//       }

//       if (text) {
//         post.text = text;
//       }
//     }
//   });
//   res.json({status: 'success'});
// };

const deletePostController = async (req, res) => {
  const {id: postId} = req.params;
  const {_id: userId} = req.user;
  await deletePostsById(postId, userId);
  res.json({status: 'success'});
};

module.exports = {
  getPostsController,
  getPostByIdController,
  addPostController,
  changePostController,
  deletePostController,
};

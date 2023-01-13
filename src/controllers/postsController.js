
const {
  getPosts,
  getPostById,
  addPosts,
  changePostsById,
  deletePostsById,
} = require('../services/postsService');

const getPostsController = async (req, res) => {
  const posts = await getPosts();
  res.json({posts});
};

const getPostByIdController = async (req, res) => {
  const {id} = req.params;
  const post = await getPostById(id);

  res.json({post, status: 'success'});
};

const addPostController = async (req, res) => {
  const {topic, text} = req.body;
  const post = await addPosts({topic, text});

  res.json({post, status: 'success'});
};

const changePostController = async (req, res) => {
  const {id} = req.params;
  const {topic, text} = req.body;

  await changePostsById(id, {topic, text});

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
  const {id} = req.params;
  await deletePostsById(id);
  res.json({status: 'success'});
};

module.exports = {
  getPostsController,
  getPostByIdController,
  addPostController,
  changePostController,
  deletePostController,
};

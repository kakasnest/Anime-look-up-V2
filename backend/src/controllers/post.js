import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const created = await Post.create({ title, content, createdBy: req.user });
    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const posts = await Post.find({ createdBy: req.user });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const editPost = async (req, res) => {
  const data = req.body;

  try {
    const editedPost = await Post.findByIdAndUpdate(
      { _id: req.params.postID },
      data
    );
    res.status(200).json(editedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await Post.find({ _id: req.params.id });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

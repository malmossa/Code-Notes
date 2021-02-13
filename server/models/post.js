import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  recipe: String,
  author: String,
  tags: [String],
  uploadedImage: String,
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
});

const Post = mongoose.model('Post', postSchema);

export default Post;

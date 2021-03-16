import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  recipe: String,
  name: String,
  author: String,
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

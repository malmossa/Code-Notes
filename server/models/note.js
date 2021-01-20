import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
  title: String,
  note: String,
  creator: String,
  tags: [String],
  image: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
});

const Note = mongoose.model('Note', noteSchema);

export default Note;

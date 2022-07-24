const { Schema, model } = require('mongoose');

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const todolistSchema = new Schema(
  {
    item: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Todolist = model('Todolist', todolistSchema);

module.exports = Todolist;

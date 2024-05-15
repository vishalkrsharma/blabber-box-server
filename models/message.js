import { Schema, model } from 'mongoose';

const schema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const message = model('message', schema);

export default message;

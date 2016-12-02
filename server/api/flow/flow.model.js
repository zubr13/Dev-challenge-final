'use strict';

import mongoose from 'mongoose';

var FlowSchema = new mongoose.Schema({
  name: String,
  description: String,
  private: Boolean,
  img: String,
  delete: Boolean,
  users: [String],
  msg: [{
    user: String,
    msg: String,
    date: Date
  }],
  events: [{
    name: String,
    description: String,
    date: Date,
    place: String,
    price: String,
    img: String,
    hashtags: [String]
  }]
});

export default mongoose.model('Flow', FlowSchema);

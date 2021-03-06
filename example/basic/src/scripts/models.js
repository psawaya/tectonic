'use strict';

import { Model } from 'tectonic';

export const User = new Model('user', {
  id: 0,
  name: '',
  email: ''
});

export const Post = new Model('post', {
  id: 0,
  title: '',
  body: '',
  authorID: 0,
  author: ''
});

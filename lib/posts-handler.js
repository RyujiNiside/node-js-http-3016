'use strict';
const pug = require('pug');
const util = require('./handler-util');
const Post = require('./posts');

function handle(req, res) {
  switch (req.method) {
    case 'GET':
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });
      Post.findAll().then((posts) => {
            res.end(pug.renderFile('./posts.pug', {
              posts: posts
            }));
          });
      break;
    case 'POST':
      let body = [];
      req.on('data', (chunk) => {
        body.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(body).toString();
        const decoded = decodeURIComponent(body);
        const content = decoded.split('content=')[1];
        console.info('投稿されました: ' + content);
        Post.create({
              content: content,
              content1: content,
              content2: content,
              content3: content,
              content4: content,
              content5: content,
              content6: content,
              content7: content,
              content8: content,
              content9: content,
              trackingCookie: null,
              postedBy: req.user
            }).then(() => {
              handleRedirectPosts(req, res);
            });
      });
      break;
    default:
      util.handleBadRequest(req, res);
      break;
  }
}

function handleRedirectPosts(req, res) {
  res.writeHead(303, {
    'Location': '/posts'
  });
  res.end();
}

module.exports = {
  handle
};

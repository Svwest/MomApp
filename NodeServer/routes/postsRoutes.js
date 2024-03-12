const express = require('express');
const router = express.Router();  
const Post = require('../models/post.js');

router.post('/new', async(req, res) =>
{
  console.log('body is: ', req)
  try {
    const {author ,title, content, picture} = req.body
    const post = await Post.create({author, title, content, picture})
    res.status(200).json()
  
  }
  catch (e) {
    res.status(500).json(e);
  }
  res.status(200).json({message: 'post created'})
})

router.get('/all', async(req, res) =>
{
  try {
    data = await Post.find()    
  }
  catch (e) {
    res.status(500).json(e);
  }
  res.status(200).json(data)
})

router.get('/:id', async(req, res) =>
{
  try {
    data = await Post.findById(req.body.id)    
  }
  catch (e) {
    res.status(500).json(e);
  }
  res.status(200).json(data)
})

router.put('/posts/:id')
router.delete('/posts/:id')


module.exports = router;

const experess = require('express');
const router = experess.Router();   
const postController = require('./controller');

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPosts);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;
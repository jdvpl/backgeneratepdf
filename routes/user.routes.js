const {Router}=require('express');
const { userGet, userPut, userPost, userDelete, userAnswer } = require('../controllers/user.controller');

const router=Router();


router.get('/', userGet);
router.put('/:id', userPut);
router.post('/basic-data', userPost);
router.post('/answer', userAnswer);
router.delete('/', userDelete);


module.exports =router;
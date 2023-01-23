const {Router}=require('express');
const { videntityUserPin,validatethirdQuestion, reSendOTPCode } = require('../controllers/otpController');
const { userGet, userPut, userPost, userDelete, userAnswer } = require('../controllers/user.controller');

const router=Router();


router.get('/offices', userGet);
router.put('/:id', userPut);
router.post('/basic-data', userPost);
router.post('/answer', userAnswer);

router.post('/identity-user/otp', validatethirdQuestion);
router.post('/identity-user/pin', videntityUserPin);
router.post('/identity-user/resend', reSendOTPCode);
router.post('/answer', userAnswer);

router.delete('/', userDelete);


module.exports =router;
const express=require("express");
const router=express.Router();
const {getOpCode,postData}=require("../controller/controller");

router.get('/bfhl', getOpCode);
router.post('/bfhl', postData);

module.exports=router;
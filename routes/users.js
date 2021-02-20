var express = require('express');
var router = express.Router();
var User = require('../models/User')


router.post("/save",async function(req,res){
  try{
  const {IP,voted} = req.body;
  const user = new User({
    IP,
    Voted : voted
  });
  await user.save();

  res.status(200).json({
    message : "Success"
  });

  }catch(error){
    res.status(500).json({
      message : error.message
    });
  }
})

router.post("/check",async function(req,res){
  try {

    const {receivedIP} = req.body;
    console.log(receivedIP);
    const response = await User.findOne({IP : receivedIP});
    console.log(response)
    if(response){
      res.status(400).json({
        message : "No Vote"
      });
    }else{
      res.status(200).json({
        message : "Vote"
      });
    }
    
  } catch (error) {
    res.status(500).json({
      message : error.message
    });
  }
})

module.exports = router;

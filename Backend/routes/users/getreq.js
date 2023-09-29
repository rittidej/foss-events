const express = require('express');
const user = require('../../models/user');

const demo  = express();

demo.get('/' , async(req,res)=>{

  try {

    let data = await user.find({});
    console.log(data);
    res.status(200).send(data);
    
    
    res.status(200).send("Its Working well");
    
  } catch (error) {
    console.log(error);
  }

})

module.exports = demo;

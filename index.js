var express = require('express');
var router = express.Router();
var reg= require('./../controller/control');

/ GET home page. /
router.get('/', function(req, res) {  

    res.render('index');
});

router.post('/registration',function(req,res){
  res.render('registration');
});
router.post('/regist', function(req, res) {  

    console.log('comming1');
    console.log(req.body.emailId);
        reg.addUser(req.body).then(
        function(result){
           console.log(result);
        },
        function(err){
           console.log(err);
        }
    )
   
});
module.exports = router;


var express = require('express');
var bodyParser = require('body-parser');
var app = express();
function isalpha(s){
    return isNaN(s);
}
port=process.env.port||3000
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/',function(req,res){
    res.send("go to /bfhl")
})
app.post('/bfhl',function(req,res){
    var a=req.body.data;
    var arr=JSON.parse(a);
    console.log(req.body.data)
    var numeric=[]
    var  alphabet=[]
    for(x of arr){
      if(isalpha(x)){
        alphabet.push(x);
      }
      else{
          numeric.push(x);
      }
    }
    res.status(200);
    var reobj={
        is_success:true,
        user_id:"Tushar_Sharma_26_02_2000",
        email: "tusharsharmaci19@acropolis.in",
        roll_number:"0827CI191059",
        numbers:numeric,
        alphabets:alphabet
    }
    var p=JSON.stringify(reobj);
    res.send(p);

})
app.listen(port,function(error){
  if(error){
      throw error;
  }
})
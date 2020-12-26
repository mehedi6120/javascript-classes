//object on javascript

var a = {
    b:45,
    c:"hello world",
    d:function(){
      console.log('this is d function')
    }
    
  }
  var e ={
    b:45,
    c:"hello world",
    d:function(){
      console.log('this is d function')
    }
    
  }
  var x = e;
   
   console.log(a.b);
   a.d();
   x.b= 5;
   console.log(x.b);
   e.d = "hi!"
   console.log(e.d);
  delete e.c;
   console.log(e.c);
   
  // console.log(x==e);
   
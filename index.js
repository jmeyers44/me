$(function(){
  console.log("ready!");
  setInterval(function(){
    
    if($('#welcome').text() === 'Welcome'){
      $('#welcome').text("To My Page");
    }
    else{
      $('#welcome').text("Welcome");
    }
  },1000);
});
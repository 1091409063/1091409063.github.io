$(window).mousemove(function(evt){
  var x = evt.pageX;
  var y = evt.pageY;
  console.log(x);
  
  $("#cross").css("left",x+"px");
  $("#cross").css("top",y+"px");
  
  
  if (x<$(window).width()/2 - 50){
    $("#cat").attr("src","https://upload.cc/i/Rju6q5.png");
  }else if (x>$(window).width()/2 + 50){
    $("#cat").attr("src","https://upload.cc/i/1baOiS.png");
  }else{
    $("#cat").attr("src","https://upload.cc/i/GIhPuR.png");
  }
  if (x<$(window).width()/2 - 50 && y<$(window).height()/2){
    $("#cat").attr("src","https://upload.cc/i/InPCNT.png");
  }
  if (x>$(window).width()/2 + 50 && y<$(window).height()/2){
    $("#cat").attr("src","https://upload.cc/i/hZsH5P.png");
  }
  
  
});
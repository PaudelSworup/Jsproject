$(document).ready(function(){
  $("#carouselExampleIndicators").carousel();
    
  
  $(".craousel-item").click(function(){
    $("#carouselExampleIndicators").carousel(0);
  });
  $(".craousel-item").click(function(){
    $("#carouselExampleIndicators").carousel(1);
  });
  $(".craousel-item").click(function(){
    $("#carouselExampleIndicators").carousel(2);
  });
  
  $(".carousel-control-prev").click(function(){
    $("#carouselExampleIndicators").carousel("prev");
  });
  $(".carousel-control-next").click(function(){
    $("#carouselExampleIndicators").carousel("next");
  });
});
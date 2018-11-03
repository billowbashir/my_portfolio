$(document).ready(function(){
    window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
      if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 100) {
          document.getElementById("gotop").style.display = "block";
      } else {
          document.getElementById("gotop").style.display = "none";
      }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  $("#gotop").click(function(event){
  event.preventDefault();
  topFunction();
  })
  });
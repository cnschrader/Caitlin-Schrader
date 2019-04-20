$(document).ready(function(){
    $('.sidenav').sidenav();

    
});





//   $(function () {
//     $(document).scroll(function () {
//       var $nav = $(".navbar-color");
//       $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
//   });

$(document).ready(function(){
    $(window).scroll(function() { 
      if ($(document).scrollTop() > 800) { 
        $(".navbar-color").css("background-color", "#dadce0"); 
      } else {
        $(".navbar-color").css("background-color", "transparent"); 
      }
    });
  });
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
    $(window).scroll(function() { // check if scroll event happened
      if ($(document).scrollTop() > 800) { // check if user scrolled more than 50 from top of the browser window
        $(".navbar-color").css("background-color", "#dadce0"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
      } else {
        $(".navbar-color").css("background-color", "transparent"); // if not, change it back to transparent
      }
    });
  });
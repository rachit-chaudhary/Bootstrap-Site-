$(function() {

  // Cache the window object
  var $window = $(window);

  // Parallax background effect
  $('section[data-type="background"]').each(function() {

    var $bjobj = $(this); // assigning the object

    $(window).scroll(function(){

      //scroll the background at var speed
      //  the y- position is negative value because we scrolling it UP.

      var yPos = -($window.scrollTop()/$bgobj.data('speed'));

      // Put together our background position
      var coords = '50% '+ yPos + 'px';

      // Move the background
      $bgobj.css({ backgroundPosition: coords });

    }); // End window scroll

  });

});

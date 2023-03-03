/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';

 

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Jorge Marquez.", "a Graphic designer.", "a Web Developer." , "Currently open to work."],
      typeSpeed: 30,
      loop: true,
    });
  });


 

});

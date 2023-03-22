/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';

 


  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  let typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Jorge Marquez.", "a Graphic designer.", "a Web Developer." , "Currently open to work."],
      typeSpeed: 30,
      loop: true,
    });
  });


 

});



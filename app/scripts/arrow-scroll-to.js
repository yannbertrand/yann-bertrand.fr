/**
 * arrow scroll to effect by ZeZeN
 * benavern.github.io
 */
/*global $*/
'use strict';

$('a[data-scroll-to]').on('click', function (e) { // on click
  e.preventDefault();
  var page = $(this).attr('data-scroll-to'); // target
  var speed = 750; // animation duration (ms)
  $('html, body').animate({ scrollTop: $(page).offset().top }, speed); // Go
  return false;
});

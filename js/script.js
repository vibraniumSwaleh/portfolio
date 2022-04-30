$(document).ready(function () {
 $(window).scroll(function () {
  if (this.scrollY > 20) {
   $('.navbar').addClass("sticky-1");
  } else {
   $('.navbar').removeClass("sticky-1");
  }
 })
});
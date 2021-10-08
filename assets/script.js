var nav = document.querySelector('nav');
var nav_links = document.querySelector(".navbar-nav");

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 50) {
    nav.classList.add('bg-dark', 'shadow', 'navbar-dark');
    nav_links.classList.add('link-light');
    nav_links.classList.remove('link-dark');
  } else {
    nav.classList.remove('bg-dark', 'shadow', 'navbar-dark');
    nav_links.classList.add('link-dark');
    nav_links.classList.remove('link-light');
  }
});

$(document).ready(function () {

  //getting ajax through getJSON function
  $.getJSON("text.json", function(data) {
    $.each(data.Tutoring, function(i, element) {
      $("#tutoring").append("<h2>"+element.h1+"</h2>");
      $("#tutoring").append("<p>"+element.p1+"</p>");
      $("#tutoring").append("<p>"+element.p2+"</p>");
      $("#tutoring").append("<p>"+element.p3+"</p>");
    });

    $.each(data.Expose, function(i, element) {
      $("#expose").append("<h2>"+element.h1+"</h2>");
      $("#expose").append("<p>"+element.p1+"</p>");
      $("#expose").append("<p>"+element.p2+"</p>");
      $("#expose").append("<p>"+element.p3+"</p>");
    });

    $.each(data.Newsletter, function(i, element) {
      $("#newsletter").append("<h2>"+element.h1+"</h2>");
      $("#newsletter").append("<p>"+element.p1+"</p>");
    });
  });
});
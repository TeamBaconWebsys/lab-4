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

  $.getJSON("text.json", function (result) {
    $(result).find("socialMedia").each(function () {

      $("#footer").html(
        '<svg xmlns="' + element.xmlns + '" class="' + element.class + '">' +
        '<path d="' + element.path + '"/> </svg>'
      )
    });
  });
});
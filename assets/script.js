var nav = document.querySelector('nav');
var nav_links = document.querySelector(".navbar-nav");

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 50) {
    nav.classList.add('bg-dark', 'shadow');
  } else {
    nav.classList.remove('bg-dark', 'shadow');
  }
});

$(document).ready(function () {

  //getting ajax through getJSON function
  $.getJSON("text.json", function (data) {
    $.each(data.Tutoring, function (i, element) {
      $("#tutoring").append("<h2>" + element.h1 + "</h2>");
      $("#tutoring").append("<p>" + element.p1 + "</p>");
      $("#tutoring").append("<p>" + element.p2 + "</p>");
      $("#tutoring").append("<p>" + element.p3 + "</p>");
    });

    $.each(data.Expose, function (i, element) {
      $("#expose").append("<h2>" + element.h1 + "</h2>");
      $("#expose").append("<p>" + element.p1 + "</p>");
      $("#expose").append("<p>" + element.p2 + "</p>");
      $("#expose").append("<p>" + element.p3 + "</p>");
    });

    $.each(data.Newsletter, function (i, element) {
      $("#newsletter").append("<h2>" + element.h1 + "</h2>");
      $("#newsletter").append("<p>" + element.p1 + "</p>");
    });
  });
});

$(document).ready(function(){
    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(getWeather);
        }else{
            alert("Geolocation not supported by this browser");
        }
    }

    function getWeather(position){
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let API_KEY = '7834331ad78f08893a92c9892832c023';
        let baseURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`;


        $.get(baseURL,function(res){
            let data = res.current;
			let city = data.name
            let temp = Math.floor(data.temp-273 +9/5)+32;
			let temp_min = data.main.temp_min;
			let temp_max = data.main.temp_min;
            let condition = data.weather[0].main;

            $('#city_name').html(`${city}`);
			$('#temp').html(`${temp}°F`);
			$('#range').html(`${temp_min}°F | ${temp_max}°F`);
            $('#condition').html(condition);
        })
        
    }

    getLocation();
})
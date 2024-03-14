var apiKey = "89e0186193cbb2e69498cbba1478d74b"
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Bhopal"


async function checkWeather(city) {
	cityname.innerHTML = city;
	const response = await fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q="+city + `&appid=${apiKey}`);
	var data = await response.json();
	console.log(data)
		temp.innerHTML = data.main.temp
		humidity.innerHTML = data.main.humidity    
		temp_max.innerHTML = data.main.temp_max
		temp_min.innerHTML = data.main.temp_min
		feels_like.innerHTML = data.main.feels_like  
		wind_speed.innerHTML = data.wind.speed
}

var submit = document.querySelector("#submit")
submit.addEventListener("click",(e)=>{
	e.preventDefault();
	// getWeather(city.value)
	checkWeather(city.value)
})

checkWeather("bhopal")



























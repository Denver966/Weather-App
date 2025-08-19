const apiKey = "04b13f3ba2eca140ba65d4a72f3faf1f";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather_icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var deta = await response.json();

    document.querySelector(".city").innerHTML = deta.name;
    document.querySelector(".temp").innerHTML = Math.round(deta.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = deta.main.humidity + "%";
    document.querySelector(".wind").innerHTML = deta.wind.speed + " km/h";
    

    if(deta.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(deta.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(deta.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(deta.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(deta.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }

    document.querySelector(".weather").style.display = "block"
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
});



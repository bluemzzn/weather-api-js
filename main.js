//called api data, use apiUrl and apiKey

const apiKey = "843d210272e8c97963a0de13d3f2ea1d"; //apikey that generated
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="; //rm app id + cityname and we added metric to change the units

async function checkWeather(city) {
    try {

        //parameter city is gonna be in input field | when you deleted city name in api url, so u need to add city parameter.
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status == 404) {
            document.querySelector(".weather").style.display = "none";
            document.querySelector(".error").style.display = "block";
        } else {
            const data = await response.json(); //have only information of data

            if (!response.ok) {
                throw new Error("Could not fetch resources.");
            }

            // from console.log
            // add class from html to query data
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind_speed").innerHTML = data.wind.speed + " km/h";

            //change the weather_icon according to real weather
            const weatherIcon = document.querySelector(".weather_icon");

            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "images/clouds.png";
            }

            else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "images/clear.png";
            }

            else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "images/rain.png";
            }

            else if (data.weather[0].main == "Drizzles") {
                weatherIcon.src = "images/drizzles.png";
            }

            else if (data.weather[0].main == "Snow") {
                weatherIcon.src = "images/snow.png";
            }

            else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "images/mist.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";

        }

    }
    catch (error) {
        console.log(error);
    }
}

//search funtion

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value); //called api from input the search box

});
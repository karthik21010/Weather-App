const APIkey = 'a282daf49aa210e69164ba61244f7bf5';
const APIurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.top input')
const searchBtn = document.querySelector('.top button')
const Center = document.querySelector('.weather_icon')



async function checkWeather(city) {
    const response = await fetch(APIurl + city + `&appid=${APIkey}`);
    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.Center').style.display = 'none';
    }else{
    var data = await response.json();
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)  + "°c";
    document.querySelector('.Humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
    document.querySelector('.MaxTemp').innerHTML = Math.round(data.main.temp_max) + "°c";
    document.querySelector('.MinTemp').innerHTML = Math.round(data.main.temp_min) + "°c";

    if(data.weather[0].main == 'Clouds'){
        Center.src = './clouds.png'
    }else if(data.weather[0].main == 'Clear'){
        Center.src = './clear.png'
    }else if(data.weather[0].main == 'Drizzle'){
        Center.src = './drizzle.png'
    }else if(data.weather[0].main == 'Mist'){
        Center.src = './mist.png'
    }else if(data.weather[0].main == 'Rain'){
        Center.src = './rain.png'
    }else if(data.weather[0].main == 'Snow'){
        Center.src = './snow.png'
    }
    document.querySelector('.error').style.display = 'none';
    document.querySelector('.Center').style.display = 'block';
}
// console.log(data);
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
    // document.querySelector('.Center').style.display = 'block';
});
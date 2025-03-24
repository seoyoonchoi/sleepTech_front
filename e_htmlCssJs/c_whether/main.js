//https://openweathermap.org/

// const city = "Seoul";

const apikey = "b3d2a174bd0bf979992c01994dd21eea";

const lang = "kr";



async function getWeatherData(city){
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=${lang}&units=metric`;
  try{
    const response = await fetch(api);
    if(!response.ok){
      throw new Error(`HTTP ERROR status: ${response.status}`);

    }

    const data = await response.json();
    displayWeather(data);
  }catch(error){
    console.error('Error: ', error);
    document.getElementById('weather-info').innerHTML = 
    `<p>날씨 정보를 불러오는데 실패하였습니다. (${error.message})`;

  }
}



function displayWeather(data) {
  const weatherInfoDiv = document.getElementById('weather-info');
  weatherInfoDiv.innerHTML = `
    <h2>${data.name}'s weather</h2>
    <p> current Temp : ${data.main.temp}</p>
    <p> feel Temp : ${data.main.feels_like}</p>
    <p> weather : ${data.weather[0].main}(${data.weather[0].description}) </p>

    `;

}

document.getElementById('search-button').addEventListener('click',() => {
  const cityInput = document.getElementById('city-input').value;
  const city = capitalizeCity(cityInput);

  if(city ===''){
    alert('put region');
    return;
  }
  getWeatherData(city);
  document.getElementById('city-input').value = '';
});

function capitalizeCity(city){
  const trimCity = city.trim();
  if(trimCity.length === '') return '';

  return trimCity.charAt(0).toUpperCase() +trimCity.slice(1).toLowerCase();
}

document.getElementById('city-input').addEventListener('keyup', (e) =>{
  if(e.key ==="Enter"){
    document.getElementById('search-button').click();

  }
})
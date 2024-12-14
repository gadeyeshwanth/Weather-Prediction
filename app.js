document.getElementById('city-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'f090d0aef4eaca4307169b55c80778ba';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          document.getElementById('weather-info').innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
          `;
        } else {
          document.getElementById('weather-info').innerHTML = `<p>City not found</p>`;
        }
      })
      .catch(err => alert('Error: ' + err));
  });
  
  function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
  }
  
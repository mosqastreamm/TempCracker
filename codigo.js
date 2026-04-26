const claveApi = "d0114fbe42344c6a92e122931262104";
const idioma = "es";
const inputCiudad = document.getElementById("input-ciudad");

async function obtenerClima() {
  const ciudad = inputCiudad.value;

  if (ciudad === "") {
    alert("Por favor, ingresa una ciudad");
    return;
  }

  const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

  const respuesta = await fetch(apiClimaActual);
  const data = await respuesta.json();

  mostrarClima(data);
}

function mostrarClima(data) {
  document.querySelector(".clima-icono").src = data.current.condition.icon;
  document.querySelector(".clima-texto").innerHTML = data.current.condition.text;
  document.querySelector(".temperatura").innerHTML = data.current.temp_c + "°C";
  document.querySelector(".ciudad").innerHTML = data.location.name;
  document.querySelector(".humedad").innerHTML = data.current.humidity + "%";
  document.querySelector(".viento").innerHTML = data.current.wind_kph + " km/h";
}
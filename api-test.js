const claveApi = "AQUI_PEGA_TU_API_KEY";
const idioma = "es";
const ciudad = "Huancayo";

const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

const respuesta = await fetch(apiClimaActual);
const data = await respuesta.json();

console.log(data);
console.log(data.location.name);
console.log(data.current.condition.text);
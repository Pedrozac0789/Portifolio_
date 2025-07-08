
const temperaturaC = document.getElementById("tempoC");
const temperaturaF = document.getElementById("tempoF");
const cidadeName = document.getElementById("name");
const btnBuscar = document.getElementById("btn-buscar");
const nameCity = document.getElementById("name-city");

btnBuscar.addEventListener("click", buscarClima);

async function buscarClima() {
  const city = nameCity.value;
  console.log(city);

  const resultado = await fetch(`https://wttr.in/${city}?format=j1`);

  const dados = await resultado.json();
  console.log(dados);

  const condicoesAtuais = dados.current_condition[0];
  console.log(condicoesAtuais);

  const celsius = condicoesAtuais.temp_C;
  console.log(celsius);

  temperaturaC.textContent = celsius;

  const fahreheit = condicoesAtuais.temp_F;
  console.log(fahreheit);

  temperaturaF.textContent = fahreheit;

  const cidadeNome = dados.nearest_area[0].areaName[0].value;
  console.log(cidadeNome);

  cidadeName.textContent = cidadeNome;
}

// buscarClima();

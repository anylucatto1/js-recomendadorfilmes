//variaveis
let campoIdade
let campoFiccao
let campoDrama
let campoAventura
let campoComedia
let campoAcao
let campoLGBT
let campoRomance
let campoTerror
let campoFantasia
let campoAnimacao
let campoMisterio
let campoThriller

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput();
  createP("");
  
  //checkboxes genero
  campoFiccao = createCheckbox("Ficção científica");
  campoDrama = createCheckbox("Drama");
  campoAventura = createCheckbox("Aventura");
  campoComedia = createCheckbox("Comédia");
  campoAcao = createCheckbox("Ação");
  campoLGBT = createCheckbox("LGBT");
  campoRomance = createCheckbox("Romance");
  campoTerror = createCheckbox("Terror");
  campoFantasia = createCheckbox("Fantasia");
  campoAnimacao = createCheckbox("Animação");
  campoMisterio = createCheckbox("Mistério");
  campoThriller = createCheckbox("Thriller");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  
  let gostaDeFiccao = campoFiccao.checked();
  let gostaDeDrama = campoDrama.checked();
  let gostaDeAventura = campoAventura.checked();
  let gostaDeComedia = campoComedia.checked();
  let gostaDeAcao = campoAcao.checked();
  let gostaDeLGBT = campoLGBT.checked();
  let gostaDeRomance = campoRomance.checked();
  let gostaDeTerror = campoTerror.checked();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAnimacao = campoAnimacao.checked();
  let gostaDeMisterio = campoMisterio.checked();
  let gostaDeThriller = campoThriller.checked();
  
   let recomendacao = geraRecomendacao(idade, gostaDeFiccao, gostaDeDrama, gostaDeAventura, gostaDeComedia, gostaDeAcao, gostaDeLGBT, gostaDeRomance, gostaDeTerror, gostaDeFantasia, gostaDeAnimacao, gostaDeMisterio, gostaDeThriller);
  
  fill("rgb(99,13,99)");
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width/2, height/2);
}

function geraRecomendacao(idade, gostaDeFiccao, gostaDeDrama, gostaDeAventura, gostaDeComedia, gostaDeAcao, gostaDeLGBT, gostaDeRomance, gostaDeTerror, gostaDeFantasia, gostaDeAnimacao, gostaDeMisterio, gostaDeThriller) {
  if (idade >= 18) {
    if (gostaDeComedia) return "Bottoms";
    if (gostaDeLGBT) return "Saltburn";
    if (gostaDeRomance || gostaDeTerror) return "Até os Ossos";
    if (gostaDeFiccao || gostaDeAventura) return "Duna";
    if (gostaDeDrama || gostaDeAcao) return "S.O.S. Malibu";
    if (gostaDeDrama || gostaDeMisterio || gostaDeThriller) return "Anatomia de uma Queda";
    if (gostaDeAcao || gostaDeAventura || gostaDeFantasia) return "Tudo em todo lugar ao mesmo tempo";
    if (gostaDeFiccao || gostaDeDrama) return "Nosso amigo extraordinário";
  } else if (idade >= 16) {
    if (gostaDeComedia) return "Que horas eu te pego";
    if (gostaDeFiccao || gostaDeAventura) return "Duna";
    if (gostaDeDrama || gostaDeAcao) return "S.O.S. Malibu";
    if (gostaDeDrama || gostaDeMisterio || gostaDeThriller) return "Anatomia de uma Queda";
    if (gostaDeAcao || gostaDeAventura || gostaDeFantasia) return "Tudo em todo lugar ao mesmo tempo";
    if (gostaDeFiccao || gostaDeDrama) return "Nosso amigo extraordinário";
  } else if (idade >= 14) {
    if (gostaDeFiccao || gostaDeAventura) return "Duna";
    if (gostaDeDrama || gostaDeAcao) return "S.O.S. Malibu";
    if (gostaDeDrama || gostaDeMisterio || gostaDeThriller) return "Anatomia de uma Queda";
    if (gostaDeAcao || gostaDeAventura || gostaDeFantasia) return "Tudo em todo lugar ao mesmo tempo";
  } else if (idade >= 12) {
    if (gostaDeFiccao || gostaDeDrama) return "Nosso amigo extraordinário";
  }

  if (gostaDeAnimacao || gostaDeAventura || gostaDeComedia) return "Fantástico Sr. Raposo";
  return "Filme não encontrado para suas preferências";
}
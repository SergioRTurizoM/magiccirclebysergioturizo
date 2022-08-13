const circle = document.querySelector("#circle");
const color = document.getElementById("#colores");



circle.className = 'circle'





///////////////////////////////     COLORES ////////////////////////////////////////////////////
function colores() {
  document.getElementById("colores").addEventListener("change", cambioColor, false);
}
colores();

function cambioColor() {
  circle.style.backgroundColor = document.getElementById("colores").value;
}
cambioColor();

///////////////////////////////////////////////////////////////////////////////////
function satura() {
  document
    .getElementById("saturacion")
    .addEventListener("input", cambioSatura, false);
}
satura();

function cambioSatura() {
  document.getElementById("satspan").innerHTML =
    document.getElementById("saturacion").value;
  circle.style.filter = `saturate(${
    document.getElementById("saturacion").value
  }%)`;
}
cambioSatura();


/////////////////////////// DIFUMINADO///////////////////////////////////////////
function difumina() {
  document
    .getElementById("difuminado")
    .addEventListener("input", cambioDifumina, false);
}
difumina();

function cambioDifumina() {
  document.getElementById("difuspan").innerHTML =
    document.getElementById("difuminado").value;
  circle.style.filter = `blur(${
    document.getElementById("difuminado").value
  }px)`;
}
cambioDifumina();

/////////////////////////////// BRILLO /////////////////////////////////////////
function brilla() {
  document
    .getElementById("brillo")
    .addEventListener("input", cambioBrillo, false);
}
brilla();

function cambioBrillo() {
  document.getElementById("brispan").innerHTML =
    document.getElementById("brillo").value;
  circle.style.filter = `brightness(${
    document.getElementById("brillo").value
  }%)`;
}
cambioBrillo();

/////////////////////////// TRANSPARENCIA ///////////////////////////////////////
function transparente() {
  document
    .getElementById("transparencia")
    .addEventListener("input", cambioTransparencia, false);
}
transparente();

function cambioTransparencia() {
  document.getElementById("transpan").innerHTML =
    document.getElementById("transparencia").value;
  circle.style.filter = `opacity(${
    document.getElementById("transparencia").value
  }%)`;
}
cambioTransparencia();

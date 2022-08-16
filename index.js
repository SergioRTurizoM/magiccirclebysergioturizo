const circle = document.getElementById("circle");
const color = document.querySelector("#colores");
const container = document.querySelector(".container");
const controles = document.querySelector('#cuadrocontroles');

circle.className = "circle";


function prueba() {
    const controles = document.querySelector('#cuadrocontroles');
    controles.addEventListener('input',(e)=>{console.log(e.target.children);
    const datos = [...e.target.children];
    const filtrados = datos.filter(element=> element.value !=='').map(e=>e.value);
    console.log(filtrados);
    });

    
}

prueba()



const saturacion = document.querySelector("#saturacion");
const transparencia = document.querySelector("#transparencia");
const brillo = document.querySelector("#brillo");
const contraste = document.querySelector("#contraste");
const difuminado = document.querySelector("#difuminado");
// const tamaño = document.querySelector("#tamaño");
const areatexto = document.getElementById("areatexto");

// ////valores en span//

const spanSat = document.querySelector("#satspan");
const spantrans = document.querySelector("#transpan");
const spanbri = document.querySelector("#brispan");
const spancontraste = document.querySelector("#contrasteSpan");
const spandifu = document.querySelector("#difuspan");
// const spansize = document.querySelector('#tamañoSpan')


function colorinche() {
    document.getElementById("colores").addEventListener("input", cambioColor);
}
colorinche();


function cambioColor() {
  circle.style.backgroundColor = color.value;
  areatexto.textContent = `
    Background-color:  ${color.value} 
    saturate(${saturacion.value}%) 
    blur(${difuminado.value}px)
    opacity(${transparencia.value}%)
    brightness(${brillo.value}%)
    contrast(${contraste.value}%)
    `;

  cambia();
}




cambioColor();

saturacion.addEventListener("input",(e) => {(spanSat.innerHTML = e.target.value);});
transparencia.addEventListener("input",(e) => (spantrans.innerHTML = e.target.value));
brillo.addEventListener("input", (e) => (spanbri.innerHTML = e.target.value));
contraste.addEventListener("input",(e) => (spancontraste.innerHTML = e.target.value));
difuminado.addEventListener("input",(e) => (spandifu.innerHTML = e.target.value));
// tamaño.addEventListener('input', (e)=> spansize.innerHTML=e.target.value)



function cambia() {
  saturacion.addEventListener("input", filtro);
  difuminado.addEventListener("input", filtro);
  transparencia.addEventListener("input", filtro);
  brillo.addEventListener("input", filtro);
  contraste.addEventListener("input", filtro);

}
cambia();


//// USAR e.target.children



// function cambioSaturacion() {
//   circle.style.filter = `saturate(${saturacion.value}%)`;
// }

// cambioSaturacion();

// function cambioDifumina() {
//   circle.style.filter = `blur(${difuminado.value}px)`;
// }
// cambioDifumina();

// function cambioTransparencia() {
//   circle.style.filter = `opacity(${transparencia.value}%)`;
// }
// cambioTransparencia();

// function cambioBrillo() {
//   circle.style.filter = `brightness(${brillo.value}%)`;
// }

// cambioBrillo();

// function cambioContraste() {
//   circle.style.filter = `contrast(${contraste.value}%)`;
// }
// cambioContraste();





function filtro() {
  circle.style.filter = `
  saturate(${saturacion.value}%) 
  blur(${difuminado.value}px) 
  opacity(${transparencia.value}%) 
  brightness(${brillo.value}%) 
  contrast(${contraste.value}%)
  `
}

















// //
// //
// /////////////////////////////////     COLORES ////////////////////////////////////////////////////
// function colores() {
//  document.getElementById("colores").addEventListener("input", cambioColor, false);
// }
// colores();

// function cambioColor() {
//  circle.style.backgroundColor = document.getElementById("colores").value;
//     document.getElementById('areatexto').innerHTML= ` ${document.getElementById('colores').value}`
// }
// cambioColor();

// /////////////////////////////////////////////////////////////////////////////////////
// function satura() {
//  document
//    .getElementById("saturacion")
//    .addEventListener("input", cambioSatura, false);
// }
// satura();

// function cambioSatura() {
//  document.getElementById("satspan").innerHTML =
//    document.getElementById("saturacion").value;
//  circle.style.filter = `saturate(${
//    document.getElementById("saturacion").value
//  }%)`;
// }
// cambioSatura();

// ///////////////////////////// DIFUMINADO///////////////////////////////////////////
// function difumina() {
//  difuminado.addEventListener("input", cambioDifumina, false);
// }
// difumina();

// function cambioDifumina() {

//  circle.style.filter = `blur(${difuminado.value}px)`;
// }
// cambioDifumina();

// ///////////////////////////////// BRILLO /////////////////////////////////////////
// function brilla() {
//  document
//    .getElementById("brillo")
//    .addEventListener("input", cambioBrillo, false);
// }
// brilla();

// function cambioBrillo() {
//  document.getElementById("brispan").innerHTML =
//    document.getElementById("brillo").value;
//  circle.style.filter = `brightness(${
//    document.getElementById("brillo").value
//  }%)`;
// }
// cambioBrillo();

// ///////////////////////////// TRANSPARENCIA ///////////////////////////////////////
// function transparente() {
//  document
//    .getElementById("transparencia")
//    .addEventListener("input", cambioTransparencia, false);
// }
// transparente();

// function cambioTransparencia() {
//  document.getElementById("transpan").innerHTML =
//    document.getElementById("transparencia").value;
//  circle.style.filter = `opacity(${
//    document.getElementById("transparencia").value
//  }%)`;
// }
// cambioTransparencia();

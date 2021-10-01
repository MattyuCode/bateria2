let porcentaje = document.querySelector('.porcentaje');

let porcetajeDeNumeros = document.querySelector('.porcetajeDeNumeros');

navigator.getBattery().then(function (battery) {
    porcentaje.style.width = battery.level * 100 + '%';
    porcetajeDeNumeros.innerHTML = battery.level * 100 + '%';
})


const Body = document.querySelector('body');
const BtnDark = document.querySelector('.boton');
console.log("este el el bton");

BtnDark.onclick = () => {
    Body.classList.toggle('dark'); // este dark lo agrega en el body al dark click en el boton

    if (Body.classList.contains('dark')) {
      
    } 
}


 const btonMENU=document.getElementById("check");
const btn=document.querySelector('.btn__menu')
const buscador=document.querySelector('.form');
const menu=document.querySelector('.navegacion');
const modalbiografi=document.querySelector('.Biografia')
const imagen=document.querySelector('.starlin')
const ContenedorSaludo=document.querySelector('.saludando')


btn.addEventListener('click',(e)=>{

menu.classList.toggle('show')

})

window.addEventListener('load',()=>{

  ContenedorSaludo.innerHTML=`<h1 class="Biografia">
   Hola👋 Soy <span>Starlin Cabral Hernandez </span> un estudiante de informatica dispuesto a trabajar en tus proyectos
</h1>`;
   

})






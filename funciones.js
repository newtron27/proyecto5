

 const btonMENU=document.getElementById("check");
const btn=document.querySelector('.btn__menu')
const buscador=document.querySelector('.form');
const menu=document.querySelector('.navegacion');
const modalbiografi=document.querySelector('.Biografia')
const imagen=document.querySelector('.starlin')



btn.addEventListener('click',(e)=>{

menu.classList.toggle('show')

})





setTimeout(() => {
    modalbiografi.style.visibility='visible';
   

},100);

setTimeout(() => {
    imagen.style.visibility='visible'
    
    

},1100);

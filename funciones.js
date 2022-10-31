

 btonMENU=document.getElementById("check");
btn=document.querySelector('.btn__menu')
buscador=document.querySelector('.form');
menu=document.querySelector('.navegacion');





btn.addEventListener('click',(e)=>{

menu.classList.toggle('show')

})

const modalbiografi=document.querySelector('#sobremi')




setTimeout(() => {
    modalbiografi.style.visibility='visible'
    modalbiografi.style.display='block'
    
  

},0100);
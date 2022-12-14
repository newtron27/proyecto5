

 const btonMENU=document.getElementById("check");
const btn=document.querySelector('.btn__menu')
const buscador=document.querySelector('.form');
const menu=document.querySelector('.navegacion');
const modalbiografi=document.querySelector('.Biografia')
const imagen=document.querySelector('.starlin')
const ContenedorSaludo=document.querySelector('.Biografia')
const PROYECTObtn=document.querySelector('#btnProyectos')
const cajaHERRAMIENTAS=document.querySelector('.herramientas')
    
btn.addEventListener('click',(e)=>{

menu.classList.toggle('show')

})



PROYECTObtn.addEventListener('click',(e)=>{

    cajaHERRAMIENTAS.classList.toggle('mostrarHerramientas')
    
    })
    
   
    


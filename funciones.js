

 btonMENU=document.getElementById("check");
btn=document.querySelector('.btn__menu')
buscador=document.querySelector('.form');
menu=document.querySelector('.navegacion');
logo=document.querySelector('.lo');

Habilidades=document.querySelector('.habilidades')




function EVENmenu (){
btn.addEventListener('click',(e)=>{

menu.classList.toggle('show')

})
}
EVENmenu()

lupa=document.querySelector('.lupa')
buscador=document.querySelector('#search')
lupa.addEventListener('click',()=>{
   
 if(buscador.hidden==false)buscador.hidden=true; 
 else buscador.hidden=false
})


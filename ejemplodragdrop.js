// const caja1=document.querySelector(".caja1");
// const cajac=document.querySelector(".retangulo");

// // caja1.addEventListener('dragstart',()=>console('hola'))
// // caja1.addEventListener('dragstart',()=>alert('tu'))
// caja1.addEventListener("dragstart",(e)=>{
// e.dataTransfer.setData("clase",e.target.className);




// });

// cajac.addEventListener("drop",(e)=>{
//   console.log(e.dataTransfer.getData("clase"))
//     });


//     function operaciones(){
        
// return {       
// sumar:function (num1,num2){
//    return num1+num2;

// }
// , restar:function (num1,num2){
//    return  num1-num2;
// }
// ,
// multiplicar:function(num1,num2){
//  return num1*num2;
//     }
// }
//     }

//   op=operaciones()

//     console.log(op.sumar(1,1))
//     console.log(op.restar(1,1))
//     console.log(op.multiplicar(1,1))





//     function operaciones(){
        
        
//          function sumar(num1,num2){
//            return num1+num2;
        
//         }
//         function restar (num1,num2){
//            return  num1-num2;
//         }
        
//         function multiplicar(num1,num2){
//          return num1*num2;
//             }
//         return{ multiplicar,sumar ,restar};


//             }
        
//           op=operaciones()
        
//             console.log(op.sumar(1,1))
//             console.log(op.restar(1,1))
//             console.log(op.multiplicar(1,1))





         // return {usuario1,usuario2, usuario3,usuario4};

btonMENU=document.getElementById("check");
btn=document.querySelector('.btn__menu')
buscador=document.querySelector('.form');
menu=document.querySelector('.navegacion');
logo=document.querySelector('.lo');

Habilidades=document.querySelector('.habilidades')


DIV=Habilidades.querySelectorAll('div')

Habilidades.addEventListener('click',()=>{
DIV.classList.toggle('desplazamiento')

// alert('hola');
}
)







function EVENmenu (){
btonMENU.addEventListener('click',(e)=>{

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


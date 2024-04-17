//dados iniciais

let currentColor = 'black' ; 

let screen = document.querySelector('#tela') ; 

let ctx = screen.getContext('2d') ;


//events

document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent) ;
}) ;


/* 
Paasso a passo para desenhar no canvas : 

- Quando o click do mause ABAIXAR/estiver clicado, ative o modo desenho 

-Quando o mause se MOVER, se o modo desenho estiver ativado, desenhe .

- Quando o clck do mouse LEVANTAR, desative o modo desenho 

*/

screen.addEventListener('mousedown' , mouseDowmEvent) ;
screen.addEventListener('mousemove' , mouseMoveEvent) ;
screen.addEventListener('mouseup' , mouseUpEvent) ;




//functions 

function mouseDowmEvent(){

    
}

function mouseMoveEvent(){

   
}

function mouseUpEvent(){



}

function colorClickEvent(e){

    let color = e.target.getAttribute('data-color') ;

    currentColor = color ; 

    document.querySelector('.color.active').classList.remove("active") ;

    e.target.classList.add("active") ; //ela ta adicionando a classe active em quem eu to clicando 


}
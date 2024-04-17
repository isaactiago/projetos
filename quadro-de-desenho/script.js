//dados iniciais

let currentColor = 'black' ; 

let canDraw = false ; 

let mouseX = 0 ;
let mouseY = 0; 

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
document.querySelector('.clear').addEventListener('click',clearscreen);




//functions 

function mouseDowmEvent(e){

    canDraw = true ; 

    mouseX = e.pageX - screen.offsetLeft ;
     mouseY = e.pageY - screen.offsetTop ;

}

function mouseMoveEvent(e){

    if(canDraw){
        //e.pageX = mostra a posição horizontal do meu mause ; 
        //e.pageY = mostra a posição vertical do meu mause ; 

        
        draw(e.pageX,e.pageY);
    }
   
}

function mouseUpEvent(){

    canDraw = false ; 


}

function colorClickEvent(e){

    let color = e.target.getAttribute('data-color') ;

    currentColor = color ; 

    document.querySelector('.color.active').classList.remove("active") ;

    e.target.classList.add("active") ; //ela ta adicionando a classe active em quem eu to clicando 


}

function draw(x,y){

     let pointX = x - screen.offsetLeft ;
     let pointY = y - screen.offsetTop ;

     ctx.beginPath() ; // iniciar o processo de desenho 
     ctx.lineWidth = 5 ; //largura da linha 
     ctx.lineJoin = 'round' ; //formato da linha 
     ctx.moveTo(mouseX,mouseY) ; // move o cursor 
     ctx.lineTo(pointX,pointY) ; // faça uma linha ate
     ctx.closePath() ; //fecha o processo de desenho 
     ctx.strokeStyle = currentColor ; //a cor da minha linha ; 
     ctx.stroke() ; // finalizar 

     mouseX = pointX ;

     mouseY = pointY ;



}


function clearscreen(){
    ctx.setTransform(1,0,0,1,0,0) ; 

    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}
//Dados iniciais 

let quadro = {

    a1 : '', a2: '' , a3: '' ,
    b1 : '', b2 : '' , b3 : '' ,
    c1 : '' , c2 : '', c3 : '' ,
} ;

let Playervez = '' ;
let warning = '' ;
let playing = false ; 

reset()




// eventos 

document.querySelector('.reset').addEventListener('click', reset) ;

 document.querySelectorAll('.item').forEach(item =>{// esse for ech vai pecorrer cada um dos items 
    item.addEventListener('click',itemClick) ;
 }) 

//funções 

function itemClick(event){

    //target = mostra qual div voce clicou ; 

    let item = event.target.getAttribute('data-item') ;
   
    if(playing && quadro[item] === ''){

        quadro[item] = Playervez ;

        renderQuadro() ;
        togglePlayer() ;

    }

    

   

}

function reset(){
    warning = '' ;

    let random = Math.floor(Math.random() * 2) ; //gerei um numero aleatorio

    Playervez = random === 0 ? 'x' : 'o';

    for(let i in quadro){
        quadro[i] = '' ;
    }

   playing = true
  


       //reseta e inicia o jogo 
   
    renderQuadro() ;
    renderInfo(); 
   
   
}


function renderQuadro(){

    for(let i in quadro){
        let item = document.querySelector(`div[data-item=${i}]`) ;

        if(quadro[i] !== ''){

            item.innerHTML = quadro[i]
        }else{
            item.innerHTML = '' ;
        }
       //item.innerHTML = quadro[i]
          
    }

    checkGame() ;
    
}

function renderInfo(){

    document.querySelector('.vez').innerHTML = Playervez ;
    document.querySelector('.resultado').innerHTML = warning ;

}

function togglePlayer() {

    if(Playervez === 'x'){

        Playervez ='o' ;

    }else{
        Playervez = 'x';
    }

    renderInfo() ;
}

 function checkGame(){

    if(checkwinnerfor('x')){
        warning = 'O  " x " venceu '

        playing = false ;
    }else if(checkwinnerfor('o')){

        warning = 'O "o" venceu '

        playing = false ; 

    }else if(isFull()){

        warning = 'Deu empate '
        playing = false ;
    }

  
    
}

function checkwinnerfor(Playervez){

    let pos = [
         
        'a1,a2,a3' ,
        'b1,b2,b3' ,
        'c1,c2,c3' ,

        'a1,b1,c1' ,
        'a2,b2,c2' ,
        'a3,b3,c3' ,

        'a1,b2,c3' , 
        'c1,b2,a3'
    ]


    for(let w in pos){
        let pArray = pos[w].split(',') ; //a1 , a2 , a3

       let hasWon = pArray.every(Option => quadro[Option] === Playervez) ;

        if(hasWon){
            return true ; 
        }
    }

    return false ;
}

function isFull(){

    for(let i in quadro){

        if(quadro[i] === ''){
            return false ; 
        }

     

    }

    return true ; 

}


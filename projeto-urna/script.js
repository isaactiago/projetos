//Dados de interfaçe
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span') ;
let descricao = document.querySelector(".d-1-4") ; 
let aviso = document.querySelector(".d-2") ; 
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector(".d-1-3");

//dados de ambiente 

let etapaAtual = 0 ; 
let numero = '' ; 
let Votobranco = false ; 


//functionos 

function comecarEtapa(){
    
    let etapa = etapas[etapaAtual] ;

    let numeroHtml = '' ; 
    numero = '' ; 
    Votobranco = false ;

    for(let i=0; i< etapa.numeros; i++){

        if(i===0){
            numeroHtml += '<div class="numero pisca"></div> ' ; 
        }else{
            numeroHtml += '<div class="numero"></div> '
        }
    
    }

    
    seuVotoPara.style.display = 'none'; 
    cargo.innerHTML = etapa.titulo ;
    descricao.innerHTML = '' ;
    aviso.style.display = 'none' ; 
    lateral.innerHTML = '' ; 
    numeros.innerHTML = numeroHtml ; 
}

function atualizaInterface(){

    let etapa = etapas[etapaAtual] ; 
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true 
        }else{
            return false
        }
    }) ; 

    if(candidato.length > 0){

        candidato = candidato[0] ; 
        seuVotoPara.style.display = 'block';
        descricao.innerHTML = `Nome : ${candidato.nome} <br/> Partido ${candidato.partido}` ;
        aviso.style.display = 'block' ;

        let fotosHtml = '' ; 

        for(let i in candidato.fotos){
            fotosHtml += ` <div class="d-1-image">
                 <img src="images/${candidato.fotos[i].url}" alt="">
                ${candidato.fotos[i].legenda}
             </div>`
        }
        lateral.innerHTML = fotosHtml ;
    }else{
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block' ;
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>"'
       
    }
    

}

function clicou(n){
   let Elnumero = document.querySelector(".numero.pisca");

   if(Elnumero !== null){

        Elnumero.innerHTML = n;
        numero = `${numero}${n}`

        Elnumero.classList.remove('pisca')
        if( Elnumero.nextElementSibling !== null){

            Elnumero.nextElementSibling.classList.add('pisca')// ele pega  o proximo elemento 
        }else{

            atualizaInterface() ; 
        }

       
   }
}



function corrige(){
    comecarEtapa() ; 
}

function branco(){
 
   
        numero = '' ; 
        Votobranco = true ; 
         lateral.innerHTML = '' ; 
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block' ;
        numeros.innerHTML = '' ; 
        descricao.innerHTML = '<div class="aviso--grande pisca"> VOTO EM BRANCO </div>"'
   

}
function confirma(){
    let  etapa = etapas[etapaAtual] ; 

    let votoConfirmado = false ; 

    if(Votobranco === true){
        votoConfirmado = true; 
        console.log('confirmando como brnaco')

    }else if(numero.length === etapa.numeros){
        votoConfirmado = true; 
        console.log("Confirmando como " + numero)
    }

    if(votoConfirmado){
        etapaAtual++ ; 
        if(etapas[etapaAtual] !== undefined){
            comecarEtapa()
        }else{
          
            document.querySelector('.tela').innerHTML = '<div class="aviso--gigante pisca"> FIM </div>"'
        }
        
    }
}


comecarEtapa() ; 

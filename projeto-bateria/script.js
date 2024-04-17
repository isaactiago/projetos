
//1 passo 
document.body.addEventListener('keyup',(event)=>{//essa função recebe os dados 

    playSound(event.code.toLowerCase()) ; // quando apaerta a tecla, eu vo manda a função, e elea vai receber o code que é a tecla apertada .

    //o tolowercase vai transforma o texto em minusculo 
    
}) 

// document.body =  representa o corpo do meu site 


// 3 passo  

document.querySelector('.composer button').addEventListener('click', () =>{
    let input = document.querySelector('#input').value ;

    if(input !== '' ){
        let inputArray = input.split('') ; ; 

        playComposition(inputArray)
    }
})


// 2 passo 

function playSound(sound){ // essa função vai receber qual é o som que eu quero tocar 

    let audioElement = document.querySelector(`#s_${sound}`) // seleciono o arquivo de audio com base na tecla que eu digitei 

    let keyElement = document.querySelector(`div[data-key="${sound}"]`) ;

    //agora eu tenho qeu verificar se achou alguma coisa 

    if(audioElement){
        audioElement.currentTime = 0 ; // o audio nao vai esperar para acabar,ele zera e toca rapidamente 
        audioElement.play() // esse play vai tocar o som especifico 
    }

    if(keyElement) {
        keyElement.classList.add('active')

        setTimeout(()=>{

            keyElement.classList.remove('active')
        }, 300) ;
    }

}


//4 passo 

function playComposition(inputArray){

    let wait = 0 ; 

    for(let inputItem of inputArray){
        
        setTimeout(()=>{

            playSound(`key${inputItem}`) ; 

        },wait)

        wait += 350 ;
        

    }
}








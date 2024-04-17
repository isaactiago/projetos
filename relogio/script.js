
//Elementos 

//1 passo
 let digitalElement = document.body.querySelector('.digital') ; 
 let sElement = document.querySelector(".p_s")
 let mElement = document.querySelector(".p_m")
 let hElement = document.querySelector(".p_h")

//funções 

//3passo 
function Relogio(){

    let date = new Date() ;

    let horas = date.getHours() ;
    let minutos = date.getMinutes() ; 
    let segundos = date.getSeconds() ; 

    let txt = `${fixZero(horas)} : ${fixZero(minutos)} : ${fixZero(segundos)}`

   digitalElement.innerHTML = txt ; 

    //5 passo 
    
    let sdeg =  ( (360 / 60) * segundos) - 90 ; 
    let mdeg =   ( (360 / 60) * minutos) - 90 ; 
    let hdeg = ((360 / 12 ) * horas) - 90

    sElement.style.transform = `rotate(${sdeg}deg)`
    mElement.style.transform = `rotate(${mdeg}deg)`
    hElement.style.transform = `rotate(${hdeg}deg)`


}

//4passo
function fixZero(time){
    if(time < 10 ){ //esse codigo vai acrescentar um zero que falta nos     segundos, minutos e hora
         return '0' + time ; 
    }else{
        return time ; 
    }

    // da pra simplifica em uma linha : 

    // return time < 10 ? '0' + time : time
}



//2 passo 
setInterval(Relogio,1000)
Relogio()



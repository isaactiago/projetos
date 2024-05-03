//dados de interface 

let res = document.querySelector('.res') ;


let peso = document.querySelector('.peso');
let altura = document.querySelector('.altura');



//dados de ambiente 



//functions

function clicar(){

    peso.innerHTML = '' ; 
    altura.innerHTML = '' ; 

    if(peso.value !== '' && altura.value !== ''){
        
       CalcImc()
    }else{
        alert("Preencha os campos!!!")
    }
   
    
}



document.querySelector('.limpar').addEventListener('click',()=>{

    peso.value = '' ;
    altura.value = '';
    res.innerHTML = '' ; 
   
})



 function CalcImc(){

    let calc =(peso.value / (altura.value * 2)).toFixed(2)
    
    


    
    
      if(calc < 18.5){

        res.innerHTML = `Seu imc foi de ${calc}, sua classificação é de MAGREZA`

    }else if(calc >= 18.5 && calc <= 24.9 ){

        res.innerHTML = `Seu imc foi de ${calc}, sua classificação é de NORMAL`
    }else if(calc >= 25 && calc<= 29.9){

        res.innerHTML = `Seu imc foi de ${calc}, sua classificação é de SOBREPESO I`

        
    }else if(calc >= 30 && calc <= 39.9){
        res.innerHTML = `Seu imc foi de ${calc}, sua classificação é de OBESIDADE II`
        
    }else{
        res.innerHTML = `Seu imc foi de ${calc}, sua classificação é de OBESIDADE GRAVE III`

    }
    
    
  


 }
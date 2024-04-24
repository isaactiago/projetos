//dados 

let currentQuestion = 0 ; //variavel que vai armazena qual é a questão atual .

let correctAnsewrs = 0 ; // respostas corretas 


showQuestion()

//eventos 

document.querySelector("button").addEventListener("click", reset); 
//funções 

function showQuestion(){ // função que vai mostrar a questão 

   

    if(questions[currentQuestion]){ //verificar se existe a função 

        let q = questions[currentQuestion] ; 

        let pct = Math.floor((currentQuestion / questions.length ) * 100)

        document.querySelector('.progress--bar').style.width = `${pct}%` ;

        document.querySelector(".questionArea").style.display = 'block' ;
        document.querySelector('.question').innerHTML = `${q.question}`;
       
       let optionsHtml = '' ;

       for(let i in q.options){

           
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span>${q.options[i]} </div>`
       }
        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll(".options .option").forEach(item =>{
            item.addEventListener("click", optionClickEvent) ;
        })




    }else{
        //acabaram as questões 

        finishQuiz() ;
    }

}

function optionClickEvent(e){

    let clickedOption = parseInt( e.target.getAttribute('data-op')) ;

    if(questions[currentQuestion].answer === clickedOption){
        
        correctAnsewrs++ ; //se eu acerta ele aumenta 1 

    }

    currentQuestion++ ; 
    showQuestion() ;
        
   

}

function finishQuiz(){
    document.querySelector(".questionArea").style.display = 'none' ;

    document.querySelector(".scoreArea").style.display = 'block' ;

    document.querySelector('.progress--bar').style.width = `100%`

    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnsewrs}.`

    let pctAnsewrs =  Math.floor((correctAnsewrs / questions.length) * 100) ; 
    document.querySelector(".scorePct").innerHTML=`Acertou ${pctAnsewrs}%`

    if(correctAnsewrs >= 6 && correctAnsewrs <= 10){

        document.querySelector('.scoreText1').innerHTML = 'Parabéns!! '
        document.querySelector('.scoreText1').style.color = 'green '
    }else{
        document.querySelector('.scoreText1').innerHTML = 'Horrivel,tente novamente !! '
        document.querySelector('.scoreText1').style.color = 'red '

    }

    
}

function reset(){

    correctAnsewrs = 0 ; 
    currentQuestion = 0 ;
    document.querySelector(".scoreArea").style.display = 'none' ; 


    showQuestion() ; 
}


//dados

const input = document.querySelector(".input-task")

let minhaLista = [] ; 

let areaLista = document.querySelector(".list")


//functions

function adicionar(){
    if(input.value !== ''){

        adicionarNovaTaefa()
        mostrarTarefas()
    }else{
        alert('Ops !! , digite algo primeiro')
    }
}

function adicionarNovaTaefa(){

    minhaLista.push({
        tarefa : input.value ,
        concluida : false ,
    });
    input.value = '' ;
    mostrarTarefas() ;
    
}

function mostrarTarefas(){

    let  newli  = '';
 

    minhaLista.forEach((item,index) =>{

        newli = newli + `
        
        <li class="task ${item.concluida && "done"}">
            <img src="images/checked.png" alt="check-na-tarefa" onclick="concluir(${index})">
             <p>${item.tarefa}</p>
             <img src="images/trash.png" alt="tarefa-para-lixo" onclick="limpa(${index})">
        </li>
        
        `
    })

    areaLista.innerHTML = newli ; 


    localStorage.setItem('lista', JSON.stringify(minhaLista))
  


}


function limpa(index){
    
    minhaLista.splice(index,1) ; 

    mostrarTarefas() ; 
}

function concluir(index){

   minhaLista[index].concluida =  !minhaLista[index].concluida //ele inverte o valor

   mostrarTarefas() ; 

}


function recarregarTarefas(){

    const tarefasDolocalStorage = localStorage.getItem('lista') ; 

    if(tarefasDolocalStorage){

        minhaLista =JSON.parse( tarefasDolocalStorage )
    }
   

    mostrarTarefas() ; 

}

recarregarTarefas()



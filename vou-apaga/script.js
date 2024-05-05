//dados 

let input = document.querySelector(".input-task")
let list = document.querySelector(".list")

let listaDetarefas = [] ; 



function adicionar(){

  //verificação se tem algo escrito 

  if(input.value !== ''){
        //tem algo ; 

        AddlistaDeTarefas()
  }else{
    alert("Escreva allgo ´rimeiro ")
  }

}


function  AddlistaDeTarefas(){

    listaDetarefas.push({
        tarefas : input.value,
        concluida: false,
    })

    input.value = '' ; 

    MostrarLista()
}



function  MostrarLista(){

    newli =  '' ; 

    listaDetarefas.forEach((item,index)=>{

        newli = newli +  `<li class="task ${listaDetarefas[index].concluida && "done"}">
        <img src="#" alt="check-na-tarefa" onclick="concluir(${index})">
         <p>${item.tarefas}</p>
         <img src="#" alt="tarefa-para-lixo" onclick="limpa(${index})">
        </li>`
    
    
    })

    list.innerHTML = newli ; 

    localStorage.setItem('tarefas',JSON.stringify(listaDetarefas))
    
}

function recarregarTarefas(){
    let localStorageLista = localStorage.getItem('tarefas') ; 

    if(localStorageLista){
        listaDetarefas = JSON.parse(localStorageLista);
    }

    MostrarLista()
}

recarregarTarefas()

function limpa(index){

    listaDetarefas.splice(index,1) ; 

    MostrarLista();

}


function concluir(index){

    listaDetarefas[index].concluida = !listaDetarefas[index].concluida ; 
    MostrarLista() ; 
    
}

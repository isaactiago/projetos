//dados 

let input = document.querySelector('.input-task') ; 

let areaLista = document.querySelector('.list')

let lista = [] ; 



function adicionar(){
    
    if(input.value !== ''){
        //roda alguma fuinção 

        ListaDeTarefas()
    }else{
        alert('Escreva algo primerio')
    }
}



function  ListaDeTarefas(){

    lista.push({
        tarefa : input.value,
        concluida : false,
    })

    input.value = '' ; 
   
    MostraLista()
}


function   MostraLista(){

    
 
  
    let newli = ''
   

   
  
    
    lista.forEach((item,index)=>{
         
        newli = newli +  ` <li class="task ${item.concluida && "done"}">
        <img src="#" alt="check-na-tarefa" onclick="concluir(${index})">
         <p>${item.tarefa}</p>
         <img src="#" alt="tarefa-para-lixo" onclick="lixo(${index})">
        </li>`
       
     })

    areaLista.innerHTML = newli ;

    localStorage.setItem('lista',JSON.stringify(lista));

}

function recarregarTarefas(){

    const tarefasDoLocalStorage = localStorage.getItem('lista');

    if(tarefasDoLocalStorage){
        lista = JSON.parse(tarefasDoLocalStorage) ; 
    }
  

    MostraLista() ; 
}

recarregarTarefas() ; 

function concluir(index){

    lista[index].concluida = !lista[index].concluida ; 
    MostraLista()
    
}



function lixo(index){

    lista.splice(index,1)

    MostraLista()
   
}



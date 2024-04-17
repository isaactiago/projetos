
let res = document.querySelector('.resultado') ;


document.querySelector('.busca').addEventListener("submit", async(event)=>{

   //esse submit vai se quando o cara envia ou for envia o formulario 

   // 1 passo : temos que previnir q o formulario seja enviado . 

   event.preventDefault() ;  // essa função basicamente, ela previne o  comportamento padrao que aquele formulario deveria ter . 

   // 2 passo, é pegar o que ele digito . 

   let input = document.querySelector('#searchInput').value ; 

   // 3 paso : saber se ele digito algo : 

   if(input !== ''){

        Aviso('Carregando...&#128540') ; 

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=d06cdb298fafc83c520d5ab677fc477e&units=metric&lang=pt-br` ; 
        
        // essa função encodeURI ela é obrigatoria pois ela formata certo o jeito quew a url de cidade tem que ir, ou seja, tira os espaços

       let results = await fetch(url) ; // criando minha requisição
  
       let json = await results.json() ; // transformando em objeto 

       
        if(json.cod === 200){
            Mostrarinfo({ // aqui eu monto o objeto que estou mandando para essafu
                name : json.name,
                contry : json.sys.contry,
                temp : json.main.temp ,
                tempicon: json.weather[0].icon,
                windSpeed : json.wind.speed ,
                windAngle : json.wind.deg 

            });
        }else{
            Aviso('Não encontramos esta localização')
        }



        
    }else{
        //alert('ops !!!! algo de errado nao esta certo !!! ')


    }

    
})


// 4 passo = criar uma função especifica para mostrar avisos ou remover 

function Aviso(msg){
    document.querySelector(".aviso").innerHTML = msg ; 

}


// 5 paso = temos que criar uma função para mostrar as informações 

function Mostrarinfo(json){

    Aviso('' ) ; //aqui estou limpando o carregando qeu aparece na tela ; 

    document.querySelector('.resultado').style.display = 'block' ;
    document.querySelector('.titulo').innerHTML = json.name
    document.querySelector('.tempInfo').innerHTML = json.temp
    document.querySelector('.ventoInfo').innerHTML = json.windSpeed + " "+'kh/h'
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)`


    document.querySelector('.temp img').setAttribute('src',`http://openweathermap.org/img/wn/${json.tempicon}@2x.png`) ; 




}
// guerrerio ou Mago 

//Little moster ou BIG monster 

class Carateristica {

    _life = 1 ;
    maxLife = 1 ;
    attack = 0 ;
    defense = 0 ;

    constructor(name){
        this.name = name ;
    }

    get life(){
        return this._life;
    }

    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife ; // Se a nova vida for menor que zero poem zero, senao pode colocar vida normal 
    }
}


class Guerrerio extends Carateristica {

    constructor(name){
        super(name) ; //vai acessar o construtor do Caracteristica
        this._life = 100 ;
        this.attack = 10 ; 
        this.defense = 8 ;
        this.maxLife = this.life ;

    }
}

class Mago extends Carateristica {
    constructor(name){
        super(name) ;
        this._life = 80 ;
        this.attack = 15 ; 
        this.defense = 3 ;
        this.maxLife = this.life ;

    }
}


class Littlemostro extends Carateristica{

    constructor(){
        super('little Moster')
        this._life = 40 ;
        this.attack = 4 ; 
        this.defense = 4 ;
        this.maxLife = this.life ;

    }


}

class Bigmostro extends Carateristica{

    constructor(){
        super('Big Moster')
        this._life = 120 ;
        this.attack = 16 ; 
        this.defense = 6 ;
        this.maxLife = this.life ;

    }


}


class Cenario {

    constructor(lutador1,lutador2,lutador1EL,lutador2EL,logObject){
        this.lutador1 = lutador1 ;
        this.lutador2 = lutador2 ; 
        this.lutador1EL = lutador1EL ;
        this.lutador2EL = lutador2EL
        this.log = logObject ;
    }

    start(){ // função pra começar o jogo 
        this.update() ; 

        //todo; eVENTO do botao de atacar 

        this.lutador1EL.querySelector('.attackbutton').addEventListener('click', () => this.doAttack(this.lutador1,this.lutador2)); // adicionei uma função para quando clicar no butao, um ataque o outro .

        this.lutador2EL.querySelector('.attackbutton').addEventListener('click', () => this.doAttack(this.lutador2,this.lutador1));
    }

    update(){
        //lutador 1 

            this.lutador1EL.querySelector('.name').innerHTML = `${this.lutador1.name} - ${this.lutador1.life.toFixed(1)} HP` ;

            let l1pct = (this.lutador1.life/this.lutador1.maxLife) * 100 ;  
          
            this.lutador1EL.querySelector('.bar').style.width = `${l1pct}%`
        //lutador 2

        this.lutador2EL.querySelector('.name').innerHTML = `${this.lutador2.name} -  ${this.lutador2.life.toFixed(1)} HP` ;

        let l2pct = (this.lutador2.life/this.lutador2.maxLife) * 100 ;

        this.lutador2EL.querySelector('.bar').style.width = `${l2pct}%`
    }

    doAttack(ataque,atacado){
        if(ataque.life <= 0 || atacado.life <= 0 ){
            this.log.addMensagem('atacando cachorro morto ')
            return ;
        }

        let ataqueFator = (Math.random() * 2).toFixed(2);//isso vai gerar ums numeros aleatorios

        let defesaFator = (Math.random() * 2).toFixed(2)

       
    
        let atualataque = ataque.attack * ataqueFator

        let defesaAtual = atacado.defense * defesaFator

        if(atualataque > defesaAtual){

                atacado.life -= atualataque ;
                this.log.addMensagem(`${ataque.name} causou ${atualataque.toFixed(2)} em ${atacado.name}`)
        }else{
            this.log.addMensagem(`${atacado.name} consegui defender `)
        }

        this.update() ;
    }

   
}



class Log{
    list = [] ;

    constructor(listEL){

        this.listEL = listEL ;

    }

    addMensagem(msg){

        this.list.push(msg);
        this.renderizar() ; //vai trANSFORMAR O QUE ESTA NA MINHA LISTA EM VISUAL 

    }

    renderizar(){
        this.listEL.innerHTML = ' ' ; 

        for(let i in this.list){
            this.listEL.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}

let log = new Log(document.querySelector('.log'))

let char = new Guerrerio('isaac') ;


let monster = new Bigmostro()

const cenario = new Cenario(

    char ,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

cenario.start();


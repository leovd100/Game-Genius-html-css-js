let order = [];
let clickedOrder = [];

let score = 0;

// 0 - verde
// 1 - vermelho 
// 2 - Amarelo
// 3 - Azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


//Cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }


}
//Acende a próxima cor
let lightColor = (element, number) => {
    number *= 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//Checa se os botoes clicados são os mesmos da ordem
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação:  ${score}\n Você acertou! Iniciando Próximo nível!`);
        nextLevel();
    }

}

//Funcão para o clique de usuario
let click = (color) =>{
    clickedOrder[clickedOrder.length] = color;
    createElement(color).classList.add('selected');


    setTimeout(() => {
        createElement(color).classList.remove('selected');
    })

    checkOrder();
}






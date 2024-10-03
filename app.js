alert('Bem-Vindo ao jogo do número Secreto!');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1 )
console.log(numeroSecreto);
let numeroDigitado = " ";
let tentativas = 1;

// ENQUANTO O NUMERO DIGITADO NÃO FOR IGUAL AO NUMERO SECRETO
while( numeroDigitado != numeroSecreto){
    numeroDigitado = prompt(`Escolha um número entre 1 a ${numeroMaximo}!`);

    // SE O NUMERO SECRETO FOR IGUAL AO NUMERO DIGITADO
    if(numeroSecreto == numeroDigitado){
        break;
    } else{
        if(numeroDigitado > numeroSecreto){
            alert(`O numero secreto é menor que ${numeroDigitado}`);
        }else{
            alert(`O numero secreto é maior que ${numeroDigitado}`);
        }
    }
    tentativas++
}
// FORMA SIMPLIFICADA DA CONDICIONAL LOGO ABAIXO! 
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou! Descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa} `);

// if(tentativas > 1 ){
//     alert(`Você acertou! Descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativas. `);
// } else{
//     alert(`Você acertou! Descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativa. `);

// }

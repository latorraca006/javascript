// Arrow fuction que soma dois numeros
const soma = (numero1, numero2) => numero1 + numero2;

// Arrow fuction que subtrai dois numeros
const subtracao = (numero1, numero2) => numero1 * numero2;

// Arrow fuction que multiplica dois numeros
const multiplicacao = (numero1, numero2) => numero1 * numero2;

// Arrow fuction que divide dois numero 
const divisao = (numero1, numero2) => numero1 / numero2;

// Arrow fuction que executarOperacao que recebe dois numeros e uma funcao de callback
const executarOperacao = (numero1, numero2, callback) => callback(numero1, numero2);

// Chamando a funcao executarOperacao com a funcao soma como callback
const resultadoSoma = executarOperacao(5, 3, soma);
console.log("Resultado da soma:", resultadoSoma);

// Chamando a funcao executarOperacao com a funcao subtracao como callback
const resultadoSubtracao = executarOperacao(10, 4, subtracao); 
console.log("Resultado da subtracao:", resultadoSubtracao);

// Chamando a funcao executarOperacao com a funcao multiplicacao como callback
const resultadoMultiplicacao = executarOperacao(12, 5, multiplicacao);
console.log("Resultado da multiplicacao:", resultadoMultiplicacao);

// Chamando a funcao executarOperacao com a funcao divisao como callback
const resultadoDivisao = executarOperacao(150,3,divisao);
console.log("Resultado da divisao:", resultadoDivisao);
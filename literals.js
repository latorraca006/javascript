let preco = 19.99;
let desconto = 0.1;

// Usando template literals com expressoes matematicas
let precoFinal = `O preco final do produto com desconto e ${preco * (1 - desconto)} reais.`;
console.log(precoFinal); // Saida: "O preco final do produto com desconto e 17.991 reais."
// Arrow fuction para calcular o dano causado por um ataque em um jogo
const calcularDano = (ataque, defesa) => {
    // Calcula o dano com 80% do ataque menos 20% da defesa
    const dano = ataque * 0.8 - defesa * 0.2;
    // Retorna o dano, garantido que seja pelo menos 0
    return Math.max(0, dano);
};
// Chamando a funcao para calcular o dano causado por um ataque
const danoCausado = calcularDano(50, 20);
console.log("Dano causado pelo ataque:", danoCausado);
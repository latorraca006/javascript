// Funcao para exibir informacoes sobre cada classe de personagem
function exibirInfoClasse(classe) {
switch (classe) {
    case "Guerreiro" :
        console.log("Classes: Guerreiro");
        console.log("Descricao: Os guerreiros sao combatentes corpo a corpo resistentes, especializados no uso de armas e armaduras pesadas. ");
        console.log("Habilidades:Ataquepoderoso, resitencia a danos.");
        break;
        case "Mago":
        console.log("Classe: Mago");
        console.log("Descricao: os magos sao mestres do poder arcano, capazes de lancar feiticos poderosos e controlar os elementos.");
        console.log("Habilidades: Magias de ataque, controle elemental");
        break;
        case "Ladino":
            console.log("Classes: Ladino");
            console.log("Descricao: os ladores sao especialistas em furtividade e astucia, capazes de realizar ataques furtivos e desarmar armadilhas.");
            console.log("Habilidades:Furtividade, ataques preciosos.");
            break;
            default:
            console.log("Classe nao reconhecida. Escolha entre Guerreiro, Mago ou Ladino.");
     }
}

// Chamando a funcao e passando como paramentro "Mago"
exibirInfoClasse("Mago");
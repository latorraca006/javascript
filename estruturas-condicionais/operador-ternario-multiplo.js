let quartosDisponiveis = 5;
let reservaConfirmada = true;

let statusReserva =(reservaConfirmada && quartosDisponiveis >0) ? "Reserva confirmada"
                  :(quartosDisponiveis >0) ? "Aguardando confirmacao"
                  :"Sem quartos disponiveis";

console.log(statusReserva); // Saida: "Reserva confirmada"
  
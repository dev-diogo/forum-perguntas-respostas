

// Evento que é executado ao clicar no botão de enviar
document.getElementById("meu-submit").onclick = function(e) {
    mostrarValor();
    e.preventDefault();
}
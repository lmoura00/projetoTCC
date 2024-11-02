const jogadores = [];

function addPlayerFields() {
    const playerFields = document.createElement("div");
    playerFields.classList.add("player-fields");

    playerFields.innerHTML = `
        <label>Nome:</label>
        <input type="text" name="nome[]" required>
        <label>Matrícula:</label>
        <input type="text" name="matricula[]" required>
        <label>Data de Nascimento:</label>
        <input type="date" name="data_nascimento[]" required>
        <label>Curso:</label>
        <input type="text" name="curso[]" required>
    `;

    document.getElementById("playersContainer").appendChild(playerFields);
}

function displayPlayers() {
    const playerList = document.getElementById("playerList");
    playerList.innerHTML = "";
    jogadores.forEach((jogador, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. Nome: ${jogador.nome}, Matrícula: ${jogador.matricula}, Data de Nascimento: ${jogador.data_nascimento}, Curso: ${jogador.curso}`;
        playerList.appendChild(listItem);
    });
}

document.getElementById("teamForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtenha todos os conjuntos de campos dos jogadores
    const playerFieldsList = document.querySelectorAll(".player-fields");
    playerFieldsList.forEach(playerFields => {
        const nome = playerFields.querySelector('input[name="nome[]"]').value;
        const matricula = playerFields.querySelector('input[name="matricula[]"]').value;
        const data_nascimento = playerFields.querySelector('input[name="data_nascimento[]"]').value;
        const curso = playerFields.querySelector('input[name="curso[]"]').value;

        // Adicione o jogador ao array
        jogadores.push({ nome, matricula, data_nascimento, curso });
    });

    // Exiba a lista de jogadores
    displayPlayers();

    // Limpe o formulário para novos cadastros
    document.getElementById("teamForm").reset();
    document.getElementById("playersContainer").innerHTML = ""; // Remove campos antigos
    addPlayerFields(); // Adiciona um campo de jogador para novo cadastro
});

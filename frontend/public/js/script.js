// HEADER

// HOME

const mainHome = document.getElementById("mainHome")

if (mainHome) {
    // cardHome.style.display = "none";

    function criarCard() {
        const container = document.getElementById("cards");
        const tarefas = JSON.parse(localStorage.getItem("tarefas"));

        tarefas.forEach((tarefa) => {
            container.innerHTML += `
        <div class="card-home">
            <div class="color-home" style="background-color: ${tarefa.color};"></div>
            <div class="name-home">${tarefa.name}</div>

            <div class="buttons-home">
                <button class="view-button-home" data-id="${tarefa.id}">Visualizar</button>
                <button class="delete-button-home" data-id="${tarefa.id}">Deletar</button>
            </div>
        </div>
        `;
        });
    }

    criarCard();

    function deleteCard() {
        ////////////////////////////////

    }

    deleteCard();
}


// NEW TASK

const mainNew = document.getElementById("mainNew")

if (mainNew) {

    function salvarTarefa() {

        const cardForm = document.getElementById("cardForm");
        const cardColor = document.getElementById("cardColor");
        const cardName = document.getElementById("cardName");
        const cardDescription = document.getElementById("cardDescription");
        const cardButton = document.getElementById("cardButton");

        cardButton.addEventListener("click", (event) => {
            event.preventDefault();

            const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

            tarefas.push({
                id: Date.now(),
                color: cardColor.value,
                name: cardName.value,
                description: cardDescription.value
            });

            localStorage.setItem("tarefas", JSON.stringify(tarefas));

            cardForm.reset()
            alert("Tarefa cadastrada com sucesso!")
        });
    };

    salvarTarefa()
}

// SETTINGS
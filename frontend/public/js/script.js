// HEADER

// HOME

const mainHome = document.getElementById("main-home")

if (mainHome) {
    // cardHome.style.display = "none";

    function cardNew() {
        const container = document.getElementById("cards");
        const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

        tarefas.forEach((tarefa) => {
            container.innerHTML += `
        <div class="card-home">
            <div class="color-home" style="background-color: ${tarefa.color};"></div>
            <div class="name-home">${tarefa.name}</div>

            <div class="buttons-home">
                <button class="view-button-home">Visualizar</button>
                <button class="delete-button-home">Deletar</button>
            </div>
        </div>
        `;
        });
    }

    cardNew();
}

// NEW TASK

const mainNew = document.getElementsByClassName(".main-new")

if (mainNew) {

    function cardInfo() {
        const cardForm = document.getElementById("cardForm");
        const cardColor = document.getElementById("cardColor");
        const cardName = document.getElementById("cardName");
        const cardDescription = document.getElementById("cardDescription");
        const cardButton = document.getElementById("cardButton");

        cardButton.addEventListener("click", (event) => {
            event.preventDefault();


            const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

            tarefas.push({
                color: cardColor.value,
                name: cardName.value,
                description: cardDescription.value
            });

            localStorage.setItem("tarefas", JSON.stringify(tarefas));


            cardForm.reset()
            alert("Tarefa cadastrada com sucesso!")
        });
    };

    cardInfo()
}

// SETTINGS
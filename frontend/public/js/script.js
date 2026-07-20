// HEADER

// HOME

const cardHome = document.querySelector(".card-home");
const colorHome = document.getElementById("color-home");
const nameHome = document.getElementById("name-home")

if (cardHome) {
    cardHome.style.display = "none";
}

// NEW TASK

const cardForm = document.getElementById("cardForm");
const cardColor = document.getElementById("cardColor");
const cardName = document.getElementById("cardName");
const cardDescription = document.getElementById("cardDescription");
const cardButton = document.getElementById("cardButton");

function cardInfo() {

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

}

cardInfo()

// SETTINGS
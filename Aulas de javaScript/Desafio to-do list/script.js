// Selecionando os elementos do DOM
const inputTask = document.getElementById("taskInput");
const buttonAdd = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Função que adiciona a tarefa
function addTask() {
    const taskText = inputTask.value;

    if (taskText !== "") {
        // Cria o elemento li
        const li = document.createElement("li");

        // Insere o texto digitado dentro do li
        li.textContent = taskText;

        // Adiciona o li dentro da ul
        taskList.appendChild(li);

        // Limpa o campo de input
        inputTask.value = "";
    } else {
        alert("Digite uma tarefa!");
    }
}

// Evento de clique no botão
buttonAdd.addEventListener("click", addTask);
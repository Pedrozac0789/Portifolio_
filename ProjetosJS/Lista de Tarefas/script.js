// para Buscar localStorage uso o getItem('key')
// JSON.parse para converter de json para objetos
// Para adicionar uso o setItem('key',informação)
// JSON.stringfy() para converter de objetos para json
// como limpar o localstorage clear()

const novaTarefaInput = document.querySelector("#nova-tarefa");
const buttonAdicionar = document.getElementById("adicionar");
const lista = document.querySelector("#lista");

let listaDeTarefas;

function buscarTarefas() {
  listaDeTarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  console.log(listaDeTarefas.length);
  let paragrafo = document.getElementById("aviso");
  if (listaDeTarefas.length === 0) {
    paragrafo.textContent = "Lista de Tarefas vazia!";
  } else {
    paragrafo.textContent = "";
  }
  lista.innerHTML = "";
  listaDeTarefas.map((item, index) => {
    lista.innerHTML += `<li>
   
    <span class=${item.concluido === true ? "riscado" : "progresso"}>
    ${item.value}</span>
    
    
    <button class='btn-concluir' onclick=concluido(${index})>${
      item.concluido === true ? "Voltar" : "Concluir"
    }</button>
          <button class='btn-remover'onclick=remover(${index})>Remover</button>
    
    </li>`;
  });
  console.log(listaDeTarefas);
}

function adicionarTarefa() {
   if (novaTarefaInput.value.trim() === "") {
    alert("Não é possível Adiconar! Por favor digite sua tarefa.");
    return;
  }

  let existe = listaDeTarefas.find(
    (item) => item.value === novaTarefaInput.value.trim()
  );

  console.log(existe !== undefined);
  if (existe !== undefined) {
    alert("Esta Tarefa já existe na sua Lista!");
    novaTarefaInput.value = "";
    return;
  }

  let novaTarefa = {
    value: novaTarefaInput.value,
    concluido: false,
  };

  listaDeTarefas.push(novaTarefa);

  let listaDeTarefasJson = JSON.stringify(listaDeTarefas);
  localStorage.setItem("tarefas", listaDeTarefasJson);
  novaTarefaInput.value = "";
  buscarTarefas();
}

buttonAdicionar.addEventListener("click", adicionarTarefa);

function remover(n) {
  listaDeTarefas = listaDeTarefas.filter((item, index) => index !== n);
  localStorage.setItem("tarefas", JSON.stringify(listaDeTarefas));
  buscarTarefas();
}

function concluido(n) {
  listaDeTarefas.map((item, index) => {
    if (index === n) {
      item.concluido = !item.concluido;
    }
  });
  localStorage.setItem("tarefas", JSON.stringify(listaDeTarefas));
  buscarTarefas();
}

buscarTarefas();

console.log(listaDeTarefas);
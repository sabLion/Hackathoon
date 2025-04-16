// Pegando elementos do HTML
let botao = document.getElementById("botaoAdicionar")
let lista = document.getElementById("listaDeTarefas")
let inputHora = document.getElementById("horaDaTarefa")
let inputDescricao = document.getElementById("descricaoDaTarefa")
let botao2 = document.getElementById("botaoAdicionar2")
let lista2 = document.getElementById("listaDeTarefas2")
let inputHora2 = document.getElementById("horaDaTarefa2")
let inputDescricao2 = document.getElementById("descricaoDaTarefa2")

// Lista simples (sem salvar)
let tarefas = []

// Correção por IA
    // Quando clicar no botão... 
    botao.onclick = function () {
    let hora = inputHora.value;
    let descricao = inputDescricao.value

    // Verifica se os campos foram preenchidos
    if (hora === "" || descricao === "") {
        alert("Preencha os dois campos!")
        return
    }
//Fim da correção por IA


  // Cria a frase da tarefa
  let textoTarefa = hora + " - " + descricao

  // Adiciona na lista (array)
  tarefas.push(textoTarefa)

//Ajuda com a IA
  // Cria o item visual
    let item = document.createElement("li");
    item.textContent = textoTarefa;

    // Quando clicar, marca como concluída (ou remove a marca)
    item.onclick = function () {
    item.classList.toggle("concluida"); // adiciona ou remove a classe
    }
//Fim da ajuda com a IA

lista.appendChild(item);
  // Adiciona o item na tela
  lista.appendChild(item)

  // Limpa os campos
  inputHora.value = ""
  inputDescricao.value = ""

}

// funcao temporal que mostra a data e hora atual no rodape a cada segundo
function atualizarRelogio() {
  var elementoRelogio = document.getElementById("relogio");
  if (elementoRelogio) {
    var agora = new Date();
    elementoRelogio.innerText = "Data e hora atual: " + agora.toLocaleString("pt-BR");
  }
}
atualizarRelogio();
setInterval(atualizarRelogio, 1000);

// impede selecionar uma data anterior ao dia de hoje no calendario
var campoData = document.getElementById("dataAgendamento");
if (campoData) {
  var hoje = new Date().toISOString().split("T")[0];
  campoData.min = hoje;
}

// mostra ou esconde o campo de endereco dependendo do radio button escolhido
function mostrarEndereco() {
  var radioTele = document.getElementById("metodoTele");
  var caixaEndereco = document.getElementById("campoTeleBusca");
  var inputEndereco = document.getElementById("enderecoBusca");

  if (radioTele && radioTele.checked) {
    caixaEndereco.style.display = "block";
    inputEndereco.required = true;
  } else {
    caixaEndereco.style.display = "none";
    inputEndereco.required = false;
  }
}

// esconde o campo de endereco quando clicar no botao limpar
function esconderEndereco() {
  var caixaEndereco = document.getElementById("campoTeleBusca");
  if (caixaEndereco) {
    caixaEndereco.style.display = "none";
  }
}

// pega o formulario de agendamento e exibe um resumo na tela ao enviar
var form = document.getElementById("formAgendamento");
if (form) {
  form.addEventListener("submit", function(event) {
    // evita que a pagina recarregue
    event.preventDefault();

    var cliente = document.getElementById("nomeCliente").value;
    var pet = document.getElementById("nomePet").value;
    var servico = document.querySelector('input[name="servico"]:checked').value;
    var metodo = document.querySelector('input[name="metodo"]:checked').value;
    var data = document.getElementById("dataAgendamento").value;
    var hora = document.getElementById("horario").value;

    var caixaMensagem = document.getElementById("mensagemResultado");
    caixaMensagem.style.display = "block";
    caixaMensagem.innerHTML =
      "<strong>Agendamento realizado!</strong><br>" +
      "Cliente: " + cliente + "<br>" +
      "Pet: " + pet + "<br>" +
      "Servico: " + servico + "<br>" +
      "Metodo: " + metodo + "<br>" +
      "Data: " + data + " as " + hora;

    form.reset();
    esconderEndereco();
  });
}

// funcao temporal que mostra a data e hora atual no rodape a cada segundo
function atualizarRelogio() {
  const elementoRelogio = document.getElementById("relogio");
  if (elementoRelogio) {
    const agora = new Date();
    elementoRelogio.innerText = "Data e hora atual: " + agora.toLocaleString("pt-BR");
  }
}
atualizarRelogio();
setInterval(atualizarRelogio, 1000);

// impede selecionar uma data anterior ao dia de hoje no calendario
const campoData = document.getElementById("dataAgendamento");
if (campoData) {
  const hoje = new Date().toISOString().split("T")[0];
  campoData.min = hoje;
}




// mostra ou esconde o campo de endereco dependendo do radio button escolhido
function mostrarEndereco() {
  const radioTele = document.getElementById("metodoTele");
  const caixaEndereco = document.getElementById("campoTeleBusca");
  const inputEndereco = document.getElementById("enderecoBusca");

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
  const caixaEndereco = document.getElementById("campoTeleBusca");
  if (caixaEndereco) {
    caixaEndereco.style.display = "none";
  }
}

// pega o formulario de agendamento e exibe um resumo na tela ao enviar
const form = document.getElementById("formAgendamento");
if (form) {
  form.addEventListener("submit", function(event) {




    // evita que a pagina recarregue
    event.preventDefault();

    const cliente = document.getElementById("nomeCliente").value;
    const pet = document.getElementById("nomePet").value;
    const servico = document.querySelector('input[name="servico"]:checked').value;
    const metodo = document.querySelector('input[name="metodo"]:checked').value;
    const data = document.getElementById("dataAgendamento").value;
    const hora = document.getElementById("horario").value;

    const caixaMensagem = document.getElementById("mensagemResultado");
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
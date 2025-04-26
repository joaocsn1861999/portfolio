import EmailService from "./services/email.service.js";

export default class ContatoModal {
  _emailService = new EmailService();
  _botaoContato1 = document.getElementById("botaoContato");
  _botaoContato2 = document.getElementById("botaoContato2");
  _botaoFechaModal1 = document.getElementById("modal-sombra");
  _botaoFechaModal2 = document.getElementById("botaoFecharModal");
  _botaoFechaModal3 = document.getElementById("botaoFecharModal2");
  _contatoModal = document.getElementById("contatoModal");
  _formularioContato = document.getElementById("formularioContato");
  _modalContainer = document.getElementById("modal-container");
  _carregamento = document.getElementById("carregamento");
  _mensagemModal = document.getElementById("mensagemModal");

  constructor() {

    this._botaoContato1.addEventListener(
    "click", () =>
      this.abrirModal()
    );

    this._botaoContato2.addEventListener(
      "click", () => 
        this.abrirModal()
    );

    this._botaoFechaModal1.addEventListener(
      "click", () => 
        this.fecharModal()
    );

    this._botaoFechaModal2.addEventListener(
      "click", () => 
        this.fecharModal()
    );

    this._botaoFechaModal3.addEventListener(
      "click", () => 
        this.fecharModal()
    );

    this._formularioContato.addEventListener("submit", (evento) => {
      evento.preventDefault();
      this.enviarEmail();
    });

  }
  
  abrirModal(){
    this._contatoModal.classList.remove("esconder");
  }

  fecharModal(){
    this._formularioContato.reset();
    this._mensagemModal.classList.add("esconder");
    this._formularioContato.classList.remove("esconder");
    this._contatoModal.classList.add("esconder");
  }

  alternarCarregamento(){
    this._carregamento.classList.toggle("esconder");
  }
  
  exibirRetorno(mensagem) {
    this.alternarCarregamento();
    this._mensagemModal.classList.remove("esconder");
    this._mensagemModal.querySelector(".mensagem").textContent = mensagem;
  }
  
  enviarEmail() {
    const nome = this._formularioContato.nome.value;
    const email = this._formularioContato.email.value;
    const mensagem = this._formularioContato.mensagem.value;
    this._formularioContato.classList.add("esconder");
    this.alternarCarregamento();
    this._emailService.enviarContato(nome, email, mensagem)
      .then( res => {
        this.exibirRetorno(res.body.mensagem);
      }).catch((erro) => {
        console.error(erro);
        this.exibirRetorno("Erro ao enviar o email. Tente novamente mais tarde.");
      });
    
  }
  
};
  
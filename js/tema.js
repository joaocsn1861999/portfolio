export default class Tema {
  _botaoAlternaTema = document.getElementById("botaoAlternaTema");
  _iconeLuz = document.getElementById("icone-luz");
  _iconeLua = document.getElementById("icone-lua");

  constructor(){
    this.verificaTemaAtivo();
    this._botaoAlternaTema.addEventListener(
      "click", () => 
        this.alternaTemas()
    );
  }
  
    verificaTemaAtivo() {
      const tema = localStorage.getItem("tema");
  
      if (tema && tema === "escuro" ) {
        document.body.classList.add("escuro");
      }
    }
  
    alternaTemas(){
      document.body.classList.toggle("escuro");
  
      if (document.body.classList.contains("escuro")) {
        this._iconeLuz.classList.toggle("esconder");
        this._iconeLua.classList.toggle("esconder");
        localStorage.setItem("tema", "escuro");
      } else {
        localStorage.removeItem("tema");
        this._iconeLua.classList.toggle("esconder");
        this._iconeLuz.classList.toggle("esconder");
      }
    }
  
  }
  
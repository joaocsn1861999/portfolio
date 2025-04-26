export default class Rolagem {
  _btnRolarAoTopo = document.getElementById("botaoTopo");
  _larguraTela = window.innerWidth;
  _containerPrincipal = document.getElementById("principal");

  constructor(){
    this.verificaRolagemParaBotao();
    this._btnRolarAoTopo.addEventListener(
      "click", () =>
        this.irAoTopo()
    );

  }

  irAoTopo() {
    if ( this._larguraTela > 1024 ) {
      this._containerPrincipal.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  verificaRolagemParaBotao() {
    if ( this._larguraTela > 1024 ) {
      this._containerPrincipal.addEventListener("scroll", () => {
        if (this._containerPrincipal.scrollTop > 150) {
          this._btnRolarAoTopo.classList.remove("esconder");
        } else {
          this._btnRolarAoTopo.classList.add("esconder");
        }
      } )
    } else {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 150) {
          this._btnRolarAoTopo.classList.remove("esconder");
        } else {
          this._btnRolarAoTopo.classList.add("esconder");
        }
      });
    };
  }

}

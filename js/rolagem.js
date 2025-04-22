class Rolagem {
  _larguraTela = window.innerWidth;
  _containerPrincipal = document.getElementById("principal");

  irAoTopo() {
    if ( this._larguraTela > 1024 ) {
      this._containerPrincipal.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  verificaRolagemParaBotao(btnRolarAoTopo) {

    if ( this._larguraTela > 1024 ) {
      this._containerPrincipal.addEventListener("scroll", () => {
        if (this._containerPrincipal.scrollTop > 150) {
          btnRolarAoTopo.classList.remove("esconder");
        } else {
          btnRolarAoTopo.classList.add("esconder");
        }
      } )
    } else {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 150) {
          btnRolarAoTopo.classList.remove("esconder");
        } else {
          btnRolarAoTopo.classList.add("esconder");
        }
      });
    };
    }


}

export default new Rolagem();

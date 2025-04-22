import RedirecionaAoEmail from './js/redireciona-para-email.js';
import Tema from './js/tema.js';
import Rolagem from './js/rolagem.js';
import BaixarCurriculo from './js/baixar-curriculo.js';

class App {
  _btnRolarAoTopo = document.getElementById("botaoTopo");
  _btnBaixarCV = document.getElementById("botaoBaixarCV");
  _botaoContato = document.getElementById("botaoContato");
  _botaoContato2 = document.getElementById("botaoContato2");
  _botaoAlternaTema = document.getElementById("botaoAlternaTema");
  _iconeLuz = document.getElementById("icone-luz");
  _iconeLua = document.getElementById("icone-lua");
  _cabecalho = document.getElementById("cabecalho");
  _navegador = document.getElementById("navegador");

  constructor() {

    Tema.verificaTemaAtivo();
    Rolagem.verificaRolagemParaBotao(this._btnRolarAoTopo);

    this._botaoAlternaTema.addEventListener(
      "click", () => 
        Tema.alternaTemas(this._iconeLuz, this._iconeLua)
    );
    
    this._btnRolarAoTopo.addEventListener(
      "click", () => 
        Rolagem.irAoTopo()
    );

    this._btnBaixarCV.addEventListener(
      "click", () => 
        BaixarCurriculo.baixar()
    );
    
    this._botaoContato.addEventListener(
      "click", () => 
        RedirecionaAoEmail.redirecionar()
    );

    this._botaoContato2.addEventListener(
      "click", () => 
        RedirecionaAoEmail.redirecionar()
    );

  };

};

new App();

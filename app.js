import Tema from './js/tema.js';
import Rolagem from './js/rolagem.js';
import BaixarCurriculo from './js/baixar-curriculo.js';
import ContatoModal from './js/contato-modal.js';

class App {
  constructor() {
    this._tema = new Tema;
    this._rolagem = new Rolagem;
    this._baixarCurriculo = new BaixarCurriculo;
    this._contatoModal = new ContatoModal;
  };
};

new App();
export default class BaixarCurriculo {
  _btnBaixarCV = document.getElementById("botaoBaixarCV");

  constructor(){
    this._btnBaixarCV.addEventListener(
      "click", () =>
        this.baixar()
    );
  }

  baixar() {
    const link = document.createElement("a");
    link.href = "../../assets/downloads/JOÃO CARLOS SILVA NASCIMENTO.docx";
    link.download = "JOÃO CARLOS SILVA NASCIMENTO.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}

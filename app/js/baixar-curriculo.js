class BaixarCurriculo {

  baixar() {
    const link = document.createElement("a");
    link.href = "../../assets/downloads/JOÃO CARLOS SILVA NASCIMENTO.docx";
    link.download = "JOÃO CARLOS SILVA NASCIMENTO.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}

export default new BaixarCurriculo();

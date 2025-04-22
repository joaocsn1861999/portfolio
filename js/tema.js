class Tema {
  
    verificaTemaAtivo() {
      const tema = localStorage.getItem("tema");
  
      if (tema && tema === "escuro" ) {
        document.body.classList.add("escuro");
      }
    }
  
    alternaTemas(iconeLuz, iconeLua){
      document.body.classList.toggle("escuro");
  
      if (document.body.classList.contains("escuro")) {
        iconeLuz.classList.toggle("esconder");
        iconeLua.classList.toggle("esconder");
        localStorage.setItem("tema", "escuro");
      } else {
        localStorage.removeItem("tema");
        iconeLua.classList.toggle("esconder");
        iconeLuz.classList.toggle("esconder");
      }
    }
  
  }
  
export default new Tema();
  
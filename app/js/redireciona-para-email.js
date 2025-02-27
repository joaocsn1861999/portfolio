class RedirecionaAoEmail {
  
    redirecionar() {
      window.location.href = 
        "mailto:joaocsnprofissional@gmail.com?subject=Contato via Portfolio&body=Olá, João Carlos, gostaria de conhecer mais do seu trabalho!";
    }
  
}
  
export default new RedirecionaAoEmail();
  
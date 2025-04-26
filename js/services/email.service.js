export default class EmailService {
    _apiUrl = 'http://localhost:3000/api/v1/email/contato';

    async enviarContato(nome, email, mensagem) {
        const opcoes = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
                mensagem: mensagem
            })
        };

      const res = await fetch(this._apiUrl, opcoes);
        const json = await res.json();
        return {
            status: res.status,
            ok: res.ok,
            headers: res.headers,
            body: json
        };
    }
}
function formulario(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEvento(evento){
        evento.preventDefault();

        const peso = (form.querySelector('.peso'));
        const altura = (form.querySelector('.altura'));
        let somaImc = peso.value / altura.value ** 2

        if (somaImc < 18.5) {
            resultado.innerHTML = `Seu IMC é de ${somaImc.toFixed(2)}, tu tá pesando menos que um bode.`
        }else if (somaImc >= 18.5 && somaImc <= 24.9) {
            resultado.innerHTML = `Seu IMC é de ${somaImc.toFixed(2)}, tá no peso normal.`
        }else if (somaImc >= 25 && somaImc <= 29.9) {
            resultado.innerHTML = `Seu IMC é de ${somaImc.toFixed(2)}, já tá ficando ruim (sobrepeso).`
        }else if (somaImc >= 30 && somaImc <= 34.9) {
            resultado.innerHTML = `Seu IMC é de ${somaImc.toFixed(2)}, já tá virando uma foca (Obesidade grau 1).`
        }else if (somaImc >= 35 && somaImc <= 39.9) {
            resultado.innerHTML = `Seu IMC é de ${somaImc.toFixed(2)}, já tá virando um Leão marinho (Obesidade grau 2).`
        }else{
            resultado.innerHTML = `Seu IMC é de ${somaImc.toFixed(2)}, já corre atrás de uma academia (Obesidade grau 3).`
        }
    }

    form.addEventListener('submit', recebeEvento);
}
formulario();
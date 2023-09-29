const botoesEnviar = document.querySelectorAll('.enviar');
const perguntas = document.querySelectorAll('.pergunta');

perguntas[0].style.display = "block";

botoesEnviar.forEach((botaoEnviar, index) => {
    if (index != 0) {
        botaoEnviar.disabled = true
    }
    botaoEnviar.addEventListener('click', () => {
        if (index === 0) {
            let opcao = document.querySelector('input[value="javascript"]');
            if (opcao.checked) {
                let spanCorreto = document.querySelectorAll('.correta')[index];
                let spanIncorreto = document.querySelectorAll('.incorreta')[index];
                spanCorreto.style.display = 'block';
                spanIncorreto.style.display = 'none';
                botaoEnviar.disabled = true
                botoesEnviar[index + 1].disabled = false;
                perguntas[index + 1].style.display = "block";
                document.querySelectorAll('input[name=\"q1\"]').forEach(element => element.disabled = true)
            }
            else {
                let spanIncorreto = document.querySelectorAll('.incorreta')[index];
                spanIncorreto.style.display = 'block'
            }
        }

        if (index === 1) {
            let opcao = document.querySelector('input[value="luiza"]');
            if (opcao.checked) {
                let spanCorreto = document.querySelectorAll('.correta')[index];
                let spanIncorreto = document.querySelectorAll('.incorreta')[index];
                spanCorreto.style.display = 'block';
                spanIncorreto.style.display = 'none';
                botaoEnviar.disabled = true
                botoesEnviar[index + 1].disabled = false;
                perguntas[index + 1].style.display = "block";
                document.querySelectorAll('input[name=\"q2\"]').forEach(element => element.disabled = true)
            }
            else {
                let spanIncorreto = document.querySelectorAll('.incorreta')[index];
                spanIncorreto.style.display = 'block'
            }
        }

        if (index === 2) {
            let opcao = document.querySelector('input[value="c"]');
            if (opcao.checked) {
                let spanCorreto = document.querySelectorAll('.correta')[index];
                let spanIncorreto = document.querySelectorAll('.incorreta')[index];
                spanCorreto.style.display = 'block';
                spanIncorreto.style.display = 'none';
                botaoEnviar.disabled = true
                botoesEnviar[index + 1].disabled = false;
                perguntas[index + 1].style.display = "block";
                document.querySelectorAll('input[name=\"q3\"]').forEach(element => element.disabled = true)
            }
            else {
                let spanIncorreto = document.querySelectorAll('.incorreta')[index];
                spanIncorreto.style.display = 'block'
            }
        }

        if (index === 3) {
            let opcao = document.querySelector('input[value="osasco"]');
            if (opcao.checked) {
                let spanCorreto = document.querySelectorAll('.correta')[index];
                let spanIncorreto = document.querySelectorAll('.incorreta')[index];
                spanCorreto.style.display = 'block';
                spanIncorreto.style.display = 'none';
                botaoEnviar.disabled = true
                botoesEnviar[index + 1].disabled = false;
                perguntas[index + 1].style.display = "block";
                document.querySelectorAll('input[name=\"q4\"]').forEach(element => element.disabled = true)
            }
            else {
                let spanIncorreto = document.querySelectorAll('.incorreta')[index];
                spanIncorreto.style.display = 'block'
            }
        }

        if (index === 4) {
            let opcao = document.querySelector('input[value="futebol"]');
            if (opcao.checked) {
                let spanCorreto = document.querySelectorAll('.correta')[index];
                let spanIncorreto = document.querySelectorAll('.incorreta')[index];
                spanCorreto.style.display = 'block';
                spanIncorreto.style.display = 'none';
                botaoEnviar.disabled = true
                botoesEnviar[index + 1].disabled = false;
                perguntas[index + 1].style.display = "block";
                document.querySelectorAll('input[name=\"q5\"]').forEach(element => element.disabled = true)
            }
            else {
                let spanIncorreto = document.querySelectorAll('.incorreta')[index];
                spanIncorreto.style.display = 'block'
            }
        }
    }
    );
})
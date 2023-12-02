const form = document.getElementById('form-deposito');
const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');

let formValido = false;


function validaValor() {
    // Obter e converter os valores
    const valorNumerico1 = parseFloat(valor1.value);
    const valorNumerico2 = parseFloat(valor2.value);

    // Comparar os valores
    if (valorNumerico1 > valorNumerico2) {
        // A condição é satisfeita
        formValido = true;
        // Opcional: remova a mensagem de erro se houver
        valor1.classList.remove('error')
        document.querySelector('.error-message').style.display = 'none'
        return formValido;
    } else {
        // A condição não é satisfeita
        formValido = false;
        // Opcional: mostre uma mensagem de erro ou altere a aparência dos inputs
        valor1.classList.add('error')
        document.querySelector('.error-message').style.display = 'block'
        return formValido  
    }
}

form.addEventListener('submit', function(e){

    e.preventDefault();

    const mensagemSucesso = `O Valor 1: <b>${valor1.value}</b> é maior que o Valor 2: <b>${valor2.value}</b>`


    formValido = validaValor()
    if(formValido === true){
        const containerMensagemSucesso = document.querySelector('.sucess-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        valor1.value = ' '
        valor2.value = " "

    } else {
        valor1.style.border = ' 1px red solid '
        document.querySelector('.error-message').style.display = 'block'
        console.log("ERRO")
    }
})


// Adiciona o evento keyup para ambos os campos
valor1.addEventListener('keyup', validaValor);
valor2.addEventListener('keyup', validaValor);
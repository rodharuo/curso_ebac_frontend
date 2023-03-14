const form = document.getElementById('form-comparativo');
let formEValido = false;

function validaValor(valor_A, valor_B) {
    return valor_B > valor_A;
}

form.addEventListener('submit',function(e) {
    e.preventDefault();
    let valor_A = parseFloat(document.getElementById('campo-a').value);
    let valor_B = parseFloat(document.getElementById('campo-b').value);
    const mensagemSucesso = `Sucesso, valor do campo B: <b>${valor_B}</b> é maior que valor do campo A: <b>${valor_A}</b>`;

    formEValido = validaValor(valor_A, valor_B);

if (formEValido) {
    document.querySelector('.error-message').style.display = 'none';
    const containerMensagemSucesso = document.querySelector('.success-message');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';
   // alert(mensagemSucesso);
    valor_A.value = '';
    valor_B.value = '';
}else{
    //alert("Valor inválido, campo B precisa ser maior que campo A");
    document.querySelector('.success-message').style.display = 'none';
    document.querySelector('.error-message').style.display = 'block';
    containerMensagemSucesso.style.display = 'none';
    }
})

console.log(form);
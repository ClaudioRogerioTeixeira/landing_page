let btnReserva = document.querySelector(".btn-reserva");
let  inputNome  = document.querySelectorAll('#nome');
console.log('inputNome: ', inputNome);
console.log('inputNome: ', inputNome.values);

function recaptchaCallBack(e) {
  console.log('event: ', e)
  var btnReserva = document.querySelector('#btn-reserva');
  btnReserva.removeAttribute('disabled');
  btnReserva.style.cursor = 'pointer';
}

btnReserva.addEventListener("click", function(event) { 
  event.preventDefault();

  let captcha = document.querySelector('.g-recaptcha');
  console.log('captcha: ', captcha);

  Toastify({
    text: "Enviado com Sucesso",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "green",
    }
  }).showToast()

  // nome.value = '';
  // tel.value = '';
  // email.value = '';

  const inputs  = document.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i++) {
    document.getElementById(inputs[i].name).value = '';
  }
  
});

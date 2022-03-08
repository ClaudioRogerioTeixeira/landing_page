const btnReserva = document.querySelector(".btn-reserva");
const form = document.querySelector('form');
const nome = document.querySelector('#nome');
const tel = document.querySelector('#tel');
const email = document.querySelector('#email');

var smallNome  = document.querySelector('.smallNome');
smallNome.style.visibility = "hidden";
var smallTel  = document.querySelector('.smallTel');
smallTel.style.visibility = "hidden";
var smallEmail  = document.querySelector('.smallEmail');
smallEmail.style.visibility = "hidden";

function recaptchaCallback() {
  return new Promise(function() {
      btnReserva.removeAttribute('disabled');
      btnReserva.style.cursor = 'pointer';
  }) 
}

btnReserva.addEventListener("click", function(event) {
  'use strict';
  event.preventDefault();
  const nomeValue = nome.value.trim();
  const telValue = tel.value.trim();
  const emailValue = email.value.trim();

  checkInputs();

  if (nomeValue != '' & telValue != '' & emailValue != '') {
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

    // Testes limpar inputs
    // nome.value = '';
    // tel.value = '';
    // email.value = '';

    // const inputs  = document.querySelectorAll('input');
    // for (let i = 0; i < inputs.length; i++) {
    //   document.getElementById(inputs[i].name).value = '';
    // }

    setTimeout( () => {
      form.submit();
    }, 1000);
    
  }
});

function checkInputs() {
  const nomeValue = nome.value.trim();
  const telValue = tel.value.trim();
  const emailValue = email.value.trim();
  
  if (nomeValue === '') {
    errorValidation(nome, "Preencha o campo nome");
  } else {
    successValidation(nome);
  }
  if (telValue === '') {
    errorValidation(tel, "Preencha o campo telefone");
  } else {
    successValidation(tel);
  }
  if (emailValue === '') {
    errorValidation(email, "Preencha o campo email");
  } else {
    successValidation(email)
  }
}

function errorValidation(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.style.visibility = "visible";
  small.innerText = message;
  formControl.className = 'form-control error';
  return false;
}

function successValidation(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.style.visibility = "hidden";
  formControl.className = 'form-control success';
}

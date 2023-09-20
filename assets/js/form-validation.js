(function() {
    "use strict";
  
    const form = document.getElementById('my-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nameValue = nameInput.value.trim();
      const emailValue = emailInput.value.trim();
      const messageValue = messageInput.value.trim();
  
      // Verifique se o campo de nome está vazio
      if (nameValue === '') {
        showError(nameInput, 'Por favor, informe seu nome');
      } else {
        hideError(nameInput);
      }
  
      // Verifique se o campo de e-mail está vazio e se é um e-mail válido
      if (emailValue === '') {
        showError(emailInput, 'Por favor, informe um e-mail válido');
      } else if (!isValidEmail(emailValue)) {
        showError(emailInput, 'Por favor, informe um e-mail válido');
      } else {
        hideError(emailInput);
      }
  
      // Verifique se o campo de mensagem está vazio
      if (messageValue === '') {
        showError(messageInput, 'Por favor, digite sua mensagem');
      } else {
        hideError(messageInput);
      }
  
      // Verifique se todos os campos estão preenchidos corretamente
      if (nameValue !== '' && emailValue !== '' && messageValue !== '') {
        // Se todos os campos são válidos, envie o formulário
        form.submit();
      }
    });
  
    /**
     * Exibe uma mensagem de erro para o campo de entrada fornecido
     * @param {HTMLElement} input - O campo de entrada onde a mensagem de erro será exibida
     * @param {string} message - A mensagem de erro a ser exibida
     */
    function showError(input, message) {
      const formControl = input.parentElement;
      const errorElement = formControl.querySelector('.error-message');
      formControl.classList.add('error');
      errorElement.textContent = message;
    }
  
    /**
     * Remove a mensagem de erro do campo de entrada fornecido
     * @param {HTMLElement} input - O campo de entrada onde a mensagem de erro será removida
     */
    function hideError(input) {
      const formControl = input.parentElement;
      formControl.classList.remove('error');
    }
  
    /**
     * Verifica se o valor fornecido é um e-mail válido
     * @param {string} email - O valor a ser verificado
     * @returns {boolean} - Retorna true se o valor é um e-mail válido, caso contrário, retorna false
     */
    function isValidEmail(email) {
      // Utilize uma expressão regular para verificar se o valor é um e-mail válido
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
  })();
  
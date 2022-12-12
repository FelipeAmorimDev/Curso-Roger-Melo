/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/
const inputUsername = document.querySelector('input');
const form = document.querySelector('form');
const submitBtn = document.querySelector('.button');

const paragraphFeedbackInput = document.createElement('P');
const paragraphFeedbackSubmit = document.createElement('P');

paragraphFeedbackSubmit.setAttribute('data-feedback', 'submit-feedback')


paragraphSubmitInfoSucess = {
  paragraph: paragraphFeedbackSubmit,
  textContent: 'Dados enviados =)',
  className: 'submit-success-feedback',
  previusSibling: submitBtn
};

paragraphSubmitInfoFailed = {
  paragraph: paragraphFeedbackSubmit,
  textContent: 'Por favor, insira um username válido',
  className: 'submit-help-feedback',
  previusSibling: submitBtn
};

paragraphInputInfoValid = {
  paragraph: paragraphFeedbackInput,
  textContent: 'Username válido =)',
  className: 'username-success-feedback',
  previusSibling: inputUsername
}

paragraphInputInfoFailed = {
  paragraph: paragraphFeedbackInput,
  textContent: 'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas',
  className: 'username-help-feedback',
  previusSibling: inputUsername
}

const addElementIntoDOM = ({ paragraph, textContent, className, previusSibling }) => {
  paragraph.textContent = textContent;
  paragraph.setAttribute('class', className)
  previusSibling.insertAdjacentElement('afterend', paragraph)
}

const isAValidUsername = (username) => /^[a-zA-Z]{6,}$/.test(username);

const removeSubmitParagraph = () => {
  const paragraphSubmit = document.querySelector('[data-feedback="submit-feedback"]');

  if (paragraphSubmit) {
    paragraphSubmit.remove();
  }
}

const formValidation = event => {
  event.preventDefault();
  const usernameValue = inputUsername.value;

  if (isAValidUsername(usernameValue)) {
    addElementIntoDOM(paragraphSubmitInfoSucess);
    return;
  }

  addElementIntoDOM(paragraphSubmitInfoFailed);
}

const inputUsernameValidation = event => {
  const usernameValue = event.target.value;
  removeSubmitParagraph();

  if (!isAValidUsername(usernameValue)) {
    addElementIntoDOM(paragraphInputInfoFailed);
    return;
  }

  addElementIntoDOM(paragraphInputInfoValid);
}

inputUsername.addEventListener('input', inputUsernameValidation)

form.addEventListener('submit', formValidation)

/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/



/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
*/


const some = function (list, callback) {
  let isAMatch;
  for (let i = 0; i < list.length; i++) {
    isAMatch = callback(list[i])
    if (isAMatch) {
      break
    }
  }

  return isAMatch
}


console.log(some([1, 0, 10], item => item === 0))
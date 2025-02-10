'use strict';

const arrTodoList = [
  { id: 101, text: 'Thuisopdracht Dynamic Web Development maken' },
  { id: 102, text: 'Cursus Dynamic Web Development studeren' },
  { id: 103, text: 'De les Dynamic Web Development volgen' },
];

// roep deze functie aan om de aangevinkte todo te doorstrepen
const showCheckedTodo = (element) => {
  // voluit
  //   const htmlParentElement = element.parentElement.querySelector('.js-label');
  //   htmlParentElement.classList.toggle('c-todos__label--checked');

  // verkort
  element.parentElement.querySelector('.js-label').classList.toggle('c-todos__label--checked');

  // parentElement selecteert het HTML element waarin het element zich bevindt
  // classList.toggle doet afwisselend een add en remove van de class
};

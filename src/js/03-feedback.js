import throttle from 'lodash.throttle';

const storageKey = 'feedback-form-state';
const feedbackForm = document.querySelector('form.feedback-form');
const elements = feedbackForm.querySelectorAll('[name]');

let formData = {};

feedbackForm.addEventListener('input', throttle(throttleInputCallback, 500));
function throttleInputCallback() {
  for (let element of elements) {
    formData[element.name] = element.value;
  }
  const stringData = JSON.stringify(formData);
  localStorage.setItem(storageKey, stringData);
}

const formState = localStorage.getItem(storageKey);
if (formState !== null) {
  formData = JSON.parse(formState);

  for (let key in formData) {
    let formElement = feedbackForm.elements[key];

    if (formElement !== undefined) {
      formElement.value = formData[key];
    }
  }
}

feedbackForm.addEventListener('submit', submitEvent);
function submitEvent(event) {
  event.preventDefault();
  let formElement = event.currentTarget;
  formElement.reset();
  localStorage.removeItem(storageKey);

  console.log(formData); 
  formData = {}; 
}

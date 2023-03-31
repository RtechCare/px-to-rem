const base = document.getElementById('base-value');
const pxInputField = document.getElementById('px');
const remInputField = document.getElementById('rem');
const resultField = document.getElementById('result');
const pxError = document.getElementById('px-error');
const remError = document.getElementById('rem-error');

function convertToRem() {
  const pxValue = parseFloat(pxInputField.value);
  if (isNaN(pxValue)) {
    pxError.innerHTML = "Please enter a valid number";
    pxInputField.value = '';
    resultField.value = '';
    return;
  } else {
    pxError.innerHTML = '';
  }
  const remValue = pxValue / base.value ;
  remInputField.value = remValue.toFixed(3);
  resultField.value = remValue.toFixed(3) + ' rem';
}

function convertToPx() {
  const remValue = parseFloat(remInputField.value);
  if (isNaN(remValue)) {
    remError.innerHTML = "Please enter a valid number";
    remInputField.value = '';
    resultField.value = '';
    return;
  } else {
    remError.innerHTML = '';
  }
  const pxValue = remValue * base.value ;
  pxInputField.value = pxValue.toFixed(2);
  resultField.value = pxValue.toFixed(2) + 'px';
}

pxInputField.addEventListener('input', convertToRem);
remInputField.addEventListener('input', convertToPx);

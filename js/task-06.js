const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
    const inputLength = Number(inputEl.getAttribute('data-length'));
    const inputValue = event.currentTarget.value;

    if (inputValue.length === inputLength) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
};
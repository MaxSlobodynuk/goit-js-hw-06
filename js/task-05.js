const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onInputChange);


function onInputChange(event) {
    if (nameInput.value === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        event.currentTarget.value;
        nameOutput.textContent = event.currentTarget.value;
    }
}
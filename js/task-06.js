
const input = document.getElementById('validation-input');

input.addEventListener('blur', () => {
const expectedLength = parseInt(input.getAttribute('data-length'));
const trimmedValue = input.value.trim();
const actualLength = trimmedValue.length;

if (actualLength === expectedLength) {
input.classList.remove('invalid');
input.classList.add('valid');
} else {
input.classList.remove('valid');
input.classList.add('invalid');
}
});
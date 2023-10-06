document.querySelector('.login-form').addEventListener('submit', function (event) {
event.preventDefault(); // Перед тим, як обробити відправку форми, вимикаємо перезавантаження сторінки

const email = this.elements.email.value;
const password = this.elements.password.value;

if (!email || !password) {
  alert('All fields must be filled in.');
  } else {
  const formData = {
  email: email,
  password: password,
};

console.log(formData);
this.reset(); // Очищаємо значення полів форми
}
});

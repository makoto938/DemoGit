const container = document.querySelector('.container');
const signupButton = document.querySelector('.signup_section header');
const loginButton = document.querySelector('.login_section header');

loginButton.addEventListener('click', () =>{
    container.classList.add('active');
})

signupButton.addEventListener('click', () =>{
    container.classList.remove('active');
})
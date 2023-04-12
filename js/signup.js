
const formSubmit = document.querySelectorAll('.btn-form')
const signEmail_1 = document.querySelector('.email1')
const confirm_Sign_Up_Email = document.querySelector('.email2')

const sign_up_password = document.querySelector('.password1')
const confirm_Sign_Up_password = document.querySelector('.password2')
formSubmit.addEventListener('submit', (e) => {
   if(signEmail_1 === confirm_Sign_Up_Email && sign_up_password == confirm_Sign_Up_password){
        confirm_Sign_Up_Email = localStorage.setItem('sign_up_email');
        confirm_Sign_Up_password = localStorage.setItem('sign_up_password');
        window.location.assign('index.html');
        e.preventDefault();
   }
   else{
        alert('Please provide a valid email and password')
   }
})
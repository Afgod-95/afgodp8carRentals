function togglePage() {
    document.querySelector(".overlay-signin").classList.toggle("show");
    document.querySelector(".overlay-signup").classList.toggle("hide");
    document.querySelector(".signup").classList.toggle("show");
    document.querySelector(".signin").classList.toggle("hide");
}


const form=document.querySelector('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');


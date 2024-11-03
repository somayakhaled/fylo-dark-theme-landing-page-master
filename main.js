let email = document.getElementById('email');
let submitEmail = document.getElementById('submitEmail');
let error = document.querySelector('.error');

submitEmail.addEventListener('click', (e) => {
    let emailValid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  

    if(email.value === ''){
        emailValid = false
        error.innerHTML = 'Please Enter a Valid Email Address';
    }
    else if(!emailPattern.test(email.value)){
        emailValid = false
        error.innerHTML = 'Please Enter a Valid Email Address';
    }

    if(!emailValid){
        e.preventDefault();
        error.innerHTML = 'Please Enter a Valid Email Address';
    }
})

email.addEventListener('input', () => {
    error.innerHTML = '';
})
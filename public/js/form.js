const loader = document.querySelector('.loader');

const submitBtn = document.querySelector('.submit');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');
const tac = document.querySelector('#terms-and-cond');
const notification = document.querySelector('#notification');

submitBtn.addEventListener('click', () =>{
    if(name.value.length < 3){
        showAlert('name must be 3 letters long');
    }else if(!email.value.length){
        showAlert('enter your email');
    }else if(password.value.length < 8){
        showAlert('your password needs to contain atleast 8 characters');
    }else if(!number.value.length){
        showAlert('enter your phone number');
    }else if(!Number(number.value) || number.value.length<10){
        showAlert('invalid number, enter valid number');
    }else if(!tac.checked){
        showAlert('you must agree to our terms and conditions');
    }else {
        loader.style.display = 'block';
        sendData('/signup',{
            name: name.value,
            email: email.value,
            password: password.value,
            number: number.value,
            tac: tac.checked,
            notification: notification.checked,
            seller: false
        })
    }

})

const sendData = (path,data) => {
    fetch(path,{
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(response => {
        processData(response);
    })
}

const processData = (data) =>{
    loader.style.display = null;
    if(data.alert){
        showAlert(data.alert);
    }
}

const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() =>{
        alertBox.classList.remove('show');
    },3000)
}
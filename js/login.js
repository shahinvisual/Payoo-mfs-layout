document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    // console.log(phoneNumber, pinNumber);

    if(phoneNumber === '01531791084' && pinNumber === '7485'){
        console.log('you are login');
        window.location.href = '/home.html';
    }
    else{
        alert('your input is worng!!');
    }
})
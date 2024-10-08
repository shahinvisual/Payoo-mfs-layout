

document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();

       const addMoney = document.getElementById('add-money').value;
        // console.log(addMoney);
       const inputPin = document.getElementById('pin-input').value; 
        // console.log(inputPin);
        if(inputPin === '1234'){
            const reserveAmount = document.getElementById('reserve-amount').innerText;
            const newBalance = reserveAmount + addMoney;
            // console.log(newBalance);

            const addMoneyNumber = parseInt(addMoney);
            const reserveAmountNumber = parseInt(reserveAmount);
            const updatedBalance = reserveAmountNumber + addMoneyNumber;
            document.getElementById('reserve-amount').innerText = updatedBalance;
            console.log(updatedBalance);
            
        }
        else{
            alert('PIN does not match our records. Please re-enter your PIN.')
        }
    });
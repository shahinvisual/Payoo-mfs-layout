document.getElementById('btn-cash-out-money')
    .addEventListener('click', function(event){
        event.preventDefault();
        
        const cashOut = document.getElementById('cash-out-money').value;
        const cashOutNumber = parseFloat(cashOut);
        const cashOutPin = document.getElementById('cash-out-pin-input').value;
        console.log(cashOut, cashOutPin);

        if(cashOutPin === '1234'){
            const reserveAmount = document.getElementById('reserve-amount').innerText;
            const reserveAmountCashOut = parseFloat(reserveAmount);
            const newBalance = reserveAmountCashOut - cashOutNumber;
            document.getElementById('reserve-amount').innerText = newBalance;
            console.log(newBalance); 
        }
})
document.getElementById('btn-cash-out-form').addEventListener('click', function(){
    console.log('cashOut clicked');
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
})

document.getElementById('btn-add-money-form').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})
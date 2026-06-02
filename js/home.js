
document.getElementById("deposit_btn").addEventListener("click",function(){
    const depositValue = document.getElementById("deposit_value");
    const depositInputValue = depositValue.value;

    const depositAmount = document.getElementById("deposit_amount")

    
    const depositAmountValue = depositAmount.innerText;
    


    depositAmount.innerText = parseFloat(depositInputValue) + parseFloat(depositAmountValue) ;

    const totalBalance = document.getElementById("total_balance")

    const totalBalanceValue = totalBalance.innerText;
    

    totalBalance.innerText = parseFloat(totalBalanceValue) + parseFloat(depositInputValue);


    

    
    depositValue.value = "";

});

document.getElementById("withdraw_btn").addEventListener("click", function(){
    const withdrawInput = document.getElementById("withdraw_input");
    const withdrawInputValue = withdrawInput.value;
    

    const withdrawAmount = document.getElementById("withdraw_amount")
    const withdrawAmountValue = withdrawAmount.innerText;
    

    withdrawAmount.innerText = parseFloat(withdrawInputValue) + parseFloat(withdrawAmountValue)

    const totalBalance = document.getElementById("total_balance")

    const totalBalanceValue = totalBalance.innerText;
    

    totalBalance.innerText = parseFloat(totalBalanceValue) - parseFloat(withdrawInputValue);



    withdrawInput.value= "";
});


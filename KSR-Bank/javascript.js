
//login button interaction
    
    const loginBtn = document.getElementById("login-btton");
    loginBtn.addEventListener("click", function(){

        const loginArea = document.getElementById("login-area");
        loginArea.style.display="none"; 
        const transactionArea=document.getElementById("transaction-area");
        transactionArea.style.display="block"
      

    })


//diposit button interaction
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function(){

  const depositAmount=document.getElementById("deposit-amount").value;
  const depositNumber=parseFloat(depositAmount);
  

//   const currentDeposit= document.getElementById("current-deposit").innerText;
//   const currentDepositNumber= parseFloat(currentDeposit);

//   const totalDeposit= depositNumber+currentDepositNumber;
//   document.getElementById("current-deposit").innerText=totalDeposit;
document.getElementById("deposit-amount").value=""; 

updateSpanText("current-deposit", depositNumber);
updateSpanText("current-balance", depositNumber);



})

function updateSpanText(id, depositNumber){

    const current= document.getElementById(id).innerText;
    const currentNumber= parseFloat(current);
    const total= depositNumber+currentNumber;
    document.getElementById(id).innerText=total;
 }


//withdraw button interaction
const withdrawBtn=document.getElementById("withdraw-btn").addEventListener("click",function(){
    
    const withdrawAmount= document.getElementById("withdraw-amount").value;
    const withdrawNumber=parseFloat(withdrawAmount)
   
    const withdrawBalance= document.getElementById("withdraw-balance").innerText;
    const withdrawcurrentBalance= parseFloat(withdrawBalance);
    
    const TotalWithdraw=withdrawNumber+withdrawcurrentBalance;
    document.getElementById("withdraw-balance").innerText=TotalWithdraw;

    const totalBalance=document.getElementById("current-balance").innerText;
    const totalBalaceAce=parseFloat(totalBalance);
    document.getElementById("current-balance").innerText=totalBalaceAce-withdrawNumber;


    document.getElementById("withdraw-amount").value=""; 

})


    






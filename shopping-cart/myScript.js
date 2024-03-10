//phonecover increase decrease button function with duplicate code----------------
// document.getElementById("SecondPhnPlus").addEventListener("click", function(){

// const caseInput=document.getElementById("phnCount2");
// const caseCount=parseFloat(caseInput.value);
// const newcaseCount=caseCount+1;
// caseInput.value=newcaseCount;

// const secondphnTotal=newcaseCount*59;
// document.getElementById("SecondphnTotal").innerText='$'+secondphnTotal;

// })

// document.getElementById("SecondPhnMinus").addEventListener("click", function(){

//     const caseInput=document.getElementById("phnCount2");
//     const caseCount=parseFloat(caseInput.value);
//     const newcaseCount=caseCount-1;
//     caseInput.value=newcaseCount;

//     const secondphnTotal=newcaseCount*59;
//     document.getElementById("SecondphnTotal").innerText='$'+secondphnTotal;  

// })


////phonecover increase decrease button function with function----------------

// document.getElementById("SecondPhnPlus").addEventListener("click", function(){
    
//     increasedecreaseFunction(true) ;
    
//     })
    
// document.getElementById("SecondPhnMinus").addEventListener("click", function(){
    
//      increasedecreaseFunction(false) 
//     ;
//     })

// function increasedecreaseFunction(isincrese){

//     const caseInput=document.getElementById("phnCount2");
//     const caseCount=parseFloat(caseInput.value);
//     let newcaseCount=caseCount;

//     if(isincrese == true){
//         newcaseCount= caseCount+1;
//     }
//     if(isincrese == false &&  caseCount>0){
//         newcaseCount= caseCount-1;
//     }
//     caseInput.value=newcaseCount;
//     const secondphnTotal=newcaseCount*59;
//     document.getElementById("SecondphnTotal").innerText='$'+secondphnTotal;

// }


//total increate decrease function without duplicacy code.
function increasedecreaseFunction(product, isincrese){

    const productInput=document.getElementById(product +'-count');
    const productCount=parseFloat(productInput.value);
    let newproductCount=productCount;

    if(isincrese == true){
        newproductCount= productCount+1;
    }
    if(isincrese == false &&  productCount>0){
        newproductCount= productCount-1;
    }
    productInput.value=newproductCount;
    //const productTotal=newproductCount*59;
    let productTotal=0;
    if(product=='phn'){
        productTotal=newproductCount*1219;
    }
    if(product=='case'){
        productTotal=newproductCount*59;
    }
    document.getElementById(product +'-total').innerText='$'+productTotal;
    calculateTotal();

}


function calculateTotal(){

const phoneInput=document.getElementById('phn-count');
const phoneCount=parseFloat(phoneInput.value);

const caseInput=document.getElementById('case-count');
const caseCount=parseFloat(caseInput.value);

const totalPrice=phoneCount*1219+caseCount*59;
document.getElementById("totalPrice").innerText='$'+ totalPrice;

const tax=(totalPrice * 0.1).toFixed(2);
const totalTax=parseFloat(tax);
document.getElementById("tax-amount").innerText='$'+ totalTax;

const grantBil=totalPrice+totalTax;
document.getElementById('TotalBill').innerText='$' + grantBil;

}
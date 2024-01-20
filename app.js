// Credit Card Application
let balance  = Number(prompt("Enter your balance:"));
let creditInstallmentAmount = Number(prompt("Enter the Installment Amount:"));

let minimumPaymentAmount  = creditInstallmentAmount * 0.15;
console.log("Minimum payment amount:" + minimumPaymentAmount);
console.log("Total Installment Amount:" + creditInstallmentAmount);

let paymentSelection = Number(prompt("1-CreditInstallment Amount \n 2-Minimum Amount"));
console.log(paymentSelection);
if (paymentSelection == 1) {
    console.log("You Chose to Pay the Credit Installment Amount");


    if (balance  >= creditInstallmentAmount) {
        let result  = balance  - creditInstallmentAmount;
        console.log("Available Balance :" + result );

    } else if (balance  < creditInstallmentAmount) {
        console.log("Insufficient Balance :" + (creditInstallmentAmount - balance ));
    }
    else {
        console.log("An Error Occured:")
    }

} else if (paymentSelection == 2) {
    console.log("Asgari Ödeme Tutarı Seçtiniz");

    if (balance  >= minimumPaymentAmount) {
        let result  = balance  - minimumPaymentAmount;
        console.log("Available Balance" + result );
    } else if (balance  < minimumPaymentAmount) {
        console.log("Insufficient Balance  :" + (minimumPaymentAmount - balance ));
    } else {
        console.log("An Error Occured");
    }


}
else {
    console.log("Please Select a Correct Payment Type");
}





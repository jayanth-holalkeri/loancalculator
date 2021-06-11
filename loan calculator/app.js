
document.getElementById("loan-form").addEventListener("submit",function(e){
    document.getElementById("results").style.display="none";
    document.getElementById("loading").style.display="block";
    setTimeout(calculate, 2000);
    e.preventDefault();
});
function calculate(e){
    const amount = document.getElementById("loan_amount");
    const intrest = document.getElementById("intrest");
    const years = document.getElementById("years");
    const monthlyPayment = document.getElementById("monthlypayment");
    const totalAmount = document.getElementById("totalamount");
    const totalIntrest = document.getElementById("intrestpaid");

    const principle = parseFloat(amount.value);
    const calculatedIntrest = parseFloat(intrest.value)/ 100/ 12;
    console.log(calculatedIntrest)
    const calculatedYears = parseFloat(years.value)*12;
    console.log(calculatedYears)
    const x = Math.pow(1 + calculatedIntrest, calculatedYears);
    console.log(x)
    const monthly=(principle*x*calculatedIntrest)/(x-1);
    console.log(monthly)
    
    if (isFinite(monthly)){
        monthlyPayment.value=monthly.toFixed(2);
        totalAmount.value=(monthly*calculatedYears).toFixed(2);
        totalIntrest.value=(monthly*calculatedYears-principle).toFixed(2);
        console.log(monthlyPayment.value);
        document.getElementById("results").style.display="block";
        document.getElementById("loading").style.display="none";
        document.querySelector("#reset").value="reset";
        

    } else{
        displayerror("please enter all values");
    }
    e.preventDefault();
    document.getElementById("reset").addEventListener("click",resetval);

}
function resetval(){
    document.getElementById("loan_amount").value=0;
    document.getElementById("intrest").value=0;
    document.getElementById("years").value=0;
    document.getElementById("monthlypayment").value=0;
    document.getElementById("totalamount").value=0;
    document.getElementById("intrestpaid").value=0;
//     amount.value=0;
//     intrest.value=0;
//     years.value=0;
//     monthlyPayment.value=0;
//     totalAmount.value=0;
//     totalIntrest.value=0;
 }
function displayerror(error){
    const errorDiv = document.createElement("div");

    errorDiv.className="alert alert-danger";
    errorDiv.appendChild(document.createTextNode(error));
    const card=document.querySelector(".card");
    const heading=document.querySelector(".heading");

    card.insertBefore(errorDiv,heading);
    document.getElementById("loading").style.display="none";
    setTimeout(function() {
        document.querySelector(".alert").remove();
    },3000);
}   

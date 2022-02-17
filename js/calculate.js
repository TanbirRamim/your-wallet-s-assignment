//function declaration
function totalCost(item){
    const food = document.getElementById(item + '-cost');
    const foodCost = parseFloat(food.value);
    return foodCost; // returning foodCost
}
document.getElementById('calculator-button').addEventListener('click', function(){
    
    //=======income input
    
    const income = document.getElementById('income-input').value;
    
    // const incomeMoney = parseFloat(income);

    const incomeInput = document.getElementById('income-input').value;
    const incomeAmount = parseFloat(incomeInput);

    if(incomeAmount > 0 ) {
        //====expenses input
        //=====food
        
        const foodCost = totalCost ('food'); // calling function using parameter
        const rentCost = totalCost ('rent'); // calling function using parameter
        
        //=====clothes
        
        const clothesCost = totalCost('clothes'); // calling function using parameter
        const totalExpenses = document.getElementById('total');
        
        //=====total expenses
        
        totalExpenses.innerText = foodCost + rentCost + clothesCost;
        const totalExpensesNumber = parseFloat(totalExpenses.innerText);
        //Error Handling 
        if( incomeAmount < totalExpensesNumber) {
            document.getElementById('error-two').innerText = 'Your expenses is higher than your INCOME!'
        }else {
            //======initial remaining balance
            const totalBalance = document.getElementById('initial-remaining');
            const totalBalanceText = totalBalance.innerText ;
            totalBalance.innerText = incomeAmount - totalExpensesNumber;
        }
    
    
    }else {
        document.getElementById('income-error').innerText = "Error! Please provide valid number";
    }  
})

document.getElementById('save-button').addEventListener('click', function(){
    
    const income = document.getElementById('income-input').value;
    const saveInput = document.getElementById('save-input').value;
   

    //====== percentage to number

    const totalBalance = document.getElementById('initial-remaining');
    const totalSaving = document.getElementById('saving-amount');

    const totalSavingText = (parseFloat(income) * parseFloat(saveInput) ) / 100;

    totalSaving.innerText = totalSavingText;

    
    
    //======ultimate remaining balance

    const remainingValue = document.getElementById('remaining-balance');
    remainingValue.innerText = totalBalance.innerText - totalSavingText;
});
//==========the end ================//
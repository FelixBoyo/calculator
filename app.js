var myTextArea = document.getElementById("calculatorInput");
var numberButton = document.querySelectorAll(".number");
var operatorButton = document.querySelectorAll(".operator");
var decimalButton = document.querySelector('.decimal');
var equalsButton = document.getElementById("equals");
var clearButton = document.querySelector(".clear");
var myTextArea = document.getElementById('calculatorInput');

//Event listener for number buttons
numberButton.forEach(function(button) {
    button.addEventListener('click', function() {
        handleNumberClick(this.textContent);
    });
});


//Event listener for operator buttons
operatorButton.forEach(function(button) {
	button.addEventListener('click',function(){
		handleOperatorClick(this.textContent)
	} )
});


//Event listener for decimal button
decimalButton.addEventListener('click', function() {
	handleDecimalClick();
});


//Event listener for clear button
clearButton.addEventListener('click',function() {
         clearDisplay();
});

//Event listener for equals button
equalsButton.addEventListener('click', function(){
	calculateResult();
});
 
 // Function to handle number clicks
function handleNumberClick(number) {
    // Check if the current value is '0' and replace it with the clicked number
    if (myTextArea.value === '0') {
        myTextArea.value = number;
    } else {
        myTextArea.value += number;
    }
}
 //Function to handle operator clicks
 function handleOperatorClick(operator) {
          myTextArea.value += operator;
 }

 //Function to handle decimal click
 function handleDecimalClick() {
	//check if text area already has  a decimal
	if (!myTextArea.value.includes ('.')) {
		myTextArea.value += '.';
	}
 }
 
 //Function to clear display
 function clearDisplay() {
	myTextArea.value = '';
 }

 //Function to calculate result
 function calculateResult() {
	try {
		
        myTextArea.value = eval(myTextArea.value);
    } catch (error) {
        // Handle any errors that might occur during evaluation
        myTextArea.value = 'Error';
        console.error(error);
    }
 }
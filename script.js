document.addEventListener("DOMContentLoaded", function() {
    var display = document.getElementById("calcDisplay");
    var buttons = document.querySelectorAll(".calculator td button");
    var clearButton = document.querySelector(".clear");
    
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var buttonText = this.textContent;
            var currentValue = display.value;
            
            if (buttonText === "=") {
                try {
                    var result = eval(currentValue);
                    display.value = result;
                } catch (error) {
                    display.value = "Error";
                }
            } else if (buttonText === ".") {
                if (!currentValue.includes(".")) {
                    display.value += buttonText;
                }
            } else {
                display.value += buttonText;
            }
        });
    });
    
    clearButton.addEventListener("click", function() {
        display.value = display.value.slice(0, -1);
    });
});
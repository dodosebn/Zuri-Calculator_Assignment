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
                    var result = evaluateExpression(currentValue);
                    display.value = result;
                } catch (error) {
                    display.value = "Error";
                }
            } else if (buttonText === "C") {
                display.value = "";
            } else {
                display.value += buttonText;
            }
        });
    });

    function evaluateExpression(exp) {
        exp = exp.replace(/×/g, "*");
        exp = exp.replace(/÷/g, "/"); 

        return eval(exp);
    }

    clearButton.addEventListener("click", function() {
        display.value = display.value.slice(0, -1);
    });
});



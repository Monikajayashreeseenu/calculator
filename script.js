const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "AC") {
            expression = "";
            display.value = "";
        }
        else if (value === "DEL") {
            expression = expression.slice(0, -1);
            display.value = expression;
        }
        else if (value === "=") {
            try {
                // Handle percentage
                let exp = expression.replace(/%/g, "/100");
                expression = eval(exp).toString();
                display.value = expression;
            } catch {
                display.value = "Error";
                expression = "";
            }
        }
        else {
            expression += value;
            display.value = expression;
        }

        
        });
});
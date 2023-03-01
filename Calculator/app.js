var btns = document.querySelectorAll("button");
var display = document.querySelector("#display");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var value = this.innerHTML;

        if (value === "C") {
            display.value = "";
        } else if (value === "=") {
            display.value = eval(display.value);
        } else {
            display.value += value;
        }
    });
}
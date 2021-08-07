var numbers = document.querySelectorAll('.btn')
var display = document.querySelector(".calc-display");
var equal = document.querySelector(".equal");
var clear = document.querySelector(".clear")

numbers.forEach((number) => {
    click = () => {
        number.addEventListener("click", function () {
            display.innerHTML += number.value;
        });
    };
    click();
});

try {
    equal.addEventListener("click", function () {
        var total = 0
        total = eval(display.textContent);
        display.innerHTML = total;
    })
}
catch (err) {
    display.innerHTML = "Error";
}
clear.addEventListener("click", function () {
    display.innerHTML = ""
})
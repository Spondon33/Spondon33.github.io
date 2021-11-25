let weight = document.getElementById("weight")
let height = document.getElementById("height")
let result = document.getElementById("result")
let calculate = document.getElementById("calc")
let type = document.getElementById("type")
let topic = document.getElementById("topic")
let underweight = document.getElementById("underweight")
let normal = document.getElementById("normal")
let overweight = document.getElementById("overweight")
let obese = document.getElementById("obese")
let extremeObese = document.getElementById("extremeObese")


weight.value = "";
height.value = "";
result.value = "";
type.value = "";

calculate.onclick = function () {
    underweight.style.backgroundColor = "";
    normal.style.backgroundColor = "";
    overweight.style.backgroundColor = "";
    obese.style.backgroundColor = "";
    extremeObese.style.backgroundColor = "";
    if (weight.value === "" || height.value === "") {
        result.value = "";
        type.value = "";
    } else {
        result.value = (weight.value / (height.value * height.value)).toFixed(1);
        bmitype();
    }
}

function bmitype() {
    if (result.value < 18.5) {
        type.value = "Underweight";
        underweight.style.backgroundColor = "aliceblue";
    } else if (18.5 <= result.value && result.value <= 24.9) {
        type.value = "Normal";
        normal.style.backgroundColor = "aliceblue";
    } else if (25.0 <= result.value && result.value <= 29.9) {
        type.value = "Overweight";
        overweight.style.backgroundColor = "aliceblue";
    } else if (30.0 <= result.value && result.value <= 40.0) {
        type.value = "Obese";
        obese.style.backgroundColor = "aliceblue";
    } else if (result.value > 40.0) {
        type.value = "Extreme Obese";
        extremeObese.style.backgroundColor = "aliceblue";
    }
}
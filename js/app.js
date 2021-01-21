const boxOut = document.querySelector(".box-out");
const out = document.querySelector(".out-js");
const slider = document.querySelector(".slider");
const sliderInput = document.querySelector(".slider-input");
const inputText = document.querySelector(".input-text");


let slidFunc = function () {
    let values = slider.value;

    out.innerHTML = values;
    sliderInput.value = values;
    boxOut.style.left = values - 4 + "%";

};
let inputFunc = function () {

    boxOut.style.left = sliderInput.value + "%";
    if (sliderInput.value < 0) {
        out.innerHTML = 0;
        slider.value = 0;
        boxOut.style.left = 0;
        inputText.innerHTML = "Введите значение больше 0";
    } else if (sliderInput.value > 100) {
        out.innerHTML = 100;
        slider.value = 100;
        boxOut.style.left = 100 + "%";
        inputText.innerHTML = "Введите значение меньше 100";
    } else {
        out.innerHTML = sliderInput.value;
        slider.value = sliderInput.value;
        inputText.innerHTML = "";
    }
}

slidFunc();
slider.oninput = slidFunc;
sliderInput.oninput = inputFunc;


const inputLeft = document.querySelector(".input-left");
const inputRight = document.querySelector(".input-right");
const cursorLeft = document.querySelector(".cursor-left");
const cursorRight = document.querySelector(".cursor-right");
const sliderRange = document.querySelector(".slider-range");
const valueLeft = document.querySelector(".value-l");
const valueRight = document.querySelector(".value-r");
const boxLeft = document.querySelector(".value-left");
const boxRight = document.querySelector(".value-right");
const inputValueLeft = document.querySelector(".valueleft");
const inputValueRight = document.querySelector(".valueright");




let rangeFunc = function () {

    cursorLeft.style.left = inputLeft.value - 2 + "%";
    cursorRight.style.left = inputRight.value - 2 + "%";
    sliderRange.style.left = inputLeft.value - 2 + "%";
    boxLeft.style.left = inputLeft.value + "%";
    valueLeft.style.left = inputLeft.value + "%";
    valueLeft.innerHTML = inputLeft.value;

    boxRight.style.left = inputRight.value + "%";
    valueRight.style.left = inputRight.value + "%";
    valueRight.innerHTML = inputRight.value;
    inputValueLeft.value = inputLeft.value;
    inputValueRight.value = inputRight.value;



};
let hui = function () {
    inputRight.value = inputValueRight.value;
    inputLeft.value = inputValueLeft.value;
    cursorLeft.style.left = inputLeft.value - 2 + "%";
    cursorRight.style.left = inputRight.value - 2 + "%";
    sliderRange.style.left = inputLeft.value - 2 + "%";
    boxLeft.style.left = inputLeft.value + "%";
    valueLeft.style.left = inputLeft.value + "%";
    valueLeft.innerHTML = inputLeft.value;

    boxRight.style.left = inputRight.value + "%";
    valueRight.style.left = inputRight.value + "%";
    valueRight.innerHTML = inputRight.value;
}

rangeFunc();
inputLeft.oninput = rangeFunc;
inputRight.oninput = rangeFunc;
inputValueLeft.oninput = hui;

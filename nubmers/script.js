let fisrtnumber = 0;
let secondnumber = 0;
let thirdnumber = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.getElementById('btn_1').addEventListener(('click'), function () {
    console.clear();
    console.log(getRandomInt(4) + 1);
    console.log(getRandomInt(3) + 1);
    console.log(getRandomInt(12) + 1);
})
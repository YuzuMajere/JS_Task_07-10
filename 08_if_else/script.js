let minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));

minValue = (minValue === NaN) ? minValue = 0 : minValue;
maxValue = (maxValue === NaN) ? maxValue = 100 : maxValue;
minValue = (minValue <= -999) ? minValue = -999 : minValue;
minValue = (minValue >= 998) ? minValue = 0 : minValue;
maxValue = (maxValue >= 999) ? maxValue = 999 : maxValue;
maxValue = (maxValue <= -999) ? maxValue = -100 : maxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

console.log('1', minValue, maxValue);

document.getElementById('btnRetry').addEventListener('click', function () {
    // minValue = 0;
    // maxValue = 100;
    orderNumber = 0;
    minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
    minValue = (minValue === NaN) ? minValue = 0 : minValue;
    maxValue = (maxValue === NaN) ? maxValue = 100 : maxValue;
    minValue = (minValue <= -999) ? minValue = -999 : minValue;
    minValue = (minValue >= 998) ? minValue = 0 : minValue;
    maxValue = (maxValue >= 999) ? maxValue = 999 : maxValue;
    maxValue = (maxValue <= -999) ? maxValue = -100 : maxValue;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2);
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    gameRun = true;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random() * 3);
            let answerPhrase = '';
            switch (phraseRandom) {
                case 1:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                    break;
                case 2:
                    answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
                    break;
                case 3:
                    answerPhrase = `Так нечестно!\n\u{1F914}`;
                    break;
                default:
                    answerPhrase = 'default';
                    break;
            }
            // const answerPhrase = (phraseRandom === 1) ?
            //     `Вы загадали неправильное число!\n\u{1F914}` : (phraseRandom === 2) ? `Я сдаюсь..\n\u{1F92F}` : 'Так нечестно!';
            answerField.innerText = answerPhrase;
            console.log(minValue, maxValue, answerNumber);
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            if (Math.abs(answerNumber) > Math.abs(maxValue)) {
                answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                answerField.innerText = answerPhrase;
                gameRun = false;
            } else {
                orderNumberField.innerText = orderNumber;
                const phraseRandom2 = Math.round(Math.random() * 3);
                switch (phraseRandom2) {
                    case 1:
                        answerField.innerText = `Вы загадали число ${answerNumber }?`;
                        break;
                    case 2:
                        answerField.innerText = `Ваше число: ${answerNumber }, я точно знаю!`;
                        break;
                    case 3:
                        answerField.innerText = `Что-то мне подсказывает, ваше число -- ${answerNumber }!`;
                        break;
                }
            }
            console.log(minValue, maxValue, answerNumber);
            // console.log('2', minValue, maxValue);
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom3 = Math.round(Math.random() * 3);
            let answerPhrase = '';
            switch (phraseRandom3) {
                case 1:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                    break;
                case 2:
                    answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
                    break;
                case 3:
                    answerPhrase = `Так нечестно!\n\u{1F914}`;
                    break;
                default:
                    answerPhrase = 'default';
                    break;
            }
            answerField.innerText = answerPhrase;
            console.log(minValue, maxValue, answerNumber);
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            if (Math.abs(answerNumber) < Math.abs(minValue)) {
                answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                answerField.innerText = answerPhrase;
                gameRun = false;
            } else {
                orderNumberField.innerText = orderNumber;
                const phraseRandom4 = Math.round(Math.random() * 3);
                switch (phraseRandom4) {
                    case 1:
                        answerField.innerText = `Вы загадали число ${answerNumber }?`;
                        break;
                    case 2:
                        answerField.innerText = `Ваше число: ${answerNumber }, я точно знаю!`;
                        break;
                    case 3:
                        answerField.innerText = `Что-то мне подсказывает, ваше число -- ${answerNumber }!`;
                        break;
                }
            }
            console.log(minValue, maxValue, answerNumber);
        }
    }
})


document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        const phraseRandom5 = Math.round(Math.random() * 3);
        switch (phraseRandom5) {
            case 1:
                answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
                break;
            case 2:
                answerField.innerText = `Меня не проведешь! Я знаю твое число!\n\u{1F60E}`;
                break;
            case 3:
                answerField.innerText = `Легко!\n\u{1F60E}`;
                break;
        }
        gameRun = false;
    }
})
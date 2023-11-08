let minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));

// const exampleModal = document.getElementById('exampleModal')
// if (exampleModal) {
//     exampleModal.addEventListener('show.bs.modal', event => {
//         const button = event.relatedTarget
//         // const recipient = button.getAttribute('data-bs-whatever')
//         const modalTitle = exampleModal.querySelector('.modal-title')
//         const modalBodyInput = exampleModal.querySelector('.modal-body input')

//         // modalTitle.textContent = ('Минимальное знание числа для игры', '0');
//         modalBodyInput.value = ('Минимальное знание числа для игры', '0');
//     })
// }

minValue = (isNaN(minValue)) ? minValue = 0 : minValue;
maxValue = (isNaN(maxValue)) ? maxValue = 100 : maxValue;
minValue = (minValue <= -999) ? minValue = -999 : minValue;
maxValue = (maxValue >= 999) ? maxValue = 999 : maxValue;

let answerNumberInWords = '';

const randomNumber = (max = 3, min = 1) => {
    let rN = Math.round(Math.random() * (max - min) + min);
    return rN;
}

const numberInWords = n => { //ГЕНЕРАТОР ПРЕВОДА ЧИСЕЛ В СЛОВЕСТНЫЙ ЭКВИВАЛЕНТ
    if (Number.isNaN(n)) {
        return '?';
    }
    if (n === 0) {
        return 'ноль';
    }

    const result = [];
    if (n < 0) {
        result.push('минус');
        n = -n;
    }

    const u = n % 10;
    const t = Math.floor(n % 100 / 10);
    const h = Math.floor(n / 100);

    if (h > 0) {
        result.push([
            undefined, 'сто', 'двести', 'триста', 'четыреста',
            'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'
        ][h]);
    }

    if (t === 1) {
        result.push([
            'десять', 'одиннадцать',
            'двенадцать', 'тринадцать',
            'четырнадцать', 'пятнадцать',
            'шестнадцать', 'семнадцать',
            'восемнадцать', 'девятнадцать'
        ][u]);
    } else {
        if (t > 1) {
            result.push([
                undefined, undefined,
                'двадцать', 'тридцать',
                'сорок', 'пятьдесят',
                'шестьдесят', 'семьдесят',
                'восемьдесят', 'девяносто'
            ][t]);
        }
        if (u > 0) {
            result.push([
                undefined, 'один', 'два', 'три', 'четыре',
                'пять', 'шесть', 'семь', 'восемь', 'девять'
            ][u]);
        }
    }

    return result.join(' ');
};

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
answerNumberInWords = numberInWords(answerNumber);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumberInWords }?`;

console.log('1', minValue, maxValue);

document.getElementById('btnRetry').addEventListener('click', function () {
    // minValue = 0;
    // maxValue = 100;
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;
    answerNumber = 0;
    answerField.innerText = answerNumber;
    minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
    minValue = (isNaN(minValue)) ? minValue = 0 : minValue;
    maxValue = (isNaN(maxValue)) ? maxValue = 100 : maxValue;
    minValue = (minValue <= -999) ? minValue = -999 : minValue;
    maxValue = (maxValue >= 999) ? maxValue = 999 : maxValue;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2);
    answerNumberInWords = numberInWords(answerNumber);
    answerField.innerText = `Вы загадали число ${answerNumberInWords }?`;
    gameRun = true;
    console.log(orderNumber, orderNumberField.innerText);
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = randomNumber();
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
            answerNumberInWords = numberInWords(answerNumber);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom2 = randomNumber();
            switch (phraseRandom2) {
                case 1:
                    answerField.innerText = `Вы загадали число ${answerNumberInWords }?`;
                    break;
                case 2:
                    answerField.innerText = `Ваше число: ${answerNumberInWords }, я точно знаю!`;
                    break;
                case 3:
                    answerField.innerText = `Что-то мне подсказывает, ваше число -- ${answerNumberInWords }!`;
                    break;
                default:
                    answerPhrase = 'default';
                    break;
            }
            console.log(minValue, maxValue, answerNumber, answerNumberInWords);
            // console.log('2', minValue, maxValue);
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom3 = randomNumber();
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
            answerNumberInWords = numberInWords(answerNumber);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom4 = randomNumber();
            switch (phraseRandom4) {
                case 1:
                    answerField.innerText = `Вы загадали число ${answerNumberInWords }?`;
                    break;
                case 2:
                    answerField.innerText = `Ваше число: ${answerNumberInWords }, я точно знаю!`;
                    break;
                case 3:
                    answerField.innerText = `Что-то мне подсказывает, ваше число -- ${answerNumberInWords }!`;
                    break;
                default:
                    answerPhrase = 'default';
                    break;
            }
            console.log(minValue, maxValue, answerNumber, answerNumberInWords);
        }
    }
})


document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        const phraseRandom5 = randomNumber();
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
            default:
                answerPhrase = 'default';
                break;
        }
        gameRun = false;
    }
})
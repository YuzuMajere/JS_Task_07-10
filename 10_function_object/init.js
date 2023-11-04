window.onload = function () {
    let initPerson = personGenerator.getPerson();
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('genderOutput').innerText = initPerson.gen;
    initPerson.gen != 'Женщина' ? document.getElementById('surnameOutput').innerText = initPerson.surnameJson : document.getElementById('surnameOutput').innerText = (initPerson.surnameJson + "а");
    document.getElementById('birthYearOutput').innerText = initPerson.year + '.' + initPerson.month + '.' + initPerson.day + '\xa0' + 'г.р.';
    document.getElementById('personJob').innerText = initPerson.job;
    document.getElementById('btn_clr2').addEventListener('click', function () {
        document.getElementById('middleNameOutput').innerText = '';
        document.getElementById('surnameOutput').innerText = '';
        document.getElementById('firstNameOutput').innerText = '';
        document.getElementById('genderOutput').innerText = 'Пол';
        document.getElementById('birthYearOutput').innerText = 'Год рождения';
        document.getElementById('personJob').innerText = '';
    })
    document.getElementById('btn_generate').addEventListener('click', function () {
        initPerson = personGenerator.getPerson();
        document.getElementById('middleNameOutput').innerText = initPerson.middleName;
        document.getElementById('firstNameOutput').innerText = initPerson.firstName;
        document.getElementById('genderOutput').innerText = initPerson.gen;
        initPerson.gen != 'Женщина' ? document.getElementById('surnameOutput').innerText = initPerson.surnameJson : document.getElementById('surnameOutput').innerText = (initPerson.surnameJson + "а");
        document.getElementById('birthYearOutput').innerText = initPerson.year + '.' + initPerson.month + '.' + initPerson.day + '\xa0' + 'г.р.';
        document.getElementById('personJob').innerText = initPerson.job;
    })
    // console.log(fun);
};
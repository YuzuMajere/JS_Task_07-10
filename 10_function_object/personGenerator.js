const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 9,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    monthOfBirth: `{
        "count": 11,
        "list": {     
            "id_1": "Январь",
            "id_2": "Февраль",
            "id_3": "Март",
            "id_4": "Апрель",
            "id_5": "Мая",
            "id_6": "Июнь",
            "id_7": "Июль",
            "id_8": "Август",
            "id_9": "Сентябрь",
            "id_10": "Октябрь",
            "id_11": "Ноябрь",
            "id_12": "Декабрь"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 9,
        "list": {
            "id_1": "Марина",
            "id_2": "Екатерина",
            "id_3": "Капиталина",
            "id_4": "Надежда",
            "id_5": "Евдакия",
            "id_6": "Ибрагима",
            "id_7": "Зинаида",
            "id_8": "Ирина",
            "id_9": "Ольга",
            "id_10": "Карина"
        }
    }`,
    maleMiddleName: `{
        "count": 4,
        "list": {
            "id_1": "Анатольевич",
            "id_2": "Евдакимович",
            "id_3": "Ибрагимович",
            "id_4": "Святославович",
            "id_5": "Олегович"
        }
    }`,
    femaleMiddleName: `{
        "count": 4,
        "list": {
            "id_1": "Вячеславовна",
            "id_2": "Кирилловна",
            "id_3": "Михаиловна",
            "id_4": "Афанасьевна",
            "id_5": "Джоновна"
        }
    }`,
    maleJob: `{
        "count": 4,
        "list": {
            "id_1": "Шахтер",
            "id_2": "Слесарь",
            "id_3": "Солдат",
            "id_4": "Водитель мусоровоза",
            "id_5": "Пилот Самолета"
        }
    }`,
    femaleJob: `{
        "count": 4,
        "list": {
            "id_1": "Сиделка",
            "id_2": "Учительница",
            "id_3": "Воспитательница дет.сада",
            "id_4": "Домохозяйка",
            "id_5": "Медсестра"
        }
    }`,

    GENDER_MALE: 'Мужчина', //~~0
    GENDER_FEMALE: 'Женщина', //~~1

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    // randomGenNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomGender: function () {
        const gen = this.randomIntNumber();
        console.log(gen);
        return gen;
    },

    randomMonth: function (json) {
        const obj2 = JSON.parse(json);
        const month = `id_${this.randomIntNumber(obj2.count, 1)}`;
        console.log(month);
        return obj2.list[month];
    },

    randomYear: function () {
        const year = this.randomIntNumber(2023, 1960);
        console.log(year);
        return year;
    },

    randomDay: function () {
        let day = 0;
        if (this.person.month == `Февраль`) {
            day = this.randomIntNumber(28, 1);
        } else if (this.person.month == `Январь` || `Март` || `Май` || `Июль` || `Сентябрь` || `Ноябрь`) {
            day = this.randomIntNumber(31, 1);
        } else {
            day = this.randomIntNumber(30, 1);
        };
        console.log(day);
        return day;
    },


    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function () {

        return this.person.gen != 1 ? this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson);

    },


    randomSurname: function () {

        // this.gen < 1 ? 
        return this.randomValue(this.surnameJson)
        // : this.randomValue(this.surnameJson);

    },

    randomMiddleName: function () {

        return this.person.gen != 1 ? this.randomValue(this.maleMiddleName) : this.randomValue(this.femaleMiddleName);

    },

    randomJob: function () {

        return this.person.gen != 1 ? this.randomValue(this.maleJob) : this.randomValue(this.femaleJob);

    },


    getPerson: function () {
        this.person = {};
        this.person.gen = this.randomGender();
        this.person.day = this.randomDay();
        this.person.year = this.randomYear();
        this.person.month = this.randomMonth(this.monthOfBirth);
        console.log(this.person.gen);
        this.person.middleName = this.randomMiddleName();
        this.person.firstName = this.randomFirstName();
        this.person.surnameJson = this.randomSurname();
        this.person.job = this.randomJob();
        // this.person.gen = 
        this.person.gen != 1 ? this.person.gen = this.GENDER_MALE : this.person.gen = this.GENDER_FEMALE;
        return this.person;
    }
};
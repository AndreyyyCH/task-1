'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
};
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
};

function shooseExspenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            console.log('bad result');
            i--;
        }
    };

};
shooseExspenses();

//Расчет дневного бюджета
function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Бюджет на 1 день составляет ' + appData.moneyPerDay + 'руб.');
};
detectDayBudget();

//Расчет уровня достатка
function detectLevel() {
    if (appData.moneyPerDay < 5000) {
        console.log('Это минимальный уровень достатка!');
    } else if (appData.moneyPerDay > 5000 && appData.moneyPerDay < 15000) {
        console.log('Это средний уровень достатка!');
    } else if (appData.moneyPerDay > 15000) {
        console.log('Это высокий уровень достатка!');
    } else {
        console.log('Произошла ошибка');
    };
};
detectLevel();

function checkSavings() {
    if (appData.saving == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = save / 100 / 12 * percent;
        alert('Доход с Вашего депозита в месяц: ' + appData.monthIncome);
    }
}
checkSavings();

//Функция для определения необязательных расходов
function shooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt('Статья необязательных расходов?');
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
shooseOptExpenses();
let CAR = {
    name: 'Audi rs7',
    manufacturer: 'Germany',
    year: 2019,
    'average speed': 200
}
//1.1
function getCarInfo() {
    let array = [];
    for (let key in CAR){
        array.push(key);
        array.push(CAR[key]);
    }
    return array.join(' ');
}
function infoCar() {
    alert(getCarInfo());
}
//1.2
function countTime() {
    // debugger;
    let sp = document.getElementById('car').value;
    let t = (sp / CAR["average speed"]).toFixed(2);
    let hour = 0;
    let minute = 0;
    let i = Math.floor(Math.floor(t) / 4);
    hour = Math.floor(t);
    minute = (t - hour) * 60;
    if (hour <= 23 && minute <= 59) {
        let res = `${i + hour} : ${Math.round(minute)}`;
        document.getElementById('res1').innerHTML = res;
    }
}

//task 2

    let DROB = {
        frak1: {
            numerator: 1,
            denominator: 2
        },
        frak2: {
            numerator: 6,
            denominator: 10
        }
    }
    let a = DROB.frak1.numerator;
    let b = DROB.frak1.denominator;
    let c = DROB.frak2.numerator;
    let d = DROB.frak2.denominator;
    // let res = '';

    function addition(DROB) {
        return `(${(a * d)}/${(b * d)})+(${(c * b)}/${(b * d)}); `;
    }
    document.getElementById('rez1').innerHTML = addition();

    function subtraction(DROB) {
        return `(${(a * d)}/${(b * d)})-(${(c * b)}/${(b * d)}); `;
    }
    document.getElementById('rez2').innerHTML = subtraction();

    function multiplication(DROB) {
        return `${(a * c)}/${(b * d)}; `;
    }
    document.getElementById('rez3').innerHTML = multiplication();

    function division(DROB) {
        return `${(a * d)}/${(b * c)}; `;
    }
    document.getElementById('rez4').innerHTML = division();

    function reduction(DROB) {
        let i = 2;
        let e = 3;
        let h = 5;
        while (c % 2 == 0 && d % 2 == 0) {
            return `${(c / i)}/${(d / i)}; `
        }
        while (c % 3 == 0 && d % 3 == 0) {
            return `${(c / e)}/${(d / e)}; `
        }
        while (c % 5 == 0 && c % 5 == 0) {
            return `${(c / h)}/${(d / h)}; `
        }
    }
    document.getElementById('rez5').innerHTML = reduction();

//task 3

    let TIME = {
        hours: 10,
        minutes: 15,
        seconds: 36
    };

    let h = TIME.hours;
    let m = TIME.minutes;
    let s = TIME.seconds;
    let res = ((h * 60) * 60) + (m * 60) + s;
    let res3 = '';

    function addZero(i) {
        return (i < 10) ? '0' + i : i;
    }

    addZero();

    function getTime(TIME) {
        let res = '';
        if (h <= 23 && m <= 59 && s <= 59) {
            res = `${addZero(h)}:${addZero(m)}:${addZero(s)}`;
        }
        document.getElementById("res3").innerHTML = res;
    }

    function addSeconds() {
        let addSec = document.getElementById("seconds").value;
        addSec = parseInt(addSec);
        let res2 = res + addSec;
        let checkHours = Math.floor((res2 / 60) / 60);
        let checkMinutes = Math.floor(res2 / 60) - (checkHours * 60);
        let checkSec = Math.floor(res2 % 60);
        res3 = `${addZero(checkHours)}:${addZero(checkMinutes)}:${addZero(checkSec)}`;

        document.getElementById("res3_1").innerHTML = res3;
    }

    function addMinutes() {
        let addMin = document.getElementById("minutes").value;
        addMin = parseInt(addMin);
        addMin = addMin * 60;
        let res2 = res + addMin;
        let checkHours = Math.floor((res2 / 60) / 60);
        let checkMinutes = Math.floor(res2 / 60) - (checkHours * 60);
        let checkSec = Math.floor(res2 % 60);
        res3 = `${addZero(checkHours)}:${addZero(checkMinutes)}:${addZero(checkSec)}`;

        document.getElementById("res3_2").innerHTML = res3;
    }

    function addHours() {
        let hoursPlus = document.getElementById("hours").value;
        hoursPlus = parseInt(hoursPlus);
        hoursPlus = hoursPlus * 3600;
        let res2 = res + hoursPlus;
        let checkHours = Math.floor((res2 / 60) / 60);
        let checkMinutes = Math.floor(res2 / 60) - (checkHours * 60);
        let checkSec = Math.floor(res2 % 60);
        res3 = `${addZero(checkHours)}:${addZero(checkMinutes)}:${addZero(checkSec)}`;

        document.getElementById("res3_3").innerHTML = res3;
    }




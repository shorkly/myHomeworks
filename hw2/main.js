function task1(){
    let num = document.getElementById("old").value;
    num = parseInt(num);
    let res = '';
    if(num>=0 && num<=2){
        res = 'A child';
    }else if(num>=12 && num<=18){
        res = 'A teenager';
    }else if(num>18 && num<=60){
        res = 'Adult';
    }else if(num>60){
        res = 'Pensioner';
    }
    else{
        res = 'Invalid old';
    }
    document.getElementById('result-1').innerText = res;
}
function task2(){
    let num = document.getElementById("numb").value;
    num = parseInt(num);
    let res = '';
    switch(num){
        case 1:
            res = '!';
            break;
        case 2:
            res = '@';
            break;
        case 3:
            res = '#';
            break;
        case 4:
            res = '$';
            break;
        case 5:
            res = '%';
            break;
        case 6:
            res = '^';
            break;
        case 7:
            res = '&';
            break;
        case 8:
            res = '*';
            break;
        case 9:
            res = '(';
            break;
        case 0:
            res = ')';
            break;
        default:
            res = 'Invalid number';
            break;
    }

    document.getElementById('result-2').innerText = res;
}

function task3() {
    const num = document.getElementById('num').value;
    const num2 = parseInt(num);
    let res = '';
       if (num.length > 3) {
            res = "Enter three-digit number";
        }else if (num.length < 3) {
            res = "Enter three-digit number";
        }else {
            const a = Math.floor(num2 / 100) % 10;
            const b = Math.floor(num2 / 10) % 10;
            const c = (num2 % 10);
            if (a === b || b === c || a === c) {
                res = "Matches found";
            } else {
                res = "No matches found";
            }
        }
        document.getElementById('result-3').innerText = res;
}

function task4() {
    let year = document.getElementById("leap").value;
    year = parseInt(year);
    let res = '';
    if (year%4===0 || year%400===0 && year / 100!==0) {
        res = 'Leap year';
    } else {
        res = 'Not leap year';
    }
    document.getElementById("result-4").innerText = res;
}

function task5() {
    // debugger
    let num1 = document.getElementById('polindrom').value;
    num1 = parseInt(num1);
    let res = '';
    if (num.length < 5) {
        res = "enter five-digit number";
    }else if (num.length > 5) {
        res = "enter five-digit number";
    } else {
        const a = Math.floor(num1 / 10000);
        const b = Math.floor(num1 / 1000) % 10;
        const d = Math.floor(num1 / 10) % 10;
        const e = (num1 % 10) % 10;
        if (a === e && b === d){
            res = "polindrom";
        } else {
            res = "not a polindrom";
        }
    }
document.getElementById('result-5').innerText = res;
}

function task6() {
    // debugger
    let usd = document.getElementById('convector').value;
    let convert = document.getElementById('currency').value;
    let eur;
    let uan;
    let azn;
    switch (convert) {
        case 'EUR':
            eur = usd * 0.84;
            document.getElementById('result-6').innerText = `Total: ${eur}`;
            break;
        case 'UAN':
            uan = usd * 28.36;
            document.getElementById('result-6').innerText = `Total: ${uan}`;
            break;
        case 'AZN':
            azn = usd * 1.7;
            document.getElementById('result-6').innerText = `Total: ${azn}`;
            break;
        default:
        break;
    }
    // console.log(res);
}

function task7() {
    // debugger
    let price = document.getElementById('price').value;
    let res = '';
    let sale = '';
    if(price>=200 && price<=300){
        sale = price * 3 / 100;
    }else if(price>=300 && price<=500){
        sale = price * 5 / 100;
    }else if(price>=500) {
        sale = price * 7 / 100;
    }
    res = "Your amount to pay is " + (price - sale);
    document.getElementById('result-7').innerHTML = res;
}

function task8() {
    let squareSide = document.getElementById('square').value;
    let circumference = document.getElementById('circumference').value;
    let res = '';
    if(circumference<=squareSide/2) {
        res = 'Such a circle will fit into a square';
    }else{
        res = 'Such a circle won&#39;t fit into a square'
    }
    document.getElementById('result-8').innerHTML = res;
}

function task9() {
    // debugger
    let q = 0;
    let q1 = prompt('столица укр: москва(1)/алжир(2)/киев(3)');
    if(q1==3){
        (q+=2);
    }
    let q2 = prompt('2+2=5/4/3?');
    if (q2==4) {
        (q+=2);
    }
    let q3 = prompt('meet - встреча(1)/встретить(2)/поминуть(3)');
    if (q3==2) {
        (q+=2);
    }

alert('you have ' + q + ' points!');
}

//task 10

function getNextDate() {
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    let valid = true;
    let errMsg = [];
    let result = '';
    if (day == '') {
        valid = false;
        errMsg.push('enter date');
    } else {
        day = parseInt(day);
        if (day >= 1 && day <= 31) {

        } else {
            valid = false;
            errMsg.push('invalid date value');
        }
    }
    if (month == '') {
        valid = false;
        errMsg.push('enter month');
    } else {
        month = parseInt(month);
        if (month >= 1 && month <= 12) {

        } else {
            valid = false;
            errMsg.push('invalid month value');
        }
    }
    if (year == '') {
        valid = false;
        errMsg.push('enter year');
    } else {
        year = parseInt(year);
    }
    if(valid){
        result = nextDate(day, month, year);
        document.getElementById('next_date').innerHTML = `Next date is:<b> ${result}</b>`;
    }else{
        alert(errMsg.join(' '));
    }
}

function addZero(n) {
    return (n<10)?'0'+n:n+'';
}

function nextDate(d,m,y) {
    let next_day = d+1;
    let next_month = m;
    let next_year = y;
    let max_month_days = 0;
    switch (m) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            max_month_days = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            max_month_days = 30;
            break;
        case 2:
            if (y%4==0 && y%100!=0 || y%400==0){
                max_month_days = 29;
            }else{
                max_month_days = 28;
            }
            break;
    }
    if (next_day>max_month_days){
        next_day = 1;
        next_month++;
    }
    if (next_month>12){
        next_month = 1;
        next_year++;
    }
    return addZero(next_day)+'/'+addZero(next_month)+'/'+next_year;
}
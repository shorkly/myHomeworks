/*function task1(a=0,b=0){
    if(a<b){
        return -1;
    }else if(a>b){
        return 1;
    }else if(a==b){
        return 0;
    }
}

let r = task1(7,5);
alert(r);*/

/*function fact(a){
    debugger;
    let n = 1;
        for(let i = 1; i<=a; i++){
            n = n * i;

        }
        return n;

}

let s = fact(5);
alert(s);*/


//task 1

function task1() {
    let num1 = prompt('enter num1');
    let num2 = prompt('enter num2');
    if(num1>num2){
        alert(1);
    }else if(num1<num2){
        alert(-1);
    }else if(num1===num2){
        alert(0);
    }else{
        alert('invalid number');
    }
}

//task 2

function task2() {
    let num = prompt('enter number');
    let i = 2;
    let res = 1;
    while(num>=i){
        res = i*res;
        i++
    }
    alert(res);
}

//task 3

function task3() {
    let num1 = prompt('enter first number');
    let num2 = prompt('enter second number');
    let num3 = prompt('enter third number');
    let res = num1 + num2 + num3;
    alert(res);
}

//task 4

function task4() {
    let a = prompt();
    let b = prompt();
    let res = '';
    if (b===''){
        res = a**2;
    }else if (a===''){
        res = b**2;
    }else{
        res = a * b;
    }
    alert('S = ' + res);
}

//task 5

function task5() {
    let a = 0
    let num = prompt('enter number');
    for (let i = 0;i<num;i++){
        if (num%i===0) {
        a+=i
        }
    }
    if (num==a){
        return alert('совершенное');
    }else{
        return alert('не совершенное');
    }
}

//task 7
function addZero(i) {
    debugger
    if (i < 10) {
        return '0' + i;
    } else {
        return i;
    }
}

function task7() {
    debugger
    let hours = addZero(prompt('enter hours', '0'));
    let minutes = addZero(prompt('enter minutes', '0'));
    let seconds = addZero(prompt('enter seconds', '0'));
    alert(hours + ":" + minutes + ":" + seconds);
}

//task 8

function task8() {
    let hours = +prompt('enter hours');
    let minutes = +prompt('enter minutes');
    let seconds = +prompt('enter seconds');
    let res = '';
    if (hours<=23 && minutes>=0 && seconds>=0){
        res = ((hours * 60) * 60) + minutes * 60 + seconds + ' seconds';
    }else{
        res = 'Wrong value';
    }
    alert(res);

}

//task 9

function task9() {
    let num = prompt('введите количевство секунд');
    num = parseInt(num);
    if (num>=60) {
        let minutes = num / 60;
        let hours = minutes / 60;
        let seconds = num - minutes;
    }
        let res = hours + ':' + minutes + ':' + seconds;
        alert(res);
}

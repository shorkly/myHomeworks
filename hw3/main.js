//task 1

function task1(){
    let num1 = document.getElementById('num1-1').value;
    let num2 = document.getElementById('num1-2').value,
        num = 0,
        res = '';
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    while(num1<=num2){
       res = num += num1;
        num1++;
    }
    document.getElementById('res1').innerHTML = res;
}

//task 2

function task2(){
    debugger;
    let num1 = document.getElementById("num2-1").value,
        num2 = document.getElementById("num2-2").value,
        i = 0,
        res = '';
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    while(num1!==0 && num2!==0){
        if(num1>num2){
            num1 = num1%num2;
        }else{
            num2 = num2%num1;
        }
        res = num1 + num2;

    }

    document.getElementById("res2").innerHTML = res;
}

//task 3

function task3() {
    let num = document.getElementById('num3').value;
    let i = 1;
    for(i; i<=num; i++){
        if(num%i===0){
            alert(i);
        }
    }
}

//task 4

function task4() {
    let num = document.getElementById('num4').value;
    num=num.length;
    document.getElementById('res4').innerHTML = num;
}

//task 5

function task5() {
    let zero = 0;
    let neg = 0;
    let pos = 0;
    let even = 0;
    let odd = 0;
    let calc = 0;
    let res = '';
    let num;
    num = parseInt(num);
    while (calc < 11) {
        num = prompt('Enter number');
        calc++
        if (num > 0) {
            pos++
        }else if (num == 0) {
            zero++
        }else if(num<0) {
            neg++
        }
        if (num % 2 === 0) {
            even++
        }else if (num%2!==0){
            odd++
        }
    }
    alert(`odd: ${odd}, even: ${even}, zero: ${zero}, positive: ${pos}, negative: ${neg}`);
}

//task 6

function task6() {
    // debugger
    do {
        let num1 = prompt('Enter number');
        let symbol = prompt('Enter number');
        let num2 = prompt('Enter number');
        let res;
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        switch (symbol) {
            case '+':
                res = num1 + num2
                break;
            case '-':
                res = num1 - num2;
                break;
            case '*':
                res = num1 * num2;
                break;
            case '/':
                res = num1 / num2;
                break;
        }
        alert(res);
    }
    while(confirm('again?'));

}

//task 7

function task7() {
    let num = prompt('число');
    let cut = prompt('на скок ссдвинуть');
    alert(num.slice(cut) + num.slice(0, cut));
}

//task 8

function task8() {
    let d = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    let i = 0;
    while (confirm(d[i] + '. хотите увидеть след день?')) {
        i++
        i = i%7
    }
}

//task 9

function task9() {
    let n1;
    let n2;
    for(n1=2;n1<=10;n1++){
        for (n2=1;n2<=10;n2++){
            document.write(`${n1} x ${n2} = ${n1*n2} <br><br>`);
        }
    }
}

//task 10

function task10() {
    let from = 0;
    let to = 100;
    let middle = 50;
    let end_game = false;
        while (!end_game){
        if (confirm('= ' + middle)) {
            end_game = true;
            alert('your number: ' + middle)
        } else {
            if (confirm('> ' + middle)) {
                from = middle;
            } else {
                to = middle;
            }
        }
            middle = from + Math.round((to - from) / 2);
        }
    }
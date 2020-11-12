function hello(){
    let name = prompt("Enter your name!");
        res = "Hi, " + name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase() + "!";
    alert(res);
}
function old(){
    let year = prompt("Enter your birth year:");
    const koef = 2020;
    let res = "You are " + (koef - year) + " years old";
    alert(res);
}
function square(){
    let number = prompt("Enter a number of a side of a square");
    if(number===""){
        alert("Enter number!");
    }else{
        let res = "Perimeter of the square is " + parseInt(number) * 4;
        alert(res);
    }
}
function radius(){
    let number = prompt("Enter circle radius:");
    if(number===""){
        alert("Enter a number!");
    }else{
        let res = "Area of a circle is " + Math.PI * parseInt(number * number);
        alert(res);
    }
}
function km(){
    let km = prompt("Enter distance between cities in km value");
    let number = prompt("Enter how many hours do you want to get there");
    let res = "You must drive with speed " + (parseFloat(km) / parseFloat(number));
    alert(res);
}
function currency(){
    let dollar = prompt("Dollars");
    const koef = 0.85;
    if(dollar===""){
        alert("Enter a number value!");
    }else{
        let res = "Euro: " + (parseFloat(dollar) * parseFloat(koef));
        alert(res);
    }
}
function storage(){
    let gb = prompt("Enter the volume of the flash drive in GB");
    const koef = 1024;
    let res = Math.floor((parseInt(koef) * gb) / 820) + " files can be uploaded to " + gb + " GB";
    alert(res);
}
function choko(){
    let money = prompt("How much money you have");
    let chocolate = prompt("Price of one chocolate");
    surrender = money%chocolate;
    let res = "You can buy " + Math.floor(parseFloat(money) / parseFloat(chocolate)) + " chocolates." + " Your surrender is " + surrender.toFixed(1);
    alert(res);
}
function num(){
    let number = prompt("Enter three-digit number");
    let res1 = number[2];
    let res2 = number[1];
    let res3 = number[0];
    let res = res1 + res2 + res3;
    alert(res);
}
function money(){
    let num1 = prompt("Enter deposite value");
    let profit = (parseFloat(num1) * ((5 / 12) / 100) * 2);
    let res = "Your profit is " + profit.toFixed(1);
    alert(res);
}
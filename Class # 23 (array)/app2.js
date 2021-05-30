/**Room 2: Create a calculator in Javascript. The calculator should perform following operations:
Addition
Subtraction
Multiplication
Division
Remainder
Also, it should check the divisor. If the divisor is zero it should print the error message. Program this using Switch case and If Else.
 */



function show(){
    let num1 = parseInt(document.querySelector('#inp1').value);

let num2 = parseInt(document.querySelector('#inp2').value);

let sign =  document.querySelector('#char').value;

let ans;

if (sign == '+'){
            ans = num1 + num2;

            document.querySelector('p').innerHTML = ans;

}

else if (sign == '-'){
    ans = num1 - num2;

    document.querySelector('p').innerHTML = ans;

}

else if (sign == '*'){
    ans = num1 * num2;

    document.querySelector('p').innerHTML = ans;

}

else if (sign == '/'){
    ans = num1 / num2;

    document.querySelector('p').innerHTML = ans;

}

 else if (sign == '%'){
    ans = num1 % num2;

    document.querySelector('p').innerHTML = ans;

}

else {
    document.querySelector('p').innerHTML = 'operator is wrong' ;
}
}
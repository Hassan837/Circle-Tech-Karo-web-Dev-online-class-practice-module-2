//task # 1
function create(){
    let a = 4 , b = 12 , c;

    c = a + b;

    alert('The Sum 0f'+' ' + a + '+' + b + '=' + c);
}



// task # 2
let score = 0;
document.write('The value of varible is '+ score);

function show(){
    score += 5;

    document.querySelector('p').innerHTML = score
}
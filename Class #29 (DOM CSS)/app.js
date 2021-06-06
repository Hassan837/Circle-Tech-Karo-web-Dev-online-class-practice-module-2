function showStyle(){

document.querySelector('div').style.backgroundColor = "lightgreen"
let element = document.querySelector('div').style.border;

console.log(element);

document.querySelector('#heading').style.backgroundColor = "lightblue"
let element1 = document.querySelector('#heading').style.border;

console.log(element1);

document.querySelector('.head1').style.backgroundColor = "lightgreen"
let element2 = document.querySelector('.head1').style.border;

console.log(element2);
}

function showStyle1(){

    document.querySelector('div').style.backgroundColor = "pink"
    let element = document.querySelector('div').style.border = "3px dotted darkGreen";
    
    console.log(element);
    
    document.querySelector('#heading').style.backgroundColor = "purple"
    let element1 = document.querySelector('#heading').style.border = "3px dotted darkblue";
    
    console.log(element1);
    
    document.querySelector('.head1').style.backgroundColor = "blue"
    let element2 = document.querySelector('.head1').style.border = "3px dotted red";
    
    console.log(element2);
    }
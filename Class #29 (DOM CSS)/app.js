function showStyle() {

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

function showStyle1() {

    document.querySelector('div').style.backgroundColor = "pink"
    let element = document.querySelector('div').style.border = "3px dotted darkGreen";

    console.log(element);

    document.querySelector('#heading').style.backgroundColor = "purple"
    let element1 = document.querySelector('#heading').style.border = "3px dotted darkblue";

    console.log(element1);

    document.querySelector('.head1').style.backgroundColor = "blue"
    let element2 = document.querySelector('.head1').style.border = "3px dotted red";
    let element3 = document.querySelector('.head1').className;
    let element4 = document.querySelector('.head1').className = "headingnName"; 
    console.log(element2);
    console.log(element3);
    console.log(element4);

}


function add() {
    let element5 = document.querySelector('.head2').classList;
    console.log(element5);
}


function myFunction2() {
    alert ("Hello World!");
}
document.getElementsByClassName("header")[0].addEventListener("click", function myFunction2(){
    alert ("Hello World!");
});
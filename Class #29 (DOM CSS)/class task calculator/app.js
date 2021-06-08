 
function addValues() {
     var value1 = parseInt(document.querySelector('#inp1').value);
     var value2 = parseInt(document.querySelector('#inp2').value);
    var sum = value1 + value2;

    parseInt(document.querySelector('#ans').value = sum);   
}


function subValues() {
    var value1 = parseInt(document.querySelector('#inp1').value);
    var value2 = parseInt(document.querySelector('#inp2').value);
   var sum = value1 - value2;

   parseInt(document.querySelector('#ans').value = sum);   
}


function multiValues() {
    var value1 = parseInt(document.querySelector('#inp1').value);
    var value2 = parseInt(document.querySelector('#inp2').value);
   var sum = value1 * value2;

   parseInt(document.querySelector('#ans').value = sum);   
}



function diviValues() {
    var value1 = parseInt(document.querySelector('#inp1').value);
    var value2 = parseInt(document.querySelector('#inp2').value);
   var sum = value1 / value2;

   parseInt(document.querySelector('#ans').value = sum);   
}
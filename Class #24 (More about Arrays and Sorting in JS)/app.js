let names = ["Hassan" , "Irfan" , "Tahir" , "Afroz"];

function addNewName(){
    let newName = document.querySelector('input').value; 
    names.push(newName);
}

function displayNames(){
    for (let i=0; i<names.length; i++){
        console.log("Student #" + (i+1) + "=>" + names[i]);
    }
}

let scores = [34 , 45 , 3 , 76 , 93];

//for each loop

function calcuAvg(){
let sum = 0;
for ( let i=0;i < scores.length; i++){
    sum = sum + scores[i]
}
let average = sum / scores.length;

console.log("average", average);
console.log("sum", sum)
}
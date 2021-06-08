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
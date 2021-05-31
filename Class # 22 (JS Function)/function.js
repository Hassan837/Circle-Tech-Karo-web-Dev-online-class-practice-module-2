// funtion - Data type - perform action

function double(paisa){

    let answer = paisa * 2 ;

    return answer;

}

console.log(double(6));

// function declaration

function addTwonumber(numb1, numb2 ){
    let result = numb1 + numb2;

    return result;
}



function alertAddition(numb1, numb2 , numb3){
alert (numb1 + numb2 + numb3);

}

alertAddition(4 , 3 , 5);

function greet(){
    alert ("Welcome to Tech Karo");
}

function greetWithName(name){
    alert("Welcome to Tech Karo, dear" + name + "!");
}

// another wawy pf decleration

let greetWith = function (name){
    alert("Welcome to Tech Karo, dear" + name + "!");
}

let human = {
    name : "Hassan",
    age : 25,
    Hobbies: ["eating", "playing"],
    isHappy: false,
    adress: {
        city : "karachi",
        postalCode: 70744,
        area : "North Nazimabad"
    },
    eat : function (meal){
        console.log("Eating" + meal);
    }
}
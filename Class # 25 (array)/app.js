let games = ["cricket","Tennis","Vollyball", "Squash"];
//let game = "cricket";

//adding array in last
games.push("Table tennis");
games.push("Basketball");
console.log(games);

// adding array in first
games.unshift("Polo");
console.log(games);

// remove the last element of array
games.pop();
console.log(games);

// remove the first element  of array
games.shift();
console.log(games);

// remove the element from center
games.splice(2, 0 , "UNO" , "LUDO");
console.log(games);


/*for (let i=0; i < games.length; i++){

    if (games[i] == "cricket"){
        alert("The Cricket is Exist");
    }

    else {"not match any thing"};
}*/

/*let gamesObject = {
    first: "cricket",
    second: "Tennis",
    Third: "Vollyball",
    Fourth: "Squash"
}

console.log(gamesObject); */
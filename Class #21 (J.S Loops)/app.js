/* For  loop

count from min to max, step

*/

function show(){

   let minNumb = parseInt(document.querySelector("#minInp").value);
   let maxNumb = parseInt(document.querySelector("#maxInp").value);
   let stepNumb = parseInt(document.querySelector("#stepInp").value);



for(let i = minNumb; i<= maxNumb; i+=stepNumb){
    console.log(i);
}
} 
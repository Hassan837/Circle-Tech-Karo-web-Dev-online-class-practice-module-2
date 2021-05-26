/* For  loop

count from min to max, step

*/

function show(){

   let minNumb = parseInt(document.querySelector('#min').value);
   let maxNumb = parseInt(document.querySelector('#max').value);
   let stepNumb = parseInt(document.querySelector('#step').value);



for(let i = minNumb; i<= maxNumb; i+=stepNumb){
    console.log('clap');
}
}
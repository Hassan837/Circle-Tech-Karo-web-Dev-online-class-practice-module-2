const passingMarks = 50;

function show(){
   let engishMarks =  parseInt(document.querySelector('#inp1').value)
   let mathMarks = parseInt (document.querySelector('#inp2').value)

let isEnglishPass = engishMarks >= passingMarks;
let isMathPass = mathMarks >= passingMarks;

let isExamPass = isEnglishPass && isMathPass;

alert(isExamPass);

}


function show1(){
    let engishMarks =  parseInt(document.querySelector('#inp1').value)
    let mathMarks = parseInt (document.querySelector('#inp2').value)
 
 let isEnglishPass = engishMarks >= passingMarks;
 let isMathPass = mathMarks >= passingMarks;
 
 let isExamPass = isEnglishPass || isMathPass;
 
 alert(isExamPass);
 
 }




function login() {
    
    let inputElement = document.querySelector("#FN");
    console.log(inputElement);

    let inputValue = inputElement.value;
    console.log (inputValue);

    let headingValue = document.querySelector('h1 > span');
    console.log (headingValue);

    headingValue.innerHTML = inputValue;

    let inputElement2 = document.querySelector("#LN");
    console.log(inputElement2);

    let inputValue2 = inputElement2.value;
    console.log (inputValue2);

    let headingValue2 = document.querySelector('h1 > span.sp');
    console.log (headingValue2);

    headingValue2.innerHTML = inputValue2;

}
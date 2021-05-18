function login() {
    
    let inputElement = document.querySelector('input');
    console.log(inputElement);

    let inputValue = inputElement.value;
    console.log (inputValue);

    let headingValue = document.querySelector('h1 > span');
    console.log (headingValue);

    headingValue.innerHTML = inputValue;

    
}
// get innerText By id function convert to Number
function getInnerTextById(idName){
const innerText = document.getElementById(idName).innerText;
const innerTextConvertToNumber = parseFloat(innerText);
return innerTextConvertToNumber
}


// get input value by id  convert to Number

function getInputValueById(id){
    const inputValue = id.value;
    const inputValueConvertToNumber = parseFloat(inputValue);
    return inputValueConvertToNumber
}


// get innerText by id  convert to Number
function getInnerTextValueById(id){
    const innerTextValue = id.innerText;
    const innerTextValueConvertToNumber = parseFloat(innerTextValue);
    return innerTextValueConvertToNumber
}
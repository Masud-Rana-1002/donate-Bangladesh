// get innerText By id function convert to Number
function getInnerTextById(idName){
const innerText = document.getElementById(idName).innerText;
const innerTextConvertToNumber = parseFloat(innerText);
return innerTextConvertToNumber
}
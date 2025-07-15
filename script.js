const inputEl = document.getElementById('display');

function appendValue(value){
  inputEl.value += value;
}
function clearFun(){
  inputEl.value = '';
}
function valueCal(){
  inputEl.value = eval(inputEl.value);
}
function backSp(){
  inputEl.value = inputEl.value.slice(0,-1);
}

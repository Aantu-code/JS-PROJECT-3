const weightInput = document.getElementById('weight-input');

const heightInput = document.getElementById('height-input');

const successButton = document.getElementById('btn-success');

const resetButton = document.getElementById('btn-reset');

const result = document.getElementById('dynamic-bim');

const message = document.getElementById('bmi-text');

function calculatBmi(){
let height, weight, bmi
height = Number(heightInput.value)
weight = Number( weightInput.value)
bmi = weight / (height * 0.0254 * height * 0.0254)
result.textContent = bmi.toFixed(2)
let msg = showMessage(bmi) 
message.textContent = msg 
}
function showMessage(bmiValue){
if(bmiValue< 16){
  return 'You Are Severe Thin'
}else if(bmiValue >= 16 && bmiValue <= 17){
  return 'You Are Moderate Thin'
}else if(bmiValue > 17 && bmiValue < 18.5){
  return 'You Are Mid Thin'
}else if(bmiValue >18.5 && bmiValue <= 25){
  return 'You Are Normal'
}else if(bmiValue> 25){
  return 'You Are Over Weight'
}
}
function reset(){
  heightInput.value = ' ';
  weightInput.value = ' ';
  result.textContent = '_______ ';
  message.textContent = ' ';
}
function eventHandler(){
  if(Number(heightInput.value) && Number(weightInput.value)){
    calculatBmi();
  }else{
    alert('Please provide valid number')
    reset()
  }
}

successButton.addEventListener('click', eventHandler);

resetButton.addEventListener('click',  reset);
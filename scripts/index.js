const charArray = [];
const word = 'distorcion'
const inputs = document.querySelectorAll('.char')
console.log(inputs)
const regEx = /^[a-zA-Z]+$/;

const cleanInput = () => {
  inputs.forEach(char => char.innerHTML = '')
}

const checkArrows = (value) =>{
  return value !== 'ArrowLeft' && value !== 'ArrowRight' && value !== 'ArrowUp' && value !== 'ArrowDown';
} 

document.body.addEventListener('keydown', (e) => {
  console.log(e.key);
  if(e.key === 'Backspace'){
    charArray.pop();
    console.log(charArray)
    cleanInput();
    charArray.forEach((char, index) => inputs[index].innerHTML = char)
  }else{
    if(charArray.length + 1 > 10 || !e.key.match(regEx) || e.key === 'Enter' || !checkArrows(e.key)) return;
    charArray.push(e.key);
    charArray.forEach((char, index) => {
      inputs[index].innerHTML = char;
      if(word.includes(e.key) && word[charArray.length - 1] === e.key){
        console.log('🍎')
        inputs[index].classList.add('done')
      }else if(word.includes(e.key)){
        inputs[index].classList.add('almost')
      }else{
        inputs[index].classList.add('wrong')
      }
    })
  }

})
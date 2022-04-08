const charArray = [];
const word = 'distorcion'
const inputs = document.querySelectorAll('.char')
console.log(inputs)
const regEx = /^[a-zA-Z]+$/;

const cleanInput = () => {

  inputs.forEach(char => {
    char.innerHTML = '';
    char.classList.remove('done');
    char.classList.remove('almost');
    char.classList.remove('wrong');
  })
}

const updateState = () => {
  charArray.forEach((char, index) => {
    console.log(charArray)
    inputs[index].innerHTML = char.key;
    inputs[index].classList.add(char.state);
  })
}

const checkArrows = (value) =>{
  return value !== 'ArrowLeft' && value !== 'ArrowRight' && value !== 'ArrowUp' && value !== 'ArrowDown';
} 

document.body.addEventListener('keydown', (e) => {
  console.log(e.key, 'ss');
  let state;
  if(e.key === 'Backspace'){
    charArray.pop();
    console.log(charArray)
    cleanInput();
    updateState();
  }else{
    if(charArray.length + 1 > 10 || !e.key.match(regEx) || e.key === 'Enter' || !checkArrows(e.key)) return;
    
    if(word.includes(e.key) && word[charArray.length] === e.key){
      console.log('🍎')
      state = "done"
    }else if(word.includes(e.key)){
      state = "almost"
    }else{
      state = "wrong"
    }
    charArray.push({key: e.key, state});
    updateState();
  }

})
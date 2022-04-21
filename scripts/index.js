const charArray = [];
const word = 'distorsion'
const inputs = document.querySelectorAll('.char')
const inputsall = document.getElementById('inputs')
console.log(inputs)
const regEx = /^[a-zA-Z]+$/;
const btnEnter = document.getElementById('btnEnter')
let correctanswer = false;


const goInsta = () => {
  let elements = Array.from(inputs)
  let answer = elements.reduce((previous, current) => {
    console.log(previous)
    console.log(current.innerHTML)
    return previous += current.innerHTML
  }, "")
  if (answer == "distorsion") {
    console.log("funciono");
    window.alert("Sistema MUDI: Respuesta Correcta");
    window.location = 'https://www.instagram.com/mudi_icesi/?hl=es-la';


  } else {
    window.alert("Error 03: Respuesta Incorrecta");
  }

}


inputsall.addEventListener("click", ()=>{
  inputsall.focus();
  inputsall.contentEditable = false;

})


btnEnter.addEventListener("click", goInsta);

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

const checkArrows = (value) => {
  return value !== 'ArrowLeft' && value !== 'ArrowRight' && value !== 'ArrowUp' && value !== 'ArrowDown';
}

document.body.addEventListener('keydown', (e) => {
  console.log(e.key, 'ss');
  let state;


  if (e.key === 'Backspace') {
    charArray.pop();
    console.log(charArray)
    cleanInput();
    updateState();
  } else {
    if (charArray.length + 1 > 10 || !e.key.match(regEx) || e.key === 'Enter' || !checkArrows(e.key)) return;

    if (word.includes(e.key) && word[charArray.length] === e.key) {
      console.log('🍎')
      state = "done"


    } else if (word.includes(e.key)) {
      state = "almost"
    } else {
      state = "wrong"
    }


    charArray.push({ key: e.key, state });
    updateState();
  }

})



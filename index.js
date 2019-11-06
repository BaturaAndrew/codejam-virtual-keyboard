import  './src/assets/scss/style.scss';
import {
  keys
} from './src/keys';
//[shit, ctrl, alt] - [160-161, 170-171, 180-181]
const keyboardKeys = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8,
  9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220,
  20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13,
  160, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 161,
  170, 91, 180, 32, 181, 37, 40, 39, 171,
];
const specSimbols = ["Tab", "CapsLock", "ShiftLeft", "ShiftRight", 'AltLeft', 'AltRight',
  'MetaLeft', 'MetaRight', 'Backspace', 'ControlLeft', 'ControlRight', 'Enter', 'ArrowLeft',
  'ArrowRight', 'ArrowDown', 'ArrowUp'];
let langEn = false;
let capsLock = false;
let shift = false;
let offset = 0;

const textarea = document.createElement('textarea');
textarea.id = 'result';

langEn = JSON.parse(localStorage.getItem('lang'));

// return keyMap by key
function decodedByKey(keyboardKey) {
  for (const key in keys) {
    if (keyboardKey === +key) {
      return keys[key];
    }
  }
}

// return keyMap by code
function decodedByCode(keyboardKey) {
  for (const key in keys) {
    var code = keyboardKey.getAttribute('data');
    if (code === keys[key].code) {
      return keys[key];
    }
  }
}

//return corresponding symbol depending on language and shift
function getSimbol(key) {
  //[shit, ctrl, alt]
  if (key.hasOwnProperty('text')) {
    return key.text;
  }
  // letters
  else if (key.hasOwnProperty('keyName')) {
    if (key.code.indexOf('Digit') !== -1) {

      if (!shift) {
        return key.keyName.first;
      }
      if (shift && langEn) {
        return key.keyName.en;
      }
      if (shift && !langEn) {
        return key.keyName.ru;
      }
    } else {
      let character = langEn ? key.keyName.en : key.keyName.ru;
      if (capsLock || shift) {
        character = character.toUpperCase.apply(character);
      }
      return character;
    }
  }
  //other special simbol
  else {
    return key.code;
  }

}

function creatPage() {

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';

  creatKeyboard();
  wrapper.append(textarea);
  wrapper.append(keyboard);
  document.body.append(wrapper);

  function creatKeyboard() {
    keyboardKeys.forEach((keyboardKey) => {
      const key = decodedByKey(keyboardKey);
      const keyElem = document.createElement('div');
      keyElem.className = 'key';
      keyElem.setAttribute('data', key.code);

      //[shit, ctrl, alt]
      if (key.hasOwnProperty('text')) {
        keyElem.innerHTML = getSimbol(key);
        keyElem.classList.add(String.prototype.toLowerCase.apply(key.code));
      }
      // letters
      else if (key.hasOwnProperty('keyName')) {
        keyElem.innerHTML = getSimbol(key);
      }
      //other special simbol
      else {
        keyElem.classList.add(String.prototype.toLowerCase.apply(key.code));
        keyElem.innerHTML = getSimbol(key);
      }

      keyboard.append(keyElem);
    });
  }
}



function renderKeyboard(elements) {
  elements.forEach((keyboardKey) => {
    const key = decodedByCode(keyboardKey);

    //[shit, ctrl, alt]
    if (key.hasOwnProperty('text')) {
      keyboardKey.innerHTML = getSimbol(key);
    }
    // letters
    else if (key.hasOwnProperty('keyName')) {
      keyboardKey.innerHTML = getSimbol(key);
    }
    //other special simbol
    else {
      keyboardKey.innerHTML = getSimbol(key);
    }

  });
}


creatPage();

const capslockElem = document.querySelector('.capslock');
const shiftLeftElem = document.querySelector('.shiftleft');
let keyElements = document.querySelectorAll('.key');
keyElements = Array.prototype.slice.call(keyElements);


keyElements.map((elem) => {
  elem.addEventListener('mousedown', () => {
    const code = elem.getAttribute('data');
    if (code === 'ShiftLeft') {
      (shift) ? shift = false : shift = true;
      shiftLeftElem.classList.toggle('shift-active');
      renderKeyboard(keyElements);
    }

    printSimbol(elem);
  });

  elem.addEventListener('mouseup', () => {
    elem.classList.toggle('active');
  });

  return true;
});

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  const element = document.querySelector(`div[data=${e.code}]`);

  if ((e.altKey) && (e.shiftKey)) {
    (langEn) ? langEn = false : langEn = true;
    localStorage.setItem('lang', JSON.stringify(langEn));
    renderKeyboard(keyElements);
  }

  if ((e.shiftKey) && (!e.altKey)) {
    (shift) ? shift = false : shift = true;
    shiftLeftElem.classList.toggle('shift-active');
    renderKeyboard(keyElements);
  }

  printSimbol(element);
});

document.addEventListener('keyup', (e) => {
  const element = document.querySelector(`div[data=${e.code}]`);
  textarea.focus();
  element.classList.toggle('active');
});

function printSimbol (element) {
  textarea.focus();
  element.addEventListener('mouseout', () => {
    element.classList.remove('active');
  });

  element.classList.add('active');

  const code = element.getAttribute('data');

  // NOT specSimbols
  if (specSimbols.indexOf(code) === -1) {
    // print a symbol
    if (!capsLock && !shift) {
      textarea.value = textarea.value.substring(0, textarea.selectionStart)
        + element.innerText
        + textarea.value.substring(textarea.selectionEnd, textarea.value.length);
      textarea.selectionStart = textarea.value.length + offset;
      textarea.selectionEnd = textarea.selectionStart;
      // print a symbol in UpperCase
    } else {
      textarea.value += String.prototype.toUpperCase.apply(element.innerText);
    }
  }

  switch (code) {
    case 'Tab':
      textarea.value += '\t';
      break;

    case 'CapsLock':
      (capsLock) ? capsLock = false : capsLock = true;
      capslockElem.classList.toggle('capslock-active');
      renderKeyboard(keyElements);
      break;

    case 'Enter':
      textarea.value += '\n';
      break;

    case 'Backspace':
      textarea.value = textarea.value.slice(0, -1);
      break;

    case 'ArrowLeft':
      offset -= 1;
      if (textarea.value.length - offset > -1) {
        textarea.selectionEnd -= 1;
      }
      break;

    case 'ArrowRight':
      offset += 1;
      if (textarea.value.length - offset > -1) {
        textarea.selectionStart += 1;
      }
      break;

    default:
      break;
  }
};
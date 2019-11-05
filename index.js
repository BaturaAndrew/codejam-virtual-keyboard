import './style.scss';
import {
  keys
} from './keys';
const keyboardKeys = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8,
  9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220,
  20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13,
  16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16,
  17, 91, 18, 32, 18, 37, 40, 39, 17,
];
let lengEn = false;
let capsLock = false;
let shift = false;
const offsetLeft = 0;
const offsetRight = 0;

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';


const textarea = document.createElement('textarea');
textarea.id = 'result';

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';


// return decoded key
function decodedKey(keyboardKey) {
  for (const key in keys) {
    if (keyboardKey == key) {
      return keys[key];
    }
  }
}

function creatKeyboard() {

  keyboardKeys.forEach((keyboardKey) => {
    const key = decodedKey(keyboardKey);
    const keyElem = document.createElement('div');
    keyElem.className = 'key';
    keyElem.setAttribute('data', key.code);

    if (key.hasOwnProperty('text')) {
      keyElem.innerHTML = key.text;
      keyElem.classList.add(String.prototype.toLowerCase.apply(key.code));
    } else if (key.hasOwnProperty('keyName')) {
      keyElem.innerHTML = key.keyName.ru;
    } else {
      keyElem.classList.add(String.prototype.toLowerCase.apply(key.code));
      keyElem.innerHTML = key.code;
    }

    keyboard.append(keyElem);
  });
}
creatKeyboard();
wrapper.append(textarea);
wrapper.append(keyboard);
document.body.append(wrapper);

// const textarea = document.getElementById('result');
const capslockEl = document.querySelector('.capslock');
const shiftLeftEl = document.querySelector('.shift-left');

var keysElem = document.querySelectorAll('.key');
keysElem = Array.prototype.slice.call(keysElem);


let ruSymbols = document.querySelectorAll('.ru');
ruSymbols = Array.prototype.slice.call(ruSymbols);

let enSymbols = document.querySelectorAll('.en');
enSymbols = Array.prototype.slice.call(enSymbols);

let specialSymbols = document.querySelectorAll('.shift');
specialSymbols = Array.prototype.slice.call(specialSymbols);

let digitSymbols = document.querySelectorAll('.digit');
digitSymbols = Array.prototype.slice.call(digitSymbols);

const tilde = document.querySelector('.tilde');


keysElem.map((elem) => {
  elem.addEventListener('mousedown', () => {
    printSimbol(elem);
    const code = elem.getAttribute('data');
    if (code === 'ShiftLeft') {
      (shift) ? shift = false: shift = true;
      shiftLeftEl.classList.toggle('shift-active');

      specialSymbols.map((elem) => {
        elem.classList.toggle('hidden');
      });

      digitSymbols.map((elem) => {
        elem.classList.toggle('hidden');
      });
    }
  });

  elem.addEventListener('mouseup', () => {
    elem.classList.toggle('active');
  });
  return true;
});

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  const element = document.querySelector('div[data=" + `${e.code}` + "]');

  if ((e.altKey) && (e.shiftKey)) {
    (lengEn) ? lengEn = false: lengEn = true;

    ruSymbols.map((elem) => {
      elem.classList.toggle('hidden');
    });
    enSymbols.map((elem) => {
      elem.classList.toggle('hidden');
    });
  }

  if ((e.shiftKey) && (!e.altKey)) {
    (shift) ? shift = false: shift = true;
    shiftLeftEl.classList.toggle('shift-active');

    specialSymbols.map((elem) => {
      elem.classList.toggle('hidden');
    });

    digitSymbols.map((elem) => {
      elem.classList.toggle('hidden');
    });

    // tilde.classList.toggle('tilde');
  }
  printSimbol(element);

  if (capsLock || shift) {
    ruSymbols.map((elem) => {
      elem.classList.add('upper-case');
    });
    enSymbols.map((elem) => {
      elem.classList.add('upper-case');
    });
  } else {
    ruSymbols.map((elem) => {
      elem.classList.remove('upper-case');
    });
    enSymbols.map((elem) => {
      elem.classList.remove('upper-case');
    });
  }
});

document.addEventListener('keyup', (e) => {
  const element = document.querySelector('div[data="' + `${e.code}` + '"]');
  textarea.focus();
  element.classList.toggle('active');
});

const printSimbol = (element) => {
  textarea.focus();
  element.addEventListener('mouseout', () => {
    element.classList.remove('active');
  });

  element.classList.add('active');

  const code = element.getAttribute('data');
  if (code !== 'Tab' && code !== 'CapsLock' &&
    code !== 'ShiftLeft' && code !== 'ShiftRight' &&
    code !== 'AltLeft' && code !== 'AltRight' &&
    code !== 'MetaLeft' && code !== 'MetaRight' &&
    code !== 'Backspace' && code !== 'ControlLeft' &&
    code !== 'ControlRight' && code !== 'Enter'
  ) {
    // print a symbol
    if (!capsLock && !shift) {
      textarea.value += element.innerText;
      // print a symbol in UpperCase
    } else {
      textarea.value += String.prototype.toUpperCase.apply(element.innerText);
    }
  }

  if (code === 'Tab') {
    textarea.value += '\t';
  }

  // if (code === 'ArrowLeft') {
  //   offsetLeft = textarea.selectionStart - 1;
  //   if (textarea.value.length - offsetLeft > -1) {
  //     textarea.selectionEnd = offsetLeft;
  //     textarea.selectionStart = offsetLeft;
  //   }
  // }

  // if (code === 'ArrowRight') {
  //   offsetRight = textarea.selectionStart + 1;
  //   if (textarea.value.length > offsetRight) {
  //     textarea.selectionStart = offsetRight;
  //     textarea.selectionEnd = offsetRight;
  //   }
  // }

  if (code === 'CapsLock') {
    (capsLock) ? capsLock = false: capsLock = true;
    capslockEl.classList.toggle('capslock-active');
  }

  if (code === 'Enter') {
    textarea.value += '\n';
  }

  if (code === 'Backspace') {
    textarea.value = textarea.value.slice(0, -1);
  }
};
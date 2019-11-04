// import './keys';
// import './style.scss';

const map = `<textarea  id="result" autofocus></textarea>

<div class="keyboard">

<div class="row">
  <div class="key" data="Backquote">   <span class='ru'>ё</span>    <span class='shift hidden'>\`</span><span class='en hidden'>~</span></div>
  <div class="key" data="Digit1">      <span class='digit'>1</span> <span class='shift hidden'>!</span></div>
  <div class="key" data="Digit2">      <span class='digit'>2</span> <span class='shift hidden'>"</span></div>
  <div class="key" data="Digit3">      <span class='digit'>3</span> <span class='shift hidden'>№</span></div>
  <div class="key" data="Digit4">      <span class='digit'>4</span> <span class='shift hidden'>;</span></div>
  <div class="key" data="Digit5">      <span class='digit'>5</span> <span class='shift hidden'>%</span></div>
  <div class="key" data="Digit6">      <span class='digit'>6</span> <span class='shift hidden'>:</span></div>
  <div class="key" data="Digit7">      <span class='digit'>7</span> <span class='shift hidden'>?</span></div>
  <div class="key" data="Digit8">      <span class='digit'>8</span> <span class='shift hidden'>*</span></div>
  <div class="key" data="Digit9">      <span class='digit'>9</span> <span class='shift hidden'>(</span></div>
  <div class="key" data="Digit0">      <span class='digit'>0</span> <span class='shift hidden'>)</span></div>
  <div class="key" data="Minus">       <span>-</span>               <span class='shift hidden'>_</span></div>
  <div class="key" data="Equal">       <span>=</span>               <span class='shift hidden'>+</span></div>
  <div class="key backspace"      data="Backspace">   <span>Backspace</span></div>
</div>
<div class="row">
  <div class="key tab"            data="Tab">         <span>Tab</span></div>
  <div class="key" data="KeyQ">        <span class='ru'>й</span> <span class='en hidden'>q</span></div>
  <div class="key" data="KeyW">        <span class='ru'>ц</span> <span class='en hidden'>w</span></div>
  <div class="key" data="KeyE">        <span class='ru'>у</span> <span class='en hidden'>e</span></div>
  <div class="key" data="KeyR">        <span class='ru'>к</span> <span class='en hidden'>r</span></div>
  <div class="key" data="KeyT">        <span class='ru'>е</span> <span class='en hidden'>t</span></div>
  <div class="key" data="KeyY">        <span class='ru'>н</span> <span class='en hidden'>y</span></div>
  <div class="key" data="KeyU">        <span class='ru'>г</span> <span class='en hidden'>u</span></div>
  <div class="key" data="KeyI">        <span class='ru'>ш</span> <span class='en hidden'>i</span></div>
  <div class="key" data="KeyO">        <span class='ru'>щ</span> <span class='en hidden'>o</span></div>
  <div class="key" data="KeyP">        <span class='ru'>з</span> <span class='en hidden'>p</span></div>
  <div class="key" data="BracketLeft"> <span class='ru'>х</span> <span class='en hidden'>[</span></div>
  <div class="key" data="BracketRight"><span class='ru'>ъ</span> <span class='en hidden'>]</span></div>
  <div class="key" data="Backslash">   <span>\\</span><span>/</span></div>
</div>
<div class="row">
  <div class="key capslock"       data="CapsLock">    <span>Caps Lock</span></div>
  <div class="key" data="KeyA">        <span class='ru'>ф</span> <span class='en hidden'>a</span></div>
  <div class="key" data="KeyS">        <span class='ru'>ы</span> <span class='en hidden'>s</span></div>
  <div class="key" data="KeyD">        <span class='ru'>в</span> <span class='en hidden'>d</span></div>
  <div class="key" data="KeyF">        <span class='ru'>а</span> <span class='en hidden'>f</span></div>
  <div class="key" data="KeyG">        <span class='ru'>п</span> <span class='en hidden'>g</span></div>
  <div class="key" data="KeyH">        <span class='ru'>р</span> <span class='en hidden'>h</span></div>
  <div class="key" data="KeyJ">        <span class='ru'>о</span> <span class='en hidden'>j</span></div>
  <div class="key" data="KeyK">        <span class='ru'>л</span> <span class='en hidden'>k</span></div>
  <div class="key" data="KeyL">        <span class='ru'>д</span> <span class='en hidden'>l</span></div>
  <div class="key" data="Semicolon">   <span class='ru'>ж</span> <span class='en hidden'>;</span></div>
  <div class="key" data="Quote">       <span class='ru'>э</span> <span class='en hidden'>'</span></div>
  <div class="key enter"          data="Enter">       <span>Enter</span></div>
</div>
<div class="row">
  <div class="key shift-left"          data="ShiftLeft">   <span>Shift</span></div>
  <div class="key" data="KeyZ">        <span class='ru'>я</span> <span class='en hidden'>z</span></div>
  <div class="key" data="KeyX">        <span class='ru'>ч</span> <span class='en hidden'>x</span></div>
  <div class="key" data="KeyC">        <span class='ru'>с</span> <span class='en hidden'>c</span></div>
  <div class="key" data="KeyV">        <span class='ru'>м</span> <span class='en hidden'>v</span></div>
  <div class="key" data="KeyB">        <span class='ru'>и</span> <span class='en hidden'>b</span></div>
  <div class="key" data="KeyN">        <span class='ru'>т</span> <span class='en hidden'>n</span></div>
  <div class="key" data="KeyM">        <span class='ru'>ь</span> <span class='en hidden'>m</span></div>
  <div class="key" data="Comma">       <span class='ru'>б</span> <span class='en hidden'>,</span></div>
  <div class="key" data="Period">      <span class='ru'>ю</span> <span class='en hidden'>.</span></div>
  <div class="key" data="Slash">       <span class='ru'>.</span>   <span class='en hidden'>,</span></div>
  <div class="key arrow"          data="ArrowUp">     <span>&#8593;</span></div>
  <div class="key shift-right"     data="ShiftRight">  <span>Shift</span></div>
</div>
<div class="row">
  <div class="key ctrl"  data="ControlLeft">Ctrl</div>
  <div class="key win"   data="MetaLeft">Win</div>
  <div class="key alt"   data="AltLeft">Alt</div>
  <div class="key space" data="Space">&nbsp;</div>
  <div class="key alt"   data="AltRight">Alt</div>
  <div class="key arrow" data="ArrowLeft">&#8592;</div>
  <div class="key arrow" data="ArrowDown">&#8595;</div>
  <div class="key arrow" data="ArrowRight">&#8594;</div>
  <div class="key ctrl"  data="ControlRight">Ctrl</div>
</div>

</div>`;

let lengEn = false;
let capsLock = false;
let shift = false;

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
wrapper.innerHTML = map;

const row = document.createElement('div');
row.className = 'row';

document.body.append(wrapper);


const textarea = document.getElementById('result');
const capslockEl = document.querySelector('.capslock');
const shiftLeftEl = document.querySelector('.shift-left');

let keys = document.querySelectorAll('.key');
keys = Array.prototype.slice.call(keys);


let ruSymbols = document.querySelectorAll('.ru');
ruSymbols = Array.prototype.slice.call(ruSymbols);

let enSymbols = document.querySelectorAll('.en');
enSymbols = Array.prototype.slice.call(enSymbols);

let specialSymbols = document.querySelectorAll('.shift');
specialSymbols = Array.prototype.slice.call(specialSymbols);

let digitSymbols = document.querySelectorAll('.digit');
digitSymbols = Array.prototype.slice.call(digitSymbols);

keys.map((elem) => {
  elem.addEventListener('mousedown', () => {
    textarea.focus();
    mouseDown(elem);
  });

  elem.addEventListener('mouseup', () => {
    elem.classList.toggle('active');
  });
  return true;
});

document.addEventListener('keydown', (e) => {
  const element = document.querySelector('div[data="' + `${e.code}` + '"]');
  textarea.focus();
  element.classList.toggle('active');

  if (e.altKey && e.shiftKey) {
    (lengEn) ? lengEn = false : lengEn = true;

    ruSymbols.map((elem) => {
      elem.classList.toggle('hidden');
    });
    enSymbols.map((elem) => {
      elem.classList.toggle('hidden');
    });
  }

  if ((e.code === 'ShiftLeft') && (!e.altKey)) {
    (shift) ? shift = false : shift = true;
    shiftLeftEl.classList.toggle('shift-active');

    specialSymbols.map((elem) => {
      elem.classList.toggle('hidden');
    });

    digitSymbols.map((elem) => {
      elem.classList.toggle('hidden');
    });
  }

  if (e.code === 'CapsLock') {
    (capsLock) ? capsLock = false : capsLock = true;
    capslockEl.classList.toggle('capslock-active');
  }
});

document.addEventListener('keyup', (e) => {
  const element = document.querySelector('div[data="' + `${e.code}` + '"]');
  textarea.focus();
  element.classList.toggle('active');
});

const mouseDown = (element) => {
  // element.addEventListener('mouseout', () => {
  //   element.classList.remove('active');
  // });

  element.classList.add('active');

  const code = element.getAttribute('data');
  if (code !== 'Tab' && code !== 'CapsLock'
    && code !== 'ShiftLeft' && code !== 'ShiftRight'
    && code !== 'AltLeft' && code !== 'AltRight'
    && code !== 'MetaLeft' && code !== 'MetaRight'
    && code !== 'Backspace' && code !== 'ControlLeft'
    && code !== 'ControlRight' && code !== 'Enter'
    && code !== 'ArrowLeft' && code !== 'ArrowUp'
    && code !== 'ArrowRight' && code !== 'ArrowDown') {
    if (!capsLock && !shift) {
      textarea.value += element.innerText;
    } else {
      textarea.value += String.prototype.toUpperCase.apply(element.innerText);
    }
  }

  if (code === 'Tab') {
    textarea.value += '\t';
  }

  if (code === 'CapsLock') {
    (capsLock) ? capsLock = false : capsLock = true;

    capslockEl.classList.toggle('capslock-active');
  }

  if (e.code === 'ShiftLeft') {
    (shift) ? shift = false : shift = true;
    shiftLeftEl.classList.toggle('shift-active');
  }

  if (code === 'Enter') {
    textarea.value += '\n';
  }

  if (code === 'Backspace') {
    textarea.value = textarea.value.slice(0, -1);
  }
};

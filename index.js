const rusSymbols = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
  'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', 'Win', 'Ctrl', '←', '↓', '→'];

const map = `<input id="result" autofocus>

<div class="keyboard">

<div class="row">
  <div class="key hasAlternative" data="Backquote">   <span class='letter letter-ru'>ё</span></div>
  <div class="key hasAlternative" data="Digit1">      <span>1</span><span>!</span></div>
  <div class="key hasAlternative" data="Digit2">      <span>2</span><span>"</span></div>
  <div class="key hasAlternative" data="Digit3">      <span>3</span><span>№</span></div>
  <div class="key hasAlternative" data="Digit4">      <span>4</span><span>;</span></div>
  <div class="key hasAlternative" data="Digit5">      <span>5</span><span>%</span></div>
  <div class="key hasAlternative" data="Digit6">      <span>6</span><span>:</span></div>
  <div class="key hasAlternative" data="Digit7">      <span>7</span><span>?</span></div>
  <div class="key hasAlternative" data="Digit8">      <span>8</span><span>*</span></div>
  <div class="key hasAlternative" data="Digit9">      <span>9</span><span>(</span></div>
  <div class="key hasAlternative" data="Digit0">      <span>0</span><span>)</span></div>
  <div class="key hasAlternative" data="Minus">       <span>-</span><span>_</span></div>
  <div class="key hasAlternative" data="Equal">       <span>=</span><span>+</span></div>
  <div class="key backspace"      data="Backspace">   <span>Backspace</span></div>
</div>
<div class="row">
  <div class="key tab"            data="Tab">         <span>Tab</span></div>
  <div class="key hasAlternative" data="KeyQ">        <span class='letter letter-ru'>й</span></div>
  <div class="key hasAlternative" data="KeyW">        <span class='letter letter-ru'>ц</span></div>
  <div class="key hasAlternative" data="KeyE">        <span class='letter letter-ru'>у</span></div>
  <div class="key hasAlternative" data="KeyR">        <span class='letter letter-ru'>к</span></div>
  <div class="key hasAlternative" data="KeyT">        <span class='letter letter-ru'>е</span></div>
  <div class="key hasAlternative" data="KeyY">        <span class='letter letter-ru'>н</span></div>
  <div class="key hasAlternative" data="KeyU">        <span class='letter letter-ru'>г</span></div>
  <div class="key hasAlternative" data="KeyI">        <span class='letter letter-ru'>ш</span></div>
  <div class="key hasAlternative" data="KeyO">        <span class='letter letter-ru'>щ</span></div>
  <div class="key hasAlternative" data="KeyP">        <span class='letter letter-ru'>з</span></div>
  <div class="key hasAlternative" data="BracketLeft"> <span class='letter letter-ru'>х</span></div>
  <div class="key hasAlternative" data="BracketRight"><span class='letter letter-ru'>ъ</span></div>
  <div class="key hasAlternative" data="Backslash">   <span>\\</span><span>/</span></div>
</div>
<div class="row">
  <div class="key capslock"       data="CapsLock">    <span>Caps Lock</span></div>
  <div class="key hasAlternative" data="KeyA">        <span class='letter letter-ru'>ф</span></div>
  <div class="key hasAlternative" data="KeyS">        <span class='letter letter-ru'>ы</span></div>
  <div class="key hasAlternative" data="KeyD">        <span class='letter letter-ru'>в</span></div>
  <div class="key hasAlternative" data="KeyF">        <span class='letter letter-ru'>а</span></div>
  <div class="key hasAlternative" data="KeyG">        <span class='letter letter-ru'>п</span></div>
  <div class="key hasAlternative" data="KeyH">        <span class='letter letter-ru'>р</span></div>
  <div class="key hasAlternative" data="KeyJ">        <span class='letter letter-ru'>о</span></div>
  <div class="key hasAlternative" data="KeyK">        <span class='letter letter-ru'>л</span></div>
  <div class="key hasAlternative" data="KeyL">        <span class='letter letter-ru'>д</span></div>
  <div class="key hasAlternative" data="Semicolon">   <span class='letter letter-ru'>ж</span></div>
  <div class="key hasAlternative" data="Quote">       <span class='letter letter-ru'>э</span></div>
  <div class="key enter"          data="Enter">       <span>Enter</span></div>
</div>
<div class="row">
  <div class="key shift"          data="ShiftLeft">   <span>Shift</span></div>
  <div class="key hasAlternative" data="KeyZ">        <span class='letter letter-ru'>я</span></div>
  <div class="key hasAlternative" data="KeyX">        <span class='letter letter-ru'>ч</span></div>
  <div class="key hasAlternative" data="KeyC">        <span class='letter letter-ru'>с</span></div>
  <div class="key hasAlternative" data="KeyV">        <span class='letter letter-ru'>м</span></div>
  <div class="key hasAlternative" data="KeyB">        <span class='letter letter-ru'>и</span></div>
  <div class="key hasAlternative" data="KeyN">        <span class='letter letter-ru'>т</span></div>
  <div class="key hasAlternative" data="KeyM">        <span class='letter letter-ru'>ь</span></div>
  <div class="key hasAlternative" data="Comma">       <span class='letter letter-ru'>б</span></div>
  <div class="key hasAlternative" data="Period">      <span class='letter letter-ru'>ю</span></div>
  <div class="key hasAlternative" data="Slash">       <span class='letter'>.</span><span>,</span></div>
  <div class="key arrow"          data="ArrowUp">     <span>&#8593;</span></div>
  <div class="key rightShift"     data="ShiftRight">  <span>Shift</span></div>
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


const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
wrapper.innerHTML = map;
document.body.append(wrapper);

let capslock = false;

let keys = document.querySelectorAll('.key');
// convert to array
keys = Array.prototype.slice.call(keys);


keys.map((elem) => {
  elem.addEventListener('mousedown', () => {
    handleMouseDown(elem);
    console.log('mousedown');
  });

  elem.addEventListener('mouseup', () => {
    elem.classList.toggle('active');
    console.log('mouseup');
  });
  return true;
});

document.addEventListener('keydown', (e) => {
  // eslint-disable-next-line no-useless-concat
  const element = document.querySelector('div[data="' + `${e.code}` + '"]');
  element.classList.toggle('active');
  console.log(`${e.keyCode} keydown`);
});

document.addEventListener('keyup', (e) => {
  // eslint-disable-next-line no-useless-concat
  const element = document.querySelector('div[data="' + `${e.code}` + '"]');
  element.classList.toggle('active');
  console.log(`${e.code} keyup`);
});

const textarea = document.getElementById('result');


const handleMouseDown = (element) => {
  element.addEventListener('mouseout', () => {
    element.classList.remove('active');
  });
  textarea.focus();
  element.classList.add('active');

  const code = element.getAttribute('data');
  if (code !== 'Tab'
         && code !== 'CapsLock'
         && code !== 'ShiftLeft'
         && code !== 'ShiftRight'
         && code !== 'AltLeft'
         && code !== 'AltRight'
         && code !== 'MetaLeft'
         && code !== 'MetaRight'
         && code !== 'Backspace'
         && code !== 'ControlLeft'
         && code !== 'ControlRight'
         && code !== 'Enter'
         && code !== 'ArrowLeft'
         && code !== 'ArrowUp'
         && code !== 'ArrowRight'
         && code !== 'ArrowDown') {
    textarea.value += element.innerText;
  }
  if (code === 'Tab') {
    textarea.value += '\t';
  }
  if (code === 'CapsLock') {

  }
  if (code === 'Enter') {
    textarea.value += '\n';
  }
  if (code === 'ShiftRight' || code === 'ShiftLeft') {

  }
  if (code === 'Backspace') {
    textarea.value = textarea.value.slice(0, -1);
  }
};

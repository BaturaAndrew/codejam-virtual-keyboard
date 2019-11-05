const keyboardKeys = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8,
  9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220,
  20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13,
  16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16,
  17, 91, 18, 32, 18, 91, 17, 37, 40, 39,
];

const keys = {
  192: {
    code: 'Backquote',
    keyName: {
      first: '`',
      ru: 'ё',
      en: '~',
    },
  },
  49: {
    code: 'Digit1',
    keyName: {
      first: '1',
      en: '!',
      ru: '!',
    },
  },
  50: {
    code: 'Digit2',
    keyName: {
      first: '2',
      en: '@',
      ru: '"',
    },
  },
  51: {
    code: 'Digit3',
    keyName: {
      first: '3',
      en: '#',
      ru: '№',
    },
  },
  52: {
    code: 'Digit4',
    keyName: {
      first: '4',
      en: '$',
      ru: ';',
    },
  },
  53: {
    code: 'Digit5',
    keyName: {
      first: '5',
      en: '%',
      ru: '%',
    },
  },
  54: {
    code: 'Digit6',
    keyName: {
      first: '6',
      en: '^',
      ru: ':',
    },
  },
  55: {
    code: 'Digit7',
    keyName: {
      first: '7',
      en: '&',
      ru: '?',
    },
  },
  56: {
    code: 'Digit8',
    keyName: {
      first: '8',
      en: '*',
      ru: '*',
    },
  },
  57: {
    code: 'Digit9',
    keyName: {
      first: '9',
      en: '(',
      ru: '(',
    },
  },
  48: {
    code: 'Digit0',
    keyName: {
      first: '0',
      en: ')',
      ru: ')',
    },
  },
  189: {
    code: 'Minus',
    keyName: {
      ru: '-',
      en: '-',
    },
  },
  187: {
    code: 'Equal',
    keyName: {
      ru: '=',
      en: '=',
    },
  },
  8: {
    code: 'Backspace',
    special: true,
  },


  9: {
    code: 'Tab',
    special: true,
  },
  81: {
    code: 'KeyQ',
    keyName: {
      ru: 'й',
      en: 'q',
    },
  },
  87: {
    code: 'KeyW',
    keyName: {
      ru: 'ц',
      en: 'w',
    },
  },
  69: {
    code: 'KeyE',
    keyName: {
      ru: 'у',
      en: 'e',
    },
  },
  82: {
    code: 'KeyR',
    keyName: {
      ru: 'к',
      en: 'r',
    },
  },
  84: {
    code: 'KeyT',
    keyName: {
      ru: 'е',
      en: 't',
    },
  },
  89: {
    code: 'KeyY',
    keyName: {
      ru: 'н',
      en: 'y',
    },
  },
  85: {
    code: 'KeyU',
    keyName: {
      ru: 'г',
      en: 'u',
    },
  },
  73: {
    code: 'KeyI',
    keyName: {
      ru: 'ш',
      en: 'i',
    },
  },
  79: {
    code: 'KeyO',
    keyName: {
      ru: 'щ',
      en: 'o',
    },
  },
  80: {
    code: 'KeyP',
    keyName: {
      ru: 'з',
      en: 'p',
    },
  },
  219: {
    code: 'BracketLeft',
    keyName: {
      ru: 'х',
      en: '[',
    },
  },
  221: {
    code: 'BracketRight',
    keyName: {
      ru: 'ъ',
      en: ']',
    },
  },
  220: {
    code: 'Backslash',
    keyName: {
      ru: '\\',
      en: '\\',
    },
  },


  20: {
    code: 'CapsLock',
    special: true,
  },
  65: {
    code: 'KeyA',
    keyName: {
      ru: 'ф',
      en: 'a',
    },
  },
  83: {
    code: 'KeyS',
    keyName: {
      ru: 'ы',
      en: 's',
    },
  },
  68: {
    code: 'KeyD',
    keyName: {
      ru: 'в',
      en: 'd',
    },
  },
  70: {
    code: 'KeyF',
    keyName: {
      ru: 'а',
      en: 'f',
    },
  },
  71: {
    code: 'KeyG',
    keyName: {
      ru: 'п',
      en: 'g',
    },
  },
  72: {
    code: 'KeyH',
    keyName: {
      ru: 'р',
      en: 'h',
    },
  },
  74: {
    code: 'KeyJ',
    keyName: {
      ru: 'о',
      en: 'j',
    },
  },
  75: {
    code: 'KeyK',
    keyName: {
      ru: 'л',
      en: 'k',
    },
  },
  76: {
    code: 'KeyL',
    keyName: {
      ru: 'д',
      en: 'l',
    },
  },
  186: {
    code: 'Semicolon',
    keyName: {
      ru: 'ж',
      en: ';',
    },
  },
  222: {
    code: 'Quote',
    keyName: {
      ru: 'э',
      en: "'",
    },
  },
  13: {
    code: 'Enter',
    special: true,
  },

  16: {
    code: 'Shift',
    code1: 'ShiftLeft',
    code2: 'ShiftRight',
    special: true,
  },
  90: {
    code: 'KeyZ',
    keyName: {
      ru: 'я',
      en: 'z',
    },
  },
  88: {
    code: 'KeyX',
    keyName: {
      ru: 'ч',
      en: 'x',
    },
  },
  67: {
    code: 'KeyC',
    keyName: {
      ru: 'с',
      en: 'c',
    },
  },
  86: {
    code: 'KeyV',
    keyName: {
      ru: 'м',
      en: 'v',
    },
  },
  66: {
    code: 'KeyB',
    keyName: {
      ru: 'и',
      en: 'b',
    },
  },
  78: {
    code: 'KeyN',
    keyName: {
      ru: 'т',
      en: 'n',
    },
  },
  77: {
    code: 'KeyM',
    keyName: {
      ru: 'ь',
      en: 'm',
    },
  },
  188: {
    code: 'Comma',
    keyName: {
      ru: 'б',
      en: ',',
    },
  },
  190: {
    code: 'Period',
    keyName: {
      ru: 'ю',
      en: '.',
    },
  },
  191: {
    code: 'Slash',
    special: true,
  },
  38: {
    code: 'ArrowUp',
    special: true,
  },

  17: {
    code: 'Control',
    code1: 'ControlLeft',
    code2: 'ControlRight',
    special: true,
  },
  91: {
    code: 'MetaLeft',
    code1: 'ControlLeft',
    code2: 'ControlRight',
    special: true,
  },
  18: {
    code: 'Alt',
    code1: 'AltLeft',
    code2: 'AltRight',
    special: true,
  },
  32: {
    code: 'Space',
    special: true,
  },
  37: {
    code: 'ArrowLeft',
    special: true,
  },
  40: {
    code: 'ArrowDown',
    special: true,
  },
  39: {
    code: 'ArrowRight',
    special: true,
  },

};

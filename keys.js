
const keyboardKeys = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8,
  9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220,
  20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13,
  16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16,
  17, 91, 18, 32, 18, 91, 17, 37, 40, 39];

const keys = {
  81: {
    isLetter: true,
    keyName: {
      ru: 'й',
      en: 'q',
    },
  },
  87: {
    isLetter: true,
    keyName: {
      ru: 'ц',
      en: 'w',
    },
  },
  69: {
    isLetter: true,
    keyName: {
      ru: 'у',
      en: 'e',
    },
  },
  82: {
    isLetter: true,
    keyName: {
      ru: 'к',
      en: 'r',
    },
  },
  84: {
    isLetter: true,
    keyName: {
      ru: 'е',
      en: 't',
    },
  },
  89: {
    isLetter: true,
    keyName: {
      ru: 'н',
      en: 'y',
    },
  },
  85: {
    isLetter: true,
    keyName: {
      ru: 'г',
      en: 'u',
    },
  },
  73: {
    isLetter: true,
    keyName: {
      ru: 'ш',
      en: 'i',
    },
  },
  79: {
    isLetter: true,
    keyName: {
      ru: 'щ',
      en: 'o',
    },
  },
  80: {
    isLetter: true,
    keyName: {
      ru: 'з',
      en: 'p',
    },
  },
  219: {
    isLetter: true,
    keyName: {
      ru: 'х',
      en: '[',
    },
  },
  221: {
    isLetter: true,
    keyName: {
      ru: 'ъ',
      en: ']',
    },
  },
  65: {
    isLetter: true,
    keyName: {
      ru: 'ф',
      en: 'a',
    },
  },
  83: {
    isLetter: true,
    keyName: {
      ru: 'ы',
      en: 's',
    },
  },
  68: {
    isLetter: true,
    keyName: {
      ru: 'в',
      en: 'd',
    },
  },
  70: {
    isLetter: true,
    keyName: {
      ru: 'а',
      en: 'f',
    },
  },
  71: {
    isLetter: true,
    keyName: {
      ru: 'п',
      en: 'g',
    },
  },
  72: {
    isLetter: true,
    keyName: {
      ru: 'р',
      en: 'h',
    },
  },
  74: {
    isLetter: true,
    keyName: {
      ru: 'о',
      en: 'j',
    },
  },
  75: {
    isLetter: true,
    keyName: {
      ru: 'л',
      en: 'k',
    },
  },
  76: {
    isLetter: true,
    keyName: {
      ru: 'д',
      en: 'l',
    },
  },
  186: {
    isLetter: true,
    keyName: {
      ru: 'ж',
      en: ';',
    },
  },
  222: {
    isLetter: true,
    keyName: {
      ru: 'э',
      en: "'",
    },
  },
  90: {
    isLetter: true,
    keyName: {
      ru: 'я',
      en: 'z',
    },
  },
  88: {
    isLetter: true,
    keyName: {
      ru: 'ч',
      en: 'x',
    },
  },
  67: {
    isLetter: true,
    keyName: {
      ru: 'с',
      en: 'c',
    },
  },
  86: {
    isLetter: true,
    keyName: {
      ru: 'м',
      en: 'v',
    },
  },
  66: {
    isLetter: true,
    keyName: {
      ru: 'и',
      en: 'b',
    },
  },
  78: {
    isLetter: true,
    keyName: {
      ru: 'т',
      en: 'n',
    },
  },
  77: {
    isLetter: true,
    keyName: {
      ru: 'ь',
      en: 'm',
    },
  },
  188: {
    isLetter: true,
    keyName: {
      ru: 'б',
      en: ',',
    },
  },
  190: {
    isLetter: true,
    keyName: {
      ru: 'ю',
      en: '.',
    },
  },
  191: {
    isLetter: true,
    keyName: {
      ru: '.',
      en: '/',
    },
  },
  49: {
    isLetter: false,
    keyName: {
      first: '1',
      en: '!',
      ru: '!',
    },
  },
  50: {
    isLetter: false,
    keyName: {
      first: '2',
      en: '@',
      ru: '"',
    },
  },
  51: {
    iisLetter: false,
    keyName: {
      first: '3',
      en: '#',
      ru: '№',
    },
  },
  52: {
    isLetter: false,
    keyName: {
      first: '4',
      en: '$',
      ru: ';',
    },
  },
  53: {
    isLetter: false,
    keyName: {
      first: '5',
      en: '%',
      ru: '%',
    },
  },
  54: {
    isLetter: false,
    keyName: {
      first: '6',
      en: '^',
      ru: ':',
    },
  },
  55: {
    isLetter: false,
    keyName: {
      first: '7',
      en: '&',
      ru: '?',
    },
  },
  56: {
    isLetter: false,
    keyName: {
      first: '8',
      en: '*',
      ru: '*',
    },
  },
  57: {
    isLetter: false,
    keyName: {
      first: '9',
      en: '(',
      ru: '(',
    },
  },
  48: {
    isLetter: false,
    keyName: {
      first: '0',
      en: ')',
      ru: ')',
    },
  },

};

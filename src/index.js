const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(morce) {
    const array = [];

  for (let pos = 0; pos < morce.length; pos += 10) {
    array.push( decodeLetter(morce.substr(pos, 10)) );
  }

  return array.join('');
}

function decodeLetter(morceLetter) {
  if (morceLetter == "**********") {
    return ' ';
  } else {
    let morseCode = '';
    for (let pos = 0; pos < 10; pos += 2) {
      switch (morceLetter.substr(pos, 2)) {
        case '10':
          morseCode += '.';
          break;
        case '11':
          morseCode += '-';
          break;
      }
    }
    return MORSE_TABLE[morseCode];
  }
}

module.exports = {
    decode
}
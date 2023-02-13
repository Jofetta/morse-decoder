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

function decode(expr) {
    let dividedExp = [];
    const expLength = expr.length / 10;
    for (let i = 0; i < expLength; i++){
        let start = 0 + (10 * i);
        let end = 10 + (10 * i);
        dividedExp.push(expr.slice(start, end));
    }


    let replacedArray = [];
    for (let i = 0; i < dividedExp.length; i++){
        let replacedString = '';
        if (dividedExp[i] === '**********'){
            replacedString = ' ';
        } else replacedString = dividedExp[i].replaceAll('00', '').replaceAll('10', '.').replaceAll('11', '-');
        replacedArray.push(replacedString);
        
    }
let stringDecoded = '';
    for (let i = 0; i < replacedArray.length; i++){
        if (replacedArray[i] === ' '){
            stringDecoded = stringDecoded + ' ';
        } else 
 stringDecoded = stringDecoded + MORSE_TABLE[replacedArray[i]];
    }
 return stringDecoded;
}

module.exports = {
    decode
}
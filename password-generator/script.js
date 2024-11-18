const genPassBtn = document.getElementById('genPassBtn');
const passSpan = document.getElementById('passSpan');
const copyBtn = document.getElementById('copyBtn');

class genPass {
    constructor(passLength, capInc, numInc, symInc, smallInc) {
        this.lowercaseAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
        this.uppercaseAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
        this.numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
        this.symbols = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~',];
        this.passLength = passLength;
        this.pass = '';
        let i = 0;
        while (i < this.passLength) {
            if (smallInc) {
                this.pass += this.lowercaseAlphabets[Math.floor(Math.random() * this.lowercaseAlphabets.length)];
                i++;
            }
            if (capInc) {
                this.pass += this.uppercaseAlphabets[Math.floor(Math.random() * this.uppercaseAlphabets.length)];
                i++;
            }
            if (numInc) {
                this.pass += this.numbers[Math.floor(Math.random() * this.numbers.length)];
                i++;
            }
            if (symInc) {
                this.pass += this.symbols[Math.floor(Math.random() * this.symbols.length)];
                i++;
            }
        }
        return this.pass;
    }
}

genPassBtn.addEventListener('click', () => {
    const passLength = document.getElementById('passLength').value;
    const capInc = document.getElementById('capInc').checked;
    const numInc = document.getElementById('numInc').checked;
    const symInc = document.getElementById('symInc').checked;
    const smallInc = document.getElementById('smallInc').checked;
    if (capInc || numInc || symInc || smallInc) {
        let newPass = new genPass(passLength, capInc, numInc, symInc, smallInc);
        passSpan.innerText = newPass.pass;
    } else {
        passSpan.innerText = "password";
    }
})

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(passSpan.innerText)
})

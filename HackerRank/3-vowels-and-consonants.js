const s = 'javascriptloops';

function vowelsAndConsonants(s) {
    const n = s.length;
    
    for (let i = 0; i < n; i++) {
        if (([i] == "a") || ([i] == "e") || ([i] == "i") || ([i] == "o") || (s[i] == "u")) {
              console.log([i]); //prints all vowels
        }
    }

    //TODO
};

vowelsAndConsonants();

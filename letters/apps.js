var cons = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

var vow = ["a", "e", "i", "o","u"]

var phrase = document.getElementById('phrase').value;

var calc = document.getElementById('calc');

var output = document.getElementById('output');

calc.onsubmit = function calculate() {
    event.preventDefault();

    for (var i = 0; i < phrase.length; i++) {
        
        var letter = phrase[i];

        vow.forEach(function(el){
            if(letter == el){
                vowel++;
            }
        });

        cons.forEach(function(el){
            if (letter === el){
                consonant++;
            }
        });

        console.log(vowel);
        

        ouput.innerHTML = 'There are ' + vowel + ' vowels, and ' + consonant + ' consonants.'
        
    }
};


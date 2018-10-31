var fat = ['Yo momma\'s so fat, she brought a spoon to the Super Bowl.', 'Yo momma\'s so fat, when she went to the beach, all the whales started singing "We Are Family.', 'Yo momma\'s so fat, even Dora can\'t explore her.', 'Yo momma\'s so fat, she was baptized at SeaWorld.', 'Yo momma\'s so fat, it took me two trains, a plane, and a bus to get on her good side.', 'Yo momma\'s so fat, she stepped on a scale and it said: "To be continued."', 'Yo mama so fat she jumped in the air and got stuck', 'Yo mama so fat she\'s on both sides of the family', 'Yo mama so fat she uses a satellite to take selfies', 'Yo mama so fat she got hit by a car and had to go to the hospital to have it removed', 
]

var ugly = ['Yo mama so ugly, her portraits hang themselves', 'Yo mama so fat she jumped in the air and got stuck', 'Yo mama so ugly when she went into a hunted house and she came out with a job', 'Yo mama’s so ugly, she threw a boomerang and it wouldn\'t come back.', 'Yo mama\’s so ugly, She looked out the window and was arrested for indecent exposure.', 'Yo momma so ugly she made an onion cry.']

var sup = ['Yo mama so old she was a waitress at the last supper', 'Yo mama so old her birth certificate says expired', 'Yo mama so dirty she losses weight in the shower', 'Yo mama so short you can see her feet on her drivers license', 'Yo mama so dumb she climbed a glass wall to see what was on the other side', 'Yo mama so poor that you eat cereal with a fork to save milk!!!', 'Yo mama so old she took her drivers test on a dinosaur!']

var topic = document.getElementById('topic');
var output = document.getElementById('output');

topic.onsubmit = function yo_mama(){

    document.getElementById('container').className = 'container1';

    event.preventDefault();
    var adj = document.getElementById('adj').value.toLowerCase();

    var sup_index = Math.floor(Math.random() * (sup.length - 1))    

    var ugly_index = Math.floor(Math.random() * (ugly.length - 1))

    var fat_index = Math.floor(Math.random() * (fat.length - 1))
    
    
    if (adj == 'fat'){
        output.innerHTML = fat[fat_index];
    } else if (adj == 'ugly'){
        output.innerHTML = ugly[ugly_index];
    } else if (adj == 'suprise me'){
        output.innerHTML = sup[sup_index];
    } else {
        output.innerHTML = 'Invalid entry. Try Again.'

    }
    
    
}

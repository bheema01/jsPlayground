let dog = {
    sound: 'woof',
    talk: function() {
        console.log(this.sound);
    }
}

dog.talk();

let talkFn = dog.talk;
talkFn(); // undefined as the value of this is not based on where it's defined but it's based on where it's called/invoked

// Fixed using bind
let boundTalkFn = talkFn.bind(dog);
boundTalkFn();


// Another example
let button = document.getElementById('myButton');

button.addEventListener(
    'click',
    dog.talk.bind(dog)
); // here dog.talk is bound to dog object
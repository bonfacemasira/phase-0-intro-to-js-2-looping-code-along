// Code your solutions in this file
const cardMessage =[];
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        cardMessage.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);        
    };
    return cardMessage;
}

function countDown() {
    let count = 10;
    while (count >= 0) {
      console.log(count--);
    }
  }
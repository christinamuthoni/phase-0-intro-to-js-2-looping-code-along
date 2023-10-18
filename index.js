// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names) {
const thankYouMessages = names.map(name => `Thank you, ${name}, for the wonderful surprise gift!`);

return thankYouMessages;
}
function countDown(number){
    for (let i = number; i >= 0; i--) {
        console.log(i);
      }
    }




function cipherMessage(str,shift){
    let message = ""
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let string = str.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== " " && string[i] !== "." ) {
        let index = alphabet.indexOf(string[i]);

        message += alphabet[(index + shift) % 26];
      } else if (string[i] === "."){
        message += "."
      }else {
        message += " ";
      }
    }
  
    return message;
  }


  module.exports = cipherMessage;
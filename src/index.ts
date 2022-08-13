let address = document.getElementById("address");
let phone = document.getElementById("phone") as HTMLInputElement; // We say "Hey TypeScript" we know it is a input value element
let phone_2 = <HTMLInputElement>document.getElementById("phone"); // Other Convension of top code

console.log(address); // Doesnt Have (VALUE) property
console.log(phone.value); // Have (VALUE) property { If element as undefined program will crash }

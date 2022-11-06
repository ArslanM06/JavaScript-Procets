
// Task - 3

// 3.Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.

// 


const name1 = "ARSLAN";  
console.log(name1.toLowerCase());




const name2 = "arslan";  
console.log(name2.toUpperCase());



const name3 = "Arslan";  
let title = name3.charAt(0).toUpperCase() + name3.slice(1).toLowerCase();
console.log(title);

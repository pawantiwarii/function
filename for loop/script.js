console.log('Program Started');


// debugger

// let friends = ['mohan', 'sohan', 'geeta', 'sita', 'rahul', 'mohit', 'MATA']

// for(let i = 0; i <= friends.length; i++){
//     console.log(`${i +1}. ${friends[i]}`);
    
// }


// for(i = 0; i <=100; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

debugger
let operators =['+','-', '/', '*','%'];

let input = prompt(operators)


if( input   ==='+'){
    let num1 = prompt("Please enter the first number")
    
    let num2 = prompt("Please enter the second number")
    let sum = parseInt(num1) + parseInt(num2);
    console.log(sum);
    
}else if( input  ==='-'){
    let num1 = prompt("Please enter the first number")
    
    let num2 = prompt("Please enter the second number")
    let sum = parseInt(num1) - parseInt(num2);
    console.log(sum);
}else if( input  ==='/'){
    let num1 = prompt("Please enter the first number")
    
    let num2 = prompt("Please enter the second number")
    let sum = parseInt(num1) / parseInt(num2);
    console.log(sum);
}else if( input  ==='*'){
    let num1 = prompt("Please enter the first number")
    
    let num2 = prompt("Please enter the second number")
    let sum = parseInt(num1) * parseInt(num2);
    console.log(sum);
}else if( input   ==='%'){
    let num1 = prompt("Please enter the first number")
    
    let num2 = prompt("Please enter the second number")
    let sum = parseInt(num1) % parseInt(num2);
    console.log(sum);
}


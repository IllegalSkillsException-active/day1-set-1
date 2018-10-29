function createGreeting(name, age){
    
    
    let yearOf = yearOfBirth(age); 
    return `Hi my name is ${name}. I'm ${age} years old. I was born on ${yearOf}.`; 
    } 
    // createGreeting(); 
function yearOfBirth(age){
    if( age < 0 ){
        throw new Error("age cannot be negative"); 
        // console.log('please enter a positive number'); 
        return createGreeting();  
    }
}
    try{
        // const greeting1 = createGreeting("taylor", 12);
        // console.log(greeting1); 
}
catch(Error){
    console.error(Error); 
}
}
console.log(createGreeting('taylor', 12)); 
let yob = ''

function createGreeting(name, age){
    let yearOf = yearOfBirth(age); 

    if (typeof age !== 'number') {
        throw new Error("Age must be a number")
    } 
    
    if (typeof name !== 'string') {
        throw new Error("Name must be a string")
    } 
    
    if (name === undefined || age === undefined) {
        throw new Error("Arguments not valid")
    }   

    return `Hi my name is ${name}. I'm ${age} years old. I was born in ${yob}.`; 
} 
    // createGreeting(); 

function yearOfBirth(age){
    if( age < 0 ) {
        throw new Error("age cannot be negative"); 
        // console.log('please enter a positive number'); 
        return createGreeting();  
    } else {
        return yob = 2018 - age;
    }
}
    

try {
    const greeting1 = createGreeting("taylor", 12);
} catch(Error) { 
    console.error(Error); 
}

console.log(createGreeting("Randy", 12)); 
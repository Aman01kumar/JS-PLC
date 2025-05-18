// Imediately Invoked Function Expression (IIFE)

(function one(){  // this is named iife
    console.log(`DB is Connected`);
})() ; // this is called iife where first () ast as a function defination and second () act as a function execution
// one()

// IIFe is used to remove the polution/problem caused by the global scope 

( () => {
    console.log(`DB is Connected`);
}) ();

( (name) => {   // simple iife
    console.log(`DB is Connectoed too ${name}`);
}) ('Aman');

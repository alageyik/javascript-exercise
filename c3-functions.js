//Eloquent JavaScript - 3rd Edition
//Chapter 03 - Functions

/**
 * 
 *  "People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones."
 * 
 * - Donald Knuth
 *
 **/

// Defining a Function

const square = function(x) {
    return x * x;
};

console.log(square(9));


const makeNoise = function() {
    console.log("Pling");
};

makeNoise();

const power = function(base, exponent) {
    let result = 1;
    for(let count=0;count<exponent;count++){
        result *= base;
    }
    return result;
};

console.log(power(2,10));

//Bindings and Scopes


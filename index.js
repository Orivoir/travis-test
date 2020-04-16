module.exports = function( x ) {

    if(
        typeof x !== "number" &&
        isNaN(parseFloat( x ))
    ) {

        throw new RangeError("arg1: x should be a number") ;
    }

    return x ** 2 ;
} ;

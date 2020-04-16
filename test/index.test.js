const
    {expect, assert} = require('chai'),

    squareX = require('./../index')
;

describe('test `square-x` module' , () => {

    it('should be a function' , () => {

        assert.isFunction( squareX ) ;

    } ) ;

    it('should be RangeError' , () => {

        const fxRangeError = () => squareX( null ) ;

        expect( fxRangeError ).to.be.throw( RangeError, "arg1: x should be a number" ) ;

    } ) ;

    it('should return a number' , () => {

        assert.isNumber( squareX( 5 ) ) ;

    } ) ;

    it('should be return exactly `9` number value' , () => {

        expect( squareX( 3 ) ).to.be.equal( 9 ) ;

    } ) ;

} ) ;

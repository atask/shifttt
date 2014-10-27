'use strict';

var shifttt = require('../lib/shifttt.js'),
	should = require('chai').should();

/*
exports.shifttt = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(1);
    // tests here
    test.equal(shifttt.awesome(), 'awesome', 'should be awesome.');
    test.done();
  }
};
*/

describe('shiftt', function(){
   describe('#example()', function(){
       it('should just pass', function(){
           var foo = 4 + 5;
           foo.should.equal(9);
       });
   });
});
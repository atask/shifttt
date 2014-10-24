'use strict';

var shifttt = require('../lib/shifttt.js'),
	chai = require('chai');

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
   describe('#parse()', function(){
       it('should parse long formed tags', function(){
           var args = ['--depth=4', '--hello=world'];
           var results = shifttt.parse(args);
 
           expect(results).to.have.a.property('depth', 4);
           expect(results).to.have.a.property('hello', 'world');
       });
   });
});
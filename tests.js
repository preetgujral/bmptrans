'use strict';

var expect = require('chai').expect;
var fs = require('fs');
var index = require('./index');

var fileA = './fileA.bmp';
var fileB = './fileB.bmp';
describe('bitmap transformer', function() {
  it('given an imported file, should create fileB', function(done){
    fs.readFile(fileB, function(err, data) {
      expect(data).to.exist;
      done();
    });
  });
  it('should have correct length', function(done){
    fs.readFile(fileB, function(err, data) {
      expect(data.length).to.eql(4362);
      done();
    });
  });
});

var expect = require('chai').expect;
var index = require('./index');
var fs = require('fs')

describe('transform bitmap file', function(){
  describe('file system requests', function(){
    it ('should do something', function(){
      expect().to.be.a("number");
    })
    it('fileB should exist', function(){
      //expect()....something();
    });
    it('fileB size should equal fileA', function(){
      //expect()....something();
    });
  })

  describe('transformation', function(){
    it ('sample exportColors number should equal importColor number', function(){
      expect(index.importColor[1]).to.eql(255-index.exportColor[1]);
    })
    it('fileB should exist', function(){
      //expect()....something();
    });
    it('fileB size should equal fileA', function(){
      //expect()....something();
    });
  })
})

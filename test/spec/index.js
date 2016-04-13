'use strict';

var expect = require('chai').expect;


describe('to-path', function () {

  var toPath = require('../../');

  it('nil', function () {

    expect(toPath()).to.be.eql([]);
    expect(toPath(null)).to.be.eql([]);
  });

  it('array', function () {

    var path = ['1', '2', '3'];

    expect(toPath(path)).to.be.eql(path);
    expect(toPath(path)).to.be.not.equal(path);

    expect(toPath([1, 2, 3])).to.be.eql(path);

  });


  it('string', function () {
    expect(toPath('a')).to.be.eql(['a']);
    expect(toPath('a.b.c')).to.be.eql(['a', 'b', 'c']);
    expect(toPath('a[0].b.c')).to.be.eql(['a', '0', 'b', 'c']);
    expect(toPath('a[x].b.c')).to.be.eql(['a', 'x', 'b', 'c']);
    expect(toPath('a["x"].b.c')).to.be.eql(['a', 'x', 'b', 'c']);
    expect(toPath('\\a')).to.be.eql(['\\a']);
    expect(toPath('\\\a')).to.be.eql(['\\\a']);
    expect(toPath('\\\\a')).to.be.eql(['\\\\a']);
  });


  it('other', function () {
    expect(toPath(0)).to.be.eql(['0']);
    expect(toPath(3)).to.be.eql(['3']);
    expect(toPath(true)).to.be.eql(['true']);
  });

});

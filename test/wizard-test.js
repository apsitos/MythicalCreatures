var assert = require('chai').assert;
var Wizard = require('../exercises/wizard');

describe('Wizard', function() {

  it('should be a function', function() {
    assert.isFunction(Wizard);
  });

  it('should instantiate our good friend, Wizard', function() {
    var wizard = new Wizard();
    assert.isObject(wizard);
  });

  it('should have a name', function() {
    var wizard = new Wizard({name: 'Jhun'});
    assert.equal(wizard.name, 'Jhun');
  });

  it('should have a beard by default', function() {
    var wizard = new Wizard({name: 'Jhun'});
    assert(wizard.bearded);
  });

  it('should not always be bearded', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert(!wizard.bearded)
  });

  it('should have root powers', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.incantation('chown lumos'), 'CHOWN LUMOS');
  });

  it('should have lots of root powers', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.incantation('Expecto Patronum'), 'EXPECTO PATRONUM');
  });

  it('should start rested', function() {
    var wizard = new Wizard({name: 'Jack', bearded: false});
    assert.equal(wizard.isRested(), true);// assert isRested() returns true
  });

  it.skip('should be able to cast spells', function() {
    // create wizard
    // assert wizard.cast() returns 'MAGIC BULLET'
  });

  it.skip('should only be able to cast 3 spells', function() {
    // create wizard
    // assert isRested() is true
    // cast()
    // assert isRested() is true
    // cast()
    // assert isRested() is true
    // cast()
    // assert isRested() is false
    // assert cast() returns 'I SHALL NOT CAST!'
  });
});

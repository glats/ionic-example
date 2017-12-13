'use strict';

describe('module: main, component: myComponent', function () {
  var $componentController;

  beforeEach(module('main'));
  beforeEach(inject(function (_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('controller exists', function () {
    // Here we are passing actual bindings to the component
    var ctrl = $componentController('myComponent');

    expect(ctrl).toBeDefined();
  });
});

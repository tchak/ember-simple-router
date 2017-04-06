import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | routes');

test('visiting routes', function(assert) {
  visit('/hello');

  andThen(function() {
    assert.equal(currentURL(), '/hello');
  });

  visit('/pages/1');

  andThen(function() {
    assert.equal(currentURL(), '/pages/1');
  });
});

import Ember from 'ember';

const Router = Ember.Router.extend();
const _map = Router.map;

function context(cb) {
  return function() {
    cb.call(null, wrap(this, this.route));
  };
}

function wrap(dsl, route) {
  return function(name, options, cb) {
    if (typeof options === 'function') {
      cb = options;
      options = undefined;
    }

    let args = [name, options];

    if (cb) {
      args.push(context(cb));
    }

    route.apply(dsl, args);
  };
}

Router.reopenClass({
  map(cb) {
    _map.call(this, context(cb));
    return this;
  }
});

export default Router;

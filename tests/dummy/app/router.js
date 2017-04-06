import Router from 'ember-simple-router';
import config from './config/environment';

export default Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
}).map(route => {
  route('hello');
  route('pages', route => {
    route('page', { path: ':id' });
  });
});

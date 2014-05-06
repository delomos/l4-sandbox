// require other, dependencies here, ie:
// require('./vendor/moment');

require('../vendor/jquery');
require('../vendor/handlebars');
require('../vendor/ember');
require('../vendor/ember-data');

var App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter;

module.exports = App;

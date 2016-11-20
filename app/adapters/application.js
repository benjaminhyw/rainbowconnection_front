import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://rainbowconnection.com/json'
});

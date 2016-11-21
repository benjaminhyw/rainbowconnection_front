import Ember from 'ember';
import DS from 'ember-data';
import JSONSerializer from 'ember-data/serializers/json';

export default DS.RESTAPISerializer.extend({
  keyForAttribute(key) {
    return Ember.String.decamelize(key);
  }
});

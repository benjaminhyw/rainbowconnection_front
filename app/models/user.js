import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  fullname: DS.attr(),
  favorite_color: DS.attr(),
  email: DS.attr()
});

import Ember from 'ember';

let users = [{
  id: 1,
  fullname: 'Ben Flores',
  favorite_color: 'Blue',
  email: 'ben@gmail.com'
}, {
  id: 2,
  fullname: 'Jasmine Flores',
  favorite_color: 'Purple',
  email: 'jasmine@gmail.com'
}, {
    id: 2,
    fullname: 'Mochi Isawsum',
    favorite_color: 'Red',
    email: 'mochi@gmail.com'
}];

export default Ember.Route.extend({
  model() {
      return users;
    }
});

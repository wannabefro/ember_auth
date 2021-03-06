var attr = DS.attr;

App.User = DS.Model.extend({

  username: attr(),
  first_name: attr(),
  last_name: attr(),

  fullName: function(){
    return this.get('first_name') + ' ' + this.get('last_name');
  }.property('first_name', 'last_name')

});

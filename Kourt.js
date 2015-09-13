Boundaries = new Mongo.Collection("Boundaries");
Boundaries001 = new Mongo.Collection("Boundaries001");
Boundaries005 = new Mongo.Collection("Boundaries005");
Defendants = new Mongo.Collection("Defendent");
Citations = new Mongo.Collection("Citations");

Users = new Mongo.Collection("Users");

allOfThem=[];

if (Meteor.isClient) {
  Session.setDefault('errorMessage', '');
  Session.setDefault('driversLicense','');
  Session.setDefault('ssNumber','');
  Session.setDefault('currentScreen','hello');
  Session.setDefault('citations',[]);
  
  function isNotRegistered() {
      return Session.get('ssNumber') == '' && Session.get('driversLicense') == '';
  }
  
  Router.route('/', function () {
      this.render('hello');
  });
  
  Router.route('/myCitations', function() {
      if(isNotRegistered()) {
          Session.set('errorMessage','You must be registered to view your citations');
      } else {
        this.render('myCitations');
      }
  });
  
  Router.route('/muniMap', function() {
      this.render('muniMap');
  });

  Template.errors.helpers({
    errorMessage: function () {
      return Session.get('errorMessage');
    }
  });
  
  Template.hello.helpers({
      isNotRegistered:function() {
          return isNotRegistered();
      }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
      
  });
}

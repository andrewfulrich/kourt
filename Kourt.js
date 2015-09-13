Boundaries = new Mongo.Collection("Boundaries");
Boundaries001 = new Mongo.Collection("Boundaries001");
Boundaries005 = new Mongo.Collection("Boundaries005");
Defendants = new Mongo.Collection("Defendent");
Citations = new Mongo.Collection("Citations");

Users = new Mongo.Collection("Users");

allOfThem=[];

stripObjectId = function(theString) {
    //return theString.replace(
}

if (Meteor.isClient) {
    CurrentUser = new Mongo.Collection('currentUser');
    
    function isNotRegistered() {
        return Session.get('ssNumber') == '' && Session.get('driversLicense') == '';
    }
    
    Meteor.startup(function () {
        if(Session.get('errorMessage') == undefined) {
         Session.setDefault('errorMessage', '');
            Session.setDefault('driversLicense','');
            Session.setDefault('ssNumber','');
            Session.setDefault('currentScreen','hello');
            Session.setDefault('citations',[]);
        }
    });
  
  
  Router.route('/', function () {
      if(isNotRegistered()) {
          this.render('register');
      } else {
          this.render('startMenu');
      }
  });
  
  Router.route('/myCitations', function() {
      if(isNotRegistered()) {
          Session.set('errorMessage','You must be registered to view your citations');
      } else {
        this.render('myCitations');
      }
  });
  Router.route('lookupTicket', function() {
      this.render('lookupTicket');
  });
  Router.route('/muniMap', function() {
      this.render('muniMap');
  });

  Template.errors.helpers({
    errorMessage: function () {
      return Session.get('errorMessage');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
      
  });
}

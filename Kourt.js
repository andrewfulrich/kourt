Boundaries = new Mongo.Collection("Boundaries");
Boundaries001 = new Mongo.Collection("Boundaries001");
Boundaries005 = new Mongo.Collection("Boundaries005");
Users = new Mongo.Collection("Users");

allOfThem=[];

if (Meteor.isClient) {
  Session.setDefault('errorMessage', '');
  Session.setDefault('driversLicense','');
  Session.setDefault('ssNumber','');
  Session.setDefault('currentScreen','hello');
  
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

  Template.hello.events({
      'click #registerSubmit': function (event,template) {
        var ssNumber=template.find("#ssNumber").value;
        var driversLicense=template.find("#driversLicense").value;
        // increment the counter when button is clicked
        if(ssNumber != "") {
            Session.set('ssNumber',ssNumber);
        }
        if(driversLicense != "") {
            Session.set('driversLicense',driversLicense);
        }
        if(driversLicense == "" && ssNumber == "") {
            Session.set('errorMessage',"Please enter either your social security number or drivers license number to register");
        }
        else {
            Session.set('errorMessage','');
            //probably put the ssNumber/driversLicense in the db
        }
      allOfThem=Boundaries.findOne();
    }
  });
  
  Template.startMenu.events({
     'click #muniMap' :  function() {
         Router.go('/muniMap');
     },
     'click #myCitations' : function() {
         Router.go('/myCitations');
     }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
      
  });
}

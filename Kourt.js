Boundaries = new Mongo.Collection("Boundaries");
Boundaries001 = new Mongo.Collection("Boundaries001");
Boundaries005 = new Mongo.Collection("Boundaries005");
Defendants = new Mongo.Collection("Defendent");
Citations = new Mongo.Collection("Citations");

Users = new Mongo.Collection("Users");

allOfThem=[];

stripObjectId = function(theString) {
    return theString.replace('ObjectID("','').replace('")');
}

if (Meteor.isClient) {
    CurrentUser = new Mongo.Collection('currentUser');
    
    function isNotRegistered() {
        return Session.get('ssNumber') == '' && Session.get('driversLicense') == '';
    }
    
    Meteor.startup(function () {
        if(Session.get('errorMessage') == undefined) {
         /*Session.setDefault('errorMessage', '');
            Session.setDefault('driversLicense','');
            Session.setDefault('ssNumber','');
            Session.setDefault('currentScreen','hello');
            Session.setDefault('citations',[]);*/
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
  Router.route('/lookupTicket', function() {
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

    getDefendant = function(driversLicense,ssNumber) {
        var defendant={};
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
            var isFound=false;
            if(driversLicense != "") {
                defendant = Defendants.findOne({drivers_license_number__c: driversLicense});
            }
            if(!defendant.hasOwnProperty("_id") && ssNumber != "") { //if we didn't find anything from that search, try this
                defendant = Defendants.findOne({social_security: ssNumber});
            }
            if(defendant.hasOwnProperty("_id")) {
                isFound=true;
                Session.set('defendant',defendant); 
            } else {
                isFound=false;
                defendant={drivers_license_number__c: driversLicense, social_security: ssNumber};
                Session.set('defendant',defendant); 
            }
            //CurrentUser.insert({driversLicense: driversLicense, ssNumber: ssNumber,isFound:isFound,defendant:defendant});
        }
        return defendant;
    }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
      
  });
}

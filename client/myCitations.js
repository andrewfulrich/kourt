Template.myCitations.onRendered(function() {
      var defendant = Session.get('defendant');
      var currentUser = CurrentUser.findOne();
      Session.set('defendant',currentUser.defendant);
      var citations=[];
      var driversLicense = Session.get('driversLicense'); //valid sample one: drivers_license_number__c (String): "Z854997336"
      var ssNumber= Session.get('ssNumber');
      
      if(defendant != undefined) { //we've found a defendant matching the info given
          Session.set('errorMessage','');
          citations = Citations.find({DefendentID__c: defendant._id.toString()}).map(function(u) { return u; });

          Session.set('citations',citations);
          if(citations.length > 0) {
              //TODO get all violations using $in clause
              
          }
      } else {
          //Session.set('errorMessage','We could not find you in the database with the information you provided.');
      }
      
      loadClassie();
      loadMenujs();
  });
  Template.myCitations.helpers({
      getCitations:function() {
          return Session.get('citations');
      }
  });
  
  Template.myCitations.events({
      'click #muniMap' :  function() {
          Router.go('/muniMap');
      },
      'click #myCitations' : function() {
          Router.go('/myCitations');
      },
      'click #lookupTicket' : function() {
          Router.go('/lookupTicket');
      }
  });

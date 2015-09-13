Template.myCitations.onRendered(function() {
      var defendant = {};
      var citations=[];
      var driversLicense = Session.get('driversLicense'); //valid sample one: drivers_license_number__c (String): "Z854997336"
      var ssNumber= Session.get('ssNumber');
      if(driversLicense != "") {
          defendant = Defendants.findOne({drivers_license_number__c: driversLicense});
      }
      if(!defendant.hasOwnProperty("_id") && ssNumber != "") { //if we didn't find anything from that search, try this
          defendant = Defendants.findOne({drivers_license_number__c: driversLicense});
      }
      
      if(defendant.hasOwnProperty("_id")) { //we've found a defendant matching the info given
          Session.set('defendant',defendant);
          citations = Citations.find({DefendentID__c: defendant._id.toString()}).map(function(u) { return u; });

          Session.set('citations',citations);
          if(citations.length > 0) {
              //TODO get all violations using $in clause
          }
      } else {
          //insert a new record for defendant
      }
  });
  Template.myCitations.helpers({
      getCitations:function() {
          return Session.get('citations');
      }
  });
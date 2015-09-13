if (Meteor.isClient) {
Template.register.events({
      'click #registerSubmit': function (event,template) {
        var ssNumber=template.find("#q1").value;
        var driversLicense=template.find("#q4").value;
        
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
                defendant = Defendants.findOne({drivers_license_number__c: driversLicense});
            }
            if(defendant.hasOwnProperty("_id")) {
                isFound=true;
               Session.set('defendant',defendant); 
            } else {
                isFound=false;
               Session.set('defendant',undefined); 
            }
            CurrentUser.insert({driversLicense: driversLicense, ssNumber: ssNumber,isFound:isFound,defendant:defendant});
        }
      allOfThem=Boundaries.findOne();
    }
  });
// 
Template.register.onRendered(function() {
    loadClassie();
    loadFullScreenForm();
    loadSelectFx();
    
    (function() {
        var formWrap = document.getElementById( 'fs-form-wrap' );
        
        [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
            new SelectFx( el, {
                stickyPlaceholder: false,
                onChange: function(val){
                    document.querySelector('span.cs-placeholder').style.backgroundColor = val;
                }
            });
        } );
        
        new FForm( formWrap, {
            onReview : function() {
                classie.add( document.body, 'overview' ); // for demo purposes only
            }
        } );
    })();
});
}
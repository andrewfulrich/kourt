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
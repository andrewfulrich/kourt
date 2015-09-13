Template.lookupTicket.events({
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
  
  Template.lookupTicket.onRendered(function() {
      loadClassie();
      loadMenujs();
  });
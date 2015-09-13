Template.muniMap.events({
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
  
  Template.muniMap.onRendered(function() {
      loadClassie();
      loadMenujs();
  });
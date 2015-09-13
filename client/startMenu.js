Template.startMenu.events({
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
  
  Template.startMenu.onRendered(function() {
      loadClassie();
      loadMenujs();
      getDefendant();
  });
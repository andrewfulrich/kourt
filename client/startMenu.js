Template.startMenu.events({
     'click #muniMap' :  function() {
         Router.go('/muniMap');
     },
     'click #myCitations' : function() {
         Router.go('/myCitations');
     }
  });
  
  Template.startMenu.onRendered(function() {
      loadClassie();
      loadMenujs();
  });
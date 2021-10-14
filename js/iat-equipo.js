// Place any jQuery/helper plugins in here.
var $myGroup = $('#equipo');
$myGroup.on('show.bs.collapse','.collapse', function() {
  $myGroup.find('.collapse.show').collapse('hide');
  });
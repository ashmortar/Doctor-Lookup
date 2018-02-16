import {DoctorFinder} from './../js/DoctorLookup.js';

$(document).ready(function(){

  let finder = new DoctorFinder();
  let results = finder.setLatLongWithZip(97204);
  setTimeout(function() {
    console.log(finder.latitude);
    console.log(finder.longitude);
    console.log(finder.errorResponse);
  }, 1000);

  setInterval(function() {
    if(finder.errorResponse != null) {
      alert(finder.errorResponse);
      finder.errorResponse = null;
    }
  }, 500);

});

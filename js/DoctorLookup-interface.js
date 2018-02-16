import {DoctorFinder} from './../js/DoctorLookup.js';

$(document).ready(function(){

  let finder = new DoctorFinder();
  finder.setLatLongWithZip(97204);

})

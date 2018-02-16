import {DoctorFinder} from './../js/DoctorLookup.js';

$(document).ready(function(){

  //make a default doctor finder
  let doctorFinder = new DoctorFinder();
  //populate the specialties menu
  let specialties = doctorFinder.getSpecialties();
  setTimeout(function() {
    for (let i = 0; i < specialties.length; i++) {
      $('#specialty-dropdown').append(`<a class="dropdown-item" id="${specialties[i].uid}" href="#">${specialties[i].name}</a>`);
    }
  }, 1000);

  //show the welcome
  $('#welcome').show();
  $('nameResults').hide();
  $('symptomResults').hide();

});

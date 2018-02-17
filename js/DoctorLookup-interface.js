import {DoctorFinder} from './../js/DoctorLookup.js';

$(document).ready(function(){
  let nameResultArray = [];
  let symptomResultArray = [];
  let specialtyResultArray = [];
  let locationResultArray = [];

  //make a default doctor finder
  let doctorFinder = new DoctorFinder();
  locationResultArray = doctorFinder.setLatLongWithZip(97204);
  //populate the specialties menu
  specialtyResultArray = doctorFinder.getSpecialties();
  setTimeout(function() {
    for (let i = 0; i < specialtyResultArray.length; i++) {
      $('#specialty-dropdown').append(`<a class="dropdown-item" id="${specialtyResultArray[i].uid}" href="#">${specialtyResultArray[i].name}</a>`);
    }
  }, 1000);

  //show the welcome
  $('.welcome').show();
  $('.nameResults').hide();
  $('.symptomResults').hide();
  $('.specialtyResults').hide();
  $('.submittedResults').hide();
  $('.location').hide();

  //go back to welcome state
  $('#home').click(function() {
    $('.welcome').show();
    $('.nameResults').hide();
    $('.symptomResults').hide();
    $('.specialtyResults').hide();
    $('.submittedResults').hide();
    $('.location').hide();
  });

  // show user location form
  $('#set-location').click(function() {
    $('.welcome').hide();
    $('.nameResults').hide();
    $('.symptomResults').hide();
    $('.specialtyResults').hide();
    $('.submittedResults').hide();
    $('.location').show();
  });

  //set user Location
  $('#location').submit(function(event) {
    event.preventDefault();
    $('.welcome').hide();
    $('.nameResults').hide();
    $('.symptomResults').hide();
    $('.specialtyResults').hide();
    $('.submittedResults').show();
    $('.location').hide();


    let zipcode = parseInt($('#zipcode').val());
    locationResultArray = doctorFinder.setLatLongWithZip(zipcode);
    setTimeout(function() {
      if(locationResultArray[1] != undefined) {
        //error happened
      } else {
        $('.submittedResults').append(`your location has been set as ${locationResultArray[0]}`);
        console.log(locationResultArray[0]);
      }
    }, 500);
  });

  //show results by nameResults
  $('#name-search').submit(function(event) {
    $('.nameResults').empty();
    $('.welcome').hide();
    $('.nameResults').show();
    $('.symptomResults').hide();
    $('.specialtyResults').hide();
    $('.submittedResults').hide();
    $('.location').hide();
    event.preventDefault();
    let name = $('#name').val();
    nameResultArray = doctorFinder.findByName(name);
    setTimeout(function() {
      if (nameResultArray.length != 0) {
        for (var i = 0; i < nameResultArray.length; i++) {
          if(nameResultArray[i].practices[0].webiste === undefined) {
            nameResultArray[i].practices[0].webiste = "no website available";
          }

          console.log(nameResultArray.length);
          $('.nameResults').append("<div class='dr-card'><h4>"+ nameResultArray[i].profile.first_name + " " +nameResultArray[i].profile.last_name +"</h4><p>"+nameResultArray[i].practices[0].visit_address.street +"</p><p>" + nameResultArray[i].practices[0].visit_address.city + ", " + nameResultArray[i].practices[0].visit_address.state + " " +nameResultArray[i].practices[0].visit_address.zip + "</p><p>" + nameResultArray[i].practices[0].phones[0].number + "</p><p>" + nameResultArray[i].practices[0].webiste + "<p></div>");
        }
      } else {
        $('.nameResults').text("there were no results")
      }
    }, 1000);
  });

  $('#symptom-search').submit(function(event) {
    $('.symptomResults').empty();
    $('.welcome').hide();
    $('.nameResults').hide();
    $('.symptomResults').show();
    $('.specialtyResults').hide();
    $('.submittedResults').hide();
    $('.location').hide();
    event.preventDefault();
    let sypmtom = $('#symptoms').val();
    symptomResultArray = doctorFinder.findBySymptom(sypmtom);
    setTimeout(function() {
      if (symptomResultArray.length != 0) {
        for (var i = 0; i < symptomResultArray.length; i++) {
          if(symptomResultArray[i].practices[0].webiste === undefined) {
            symptomResultArray[i].practices[0].webiste = "no website available";
          }

          console.log(symptomResultArray.length);
          $('.symptomResults').append("<div class='dr-card'><h4>"+ symptomResultArray[i].profile.first_name + " " +symptomResultArray[i].profile.last_name +"</h4><p>"+symptomResultArray[i].practices[0].visit_address.street +"</p><p>" + symptomResultArray[i].practices[0].visit_address.city + ", " + symptomResultArray[i].practices[0].visit_address.state + " " +symptomResultArray[i].practices[0].visit_address.zip + "</p><p>" + symptomResultArray[i].practices[0].phones[0].number + "</p><p>" + symptomResultArray[i].practices[0].webiste + "<p></div>");
        }
      } else {
        $('.symptomResults').text("there were no results")
      }
    }, 1000);
  });

});
//
//${}
//${}
//${},${}${}
//${}
//${}
//
//
//

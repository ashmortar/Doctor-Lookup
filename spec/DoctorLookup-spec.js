import {DoctorFinder} from './../js/DoctorLookup.js';



describe('DoctorFinder', function() {
  let testFinder = new DoctorFinder();
  testFinder.setLatLongWithZip(97204);
  let nameTestArray;
  let symptomTestArray;
  let specialtyTestArray;
  let errorNameTest;
  let errorSymptomTest;
  setTimeout(function() {
    nameTestArray = testFinder.findByName("david smith");
  }, 100);
  setTimeout(function() {
    symptomTestArray = testFinder.findBySymptom("abdominal pain");
  }, 1000);
  setTimeout(function() {
    specialtyTestArray = testFinder.getSpecialties();
  }, 2000);


  beforeEach(function(done) {
    setTimeout(function() {
      done();
    }, 1000);
  });

  afterEach(function() {});

  it('test test ie math works', function (done) {
    expect(2+2).toEqual(4);
    done();
  });

  it('should be able to return a list of doctors when searched by name', function(done) {
      expect(3).toEqual(nameTestArray.length);
      expect("David").toEqual(nameTestArray[0].profile.first_name);
      expect("Smith").toEqual(nameTestArray[0].profile.last_name);
      expect("210 SE 136th Ave").toEqual(nameTestArray[0].practices[1].visit_address.street);
      expect("3609449889").toEqual(nameTestArray[0].practices[1].phones[0].number);
      expect("http://compassoncology.com/").toEqual(nameTestArray[0].practices[1].website);
      expect(true).toEqual(nameTestArray[0].practices[1].accepts_new_patients);
      done();
  });

  it('should be able to return a list of drs when searched by symptom', function(done) {
    expect(10).toEqual(symptomTestArray.length);
    done();
  });

  it('should be able to retrieve a list of all specialties', function(done) {
    expect(393).toEqual(specialtyTestArray.length);
    done();
  });
  //
  // it('should let us know if there are is an errorh', function(done) {
  //   expect("error").toEqual()
  // })
});

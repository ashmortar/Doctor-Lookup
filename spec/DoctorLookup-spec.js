import {DoctorFinder} from './../js/DoctorLookup.js';
import {apiKey} from './../.env';


describe('DoctorFinder', function() {
  let testFinder = new DoctorFinder();
  let resultsArray = testFinder.findByName("david smith");

  beforeEach(function(done) {
    setTimeout(function() {
      done();
    }, 500);
  });
  afterEach(function() {});

  it('test test ie math works', function (done) {
    expect(2+2).toEqual(4);
    done();
  });

  it('should be able to return a list of doctors', function(done) {
      expect(3).toEqual(resultsArray.length);
      expect("David").toEqual(resultsArray[0].profile.first_name);
      expect("Smith").toEqual(resultsArray[0].profile.last_name);
      expect("210 SE 136th Ave").toEqual(resultsArray[0].practices[1].visit_address.street);
      expect("3609449889").toEqual(resultsArray[0].practices[1].phones[0].number);
      expect("http://compassoncology.com/").toEqual(resultsArray[0].practices[1].website);
      expect(true).toEqual(resultsArray[0].practices[1].accepts_new_patients);
      done();
  });
});

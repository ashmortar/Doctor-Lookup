import {DoctorFinder} from './../js/DoctorLookup.js';
import {apiKey} from './../.env';


describe('DoctorFinder', function() {
  let testFinder = new DoctorFinder();

  beforeEach(function() {})
  afterEach(function() {})

  it('test test ie math works', function () {
    expect(2+2).toEqual(4);
  });

  it('should be able to return a list of doctors', function() {
      let resultsArray = testFinder.findByName("name");
      expect("someInt").toEqual(resultsArray);
    // A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
    // If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
  })
});

let apiKey = require('./../.env').apiKey;


export class DoctorFinder {
  constructor() {
  }

  findByName(name) {
    let resultsArray = [];
    return resultsArray;
  }



}
//----------REQUIRED-------------------------
// A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
// A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
// If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
// If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
// If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)
//-----------FURTHER EXPLORATION------------------
// Allow users to search by location (instead of just hardcoding a value for Portland). This will involve making two API calls: one to geocode the latitude and longitude of a location and then a second call to the BetterDoctor API.
// Add an additional API call to retrieve the list of specialities from the database before you query for a doctor, then return that list in a dropdown menu.
// Create a list of "recently viewed" doctors and display it.
// Create a list of "related doctors" and display it. You can define related however you wish.
// Add static pages, links to your GitHub, social media, and more.

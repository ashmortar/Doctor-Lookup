let apiKey = require('./../.env').apiKey;


export class DoctorFinder {
  constructor(zipcode) {
    this.portlandLat = 45.523;
    this.portlandLong = -122.679;
  }

  getLatLong() {

  }


  promiseBuilder(url) {
    return new Promise(function(resolve, reject) {
      console.log("api call started");
      let request = new XMLHttpRequest();
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
      console.log("api call sent");
    });
  }

  findByName(name) {
    let resultsArray = [];
    let  that = this;
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=${that.portlandLat}%2C${that.portlandLong}%2C50&user_location=${that.portlandLat}%2C${that.portlandLong}&skip=0&limit=10&user_key=${apiKey}`;
    console.log(url);
    let apiCall = that.promiseBuilder(url);

    apiCall.then(function(response) {
      console.log("api call response recieved");
      let body = JSON.parse(response);
      for (let i = 0; i < body.data.length; i++) {
        resultsArray.push(body.data[i]);
        console.log(body.data[i].profile.slug);
      }
    });
    return resultsArray;
  }

  findBySymptom(symptom) {
    let resultsArray = [];
    let  that = this;
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=${that.portlandLat}%2C${that.portlandLong}%2C50&user_location=${that.portlandLat}%2C${that.portlandLong}&skip=0&limit=10&user_key=${apiKey}`;
    console.log(url);
    let apiCall = that.promiseBuilder(url);

    apiCall.then(function(response) {
      console.log("api call response recieved");
      let body = JSON.parse(response);
      for (let i = 0; i < body.data.length; i++) {
        resultsArray.push(body.data[i]);
        console.log(body.data[i].profile.slug);
      }
    });
    return resultsArray;
  }
}
//----------REQUIRED-------------------------
// If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
// If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)
//-----------FURTHER EXPLORATION------------------
// Allow users to search by location (instead of just hardcoding a value for Portland). This will involve making two API calls: one to geocode the latitude and longitude of a location and then a second call to the BetterDoctor API.
// Add an additional API call to retrieve the list of specialities from the database before you query for a doctor, then return that list in a dropdown menu.
// Create a list of "recently viewed" doctors and display it.
// Create a list of "related doctors" and display it. You can define related however you wish.
// Add static pages, links to your GitHub, social media, and more.

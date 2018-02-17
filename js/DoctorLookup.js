let apiKey1 = require('./../.env').apiKey1;
let apiKey2 = require('./../.env').apiKey2;


export class DoctorFinder {
  constructor(zipcode) {
    this.latitude = null;
    this.longitude = null;
    this.errorResponse = null;
  }

  setLatLongWithZip(zipcode) {
    let resultsArray = [];
    let that = this;
    let apiCall = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://maps.googleapis.com/maps/api/geocode/json?&address=${zipcode}&key=${apiKey2}`;
      console.log(url);
      console.log("geocode api request started");
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.responseText));
          resultsArray.push(request.status);
          resultsArray.push(request.responseText);
        }
      };
      request.open("GET", url, true);
      request.send();
      console.log("geocode api requst sent");
    });

    apiCall.catch(function(e) {
      that.errorResponse = e;
      console.log(e);
    });

    apiCall.then(function(response) {
      console.log("geocode response recieved");
      let body = JSON.parse(response);
      resultsArray.push(body.results[0].formatted_address);
      that.latitude = body.results[0].geometry.location.lat;
      that.longitude = body.results[0].geometry.location.lng;
    });
    return resultsArray;
  }


  promiseBuilder(url) {
    return new Promise(function(resolve, reject) {
      console.log("betterdoctor api request started");
      let request = new XMLHttpRequest();
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.responseText));
        }
      };
      request.open("GET", url, true);
      request.send();
      console.log("betterdoctor api request sent");
    });
  }

  getSpecialties() {
    let resultsArray = [];
    let  that = this;
    let url = `https://api.betterdoctor.com/2016-03-01/specialties?user_key=${apiKey1}`;
    console.log(url);
    let apiCall = that.promiseBuilder(url);

    apiCall.catch(function(e) {
      that.errorResponse = e;
    });

    apiCall.then(function(response) {
      console.log("specialties response recieved");
      let body = JSON.parse(response);
      for (let i = 0; i < body.data.length; i++) {
        resultsArray.push(body.data[i]);
      }
    });
    return resultsArray;
  }

  findByName(name) {
    let resultsArray = [];
    let  that = this;
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=${that.latitude}%2C${that.longitude}%2C50&user_location=${that.latitude}%2C${that.longitude}&skip=0&limit=10&user_key=${apiKey1}`;
    console.log(url);
    let apiCall = that.promiseBuilder(url);

    apiCall.catch(function(e) {
      that.errorResponse = e;
    });

    apiCall.then(function(response) {
      console.log("find by name response recieved");
      let body = JSON.parse(response);
      for (let i = 0; i < body.data.length; i++) {
        resultsArray.push(body.data[i]);
      }
    });
    return resultsArray;
  }

  findBySymptom(symptom) {
    let resultsArray = [];
    let  that = this;
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=${that.latitude}%2C${that.longitude}%2C50&user_location=${that.latitude}%2C${that.longitude}&skip=0&limit=10&user_key=${apiKey1}`;
    console.log(url);
    let apiCall = that.promiseBuilder(url);

    apiCall.then(function(response) {
      console.log("find by symptom response recieved");
      let body = JSON.parse(response);
      for (let i = 0; i < body.data.length; i++) {
        resultsArray.push(body.data[i]);
      }
    });
    return resultsArray;
  }
}
//----------REQUIRED-------------------------
// If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)
//-----------FURTHER EXPLORATION------------------


// Create a list of "recently viewed" doctors and display it.
// Create a list of "related doctors" and display it. You can define related however you wish.
// Add static pages, links to your GitHub, social media, and more.

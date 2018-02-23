# _Doctor Finder_

#### search for providers near you

##### by Aaron Ross 2/16/2018

## Description

Search for providers near you by name or by your symptoms

## Setup
* clone repo from github
* Initialize NPM via  ```npm init```
* Install npm dependencies ```npm install```
* Initialize Bower (run ```bower init```)
* Install bower dependencies ```bower install``` to
* Initialize Karma (run ```karma init```)
* create a file in the root directory titled ```.env```
* acquire an api Key for the [Better Doctor API](https://developer.betterdoctor.com/) and save it in the ```.env``` file as ```exports.apiKey1 = "{YOUR API KEY HERE}";```
* acquire and [apiKey for the Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/get-api-key) and save it in the ```.env``` file as ```exports.apiKey2 = "{YOUR API KEY HERE};"```
* View chrome based jasmine results through karma with ```npm test```
* Run development server that will update when changes are made to css or js files with ```gulp serve```
* View the webapp either with the development server or open ```index.html``` in your browser of choice

## Known bugs
* jasmine V3 and above can cause issues

##Future Functionality
* allow user to search by specialty, as of now the dropdown populates but does not yet execute searches

## Technologies Used
* JavaScript
* html
* gulp
* jasmine
* Karma


### License
*This application is provided as-is under the MIT license.*

Copyright (c) **_Aaron Ross_**

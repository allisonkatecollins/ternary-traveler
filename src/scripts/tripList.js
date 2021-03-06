//get data, build HTML form from data, append to DOM

//to get data:
import tripCollection from "./tripCollection"
//to build HTML for each object in array in db
import trip from "./trip"

const tripList = {
  listify(){
    //1. get data
    //GET fetch, return a promise and data from db
    tripCollection.getAllInterests()
    .then(allInterests => {

      //create empty document fragment
      let tripDocFragment = document.createDocumentFragment();

      //2. iterate over data and build HTML for each item
      //loop over array of objects returned from db
      //for each object, make a call to tripBuilder method in trips.js
      //--tripBuilder takes trip object and returns HTML component
      //then append HTML to document fragment in order to slowly build it up
      //entire forEach loop will result in document fragment containing all HTML for our data
      allInterests.forEach(tripItem => {
        let tripHTML = trip.tripBuilder(tripItem)
        tripDocFragment.appendChild(tripHTML)
      })
      
      //3. append HTML to DOM
      //refer to HTML element with class "output" & append doc fragment to that element
      //HTML in doc fragment automatically appends to the DOM since it's attached to "output"
      let outputArticle = document.querySelector(".output")
      while (outputArticle.firstChild) {
        outputArticle.removeChild(outputArticle.firstChild);
      }
      outputArticle.appendChild(tripDocFragment)
    })
  }
}

export default tripList
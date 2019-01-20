//ADD NEW INTEREST
import tripCollection from "./tripCollection"
import tripList from "./tripList";

//SAVE button on form

const newInterestForm = {
 //build form and append to DOM
 //contains input fields for a user to add new point of interest
 //contains button with event listener that listens for click
 createAndAppendForm () {
   //1. build HTML form
   let formHeader = document.createElement("h3")
   formHeader.textContent = "Add a new point of interest to your itinerary"

   //NAME
   let interestNameField = document.createElement("fieldset")

   let interestNameLabel = document.createElement("label")
   interestNameLabel.textContent = "Name"
   interestNameLabel.setAttribute("for", "interest-name")
   let interestNameInput = document.createElement("input")
   interestNameInput.setAttribute("id", "interest-name")
   interestNameInput.setAttribute("name", "interest-name")

   interestNameField.appendChild(interestNameLabel)
   interestNameField.appendChild(interestNameInput)

   //DESCRIPTION
   let interestDescriptionField = document.createElement("fieldset")

   let interestDescriptionLabel = document.createElement("label")
   interestDescriptionLabel.textContent = "Description"
   interestDescriptionLabel.setAttribute("for", "interest-description")
   let interestDescriptionInput = document.createElement("input")
   interestDescriptionInput.setAttribute("id", "interest-description")
   interestDescriptionInput.setAttribute("name", "interest-description")

   interestDescriptionField.appendChild(interestDescriptionLabel)
   interestDescriptionField.appendChild(interestDescriptionInput)

   //COST
   let interestCostField = document.createElement("fieldset")

   let interestCostLabel = document.createElement("label")
   interestCostLabel.textContent = "Cost"
   interestCostLabel.setAttribute("for", "interest-cost")
   let interestCostInput = document.createElement("input")
   interestCostInput.setAttribute("id", "interest-cost")
   interestCostInput.setAttribute("name", "interest-cost")

   interestCostField.appendChild(interestCostLabel)
   interestCostField.appendChild(interestCostInput)

   //REVIEW
   let interestReviewField = document.createElement("fieldset")

   let interestReviewLabel = document.createElement("label")
   interestReviewLabel.textContent = "Review"
   interestReviewLabel.setAttribute("for", "interest-review")
   let interestReviewInput = document.createElement("input")
   interestReviewInput.setAttribute("id", "interest-review")
   interestReviewInput.setAttribute("name", "interest-review")

   interestReviewField.appendChild(interestReviewLabel)
   interestReviewField.appendChild(interestReviewInput)

   //LOCATION
   let interestLocationField = document.createElement("fieldset")

   let interestLocationLabel = document.createElement("label")
   interestLocationLabel.textContent = "Location"
   interestLocationLabel.setAttribute("for", "interest-location")
   let interestLocationInput = document.createElement("input")
   interestLocationInput.setAttribute("id", "interest-location")
   interestLocationInput.setAttribute("name", "location-review")

   interestLocationField.appendChild(interestLocationLabel)
   interestLocationField.appendChild(interestLocationInput)

   //loop through db cities with forEach
  /*  places.forEach(place => {
     output += `<select>
      <option> ${places.name}</option>
      <select>
     `
   }); */

   //2. create SAVE button and attach event listener
   let saveBtn = document.createElement("button")
   saveBtn.textContent = "Add New Interest"
   saveBtn.setAttribute("class", "interest-save")

   saveBtn.addEventListener("click", this.handleAddNewInterest)

   //3. append HTML form to DOM
   //append to "form" element in index.html
   let tripFormFragment = document.createDocumentFragment()
   tripFormFragment.appendChild(formHeader)
   tripFormFragment.appendChild(interestNameField)
   tripFormFragment.appendChild(interestDescriptionField)
   tripFormFragment.appendChild(interestCostField)
   tripFormFragment.appendChild(interestReviewField)
   tripFormFragment.appendChild(interestLocationField)
   tripFormFragment.appendChild(saveBtn)

   let formArticle = document.querySelector(".form")
   formArticle.appendChild(tripFormFragment)
 },

 //function that executes when button in form is clicked
 handleAddNewInterest () {
   //1. get user input
   // declare variables as values defined in HTML (with createElement above) using querySelector
    let inputInterestName = document.querySelector("#interest-name").value
    let inputInterestDescription = document.querySelector("#interest-description").value
    let inputInterestCost = document.querySelector("#interest-cost").value
    let inputInterestReview = document.querySelector("#interest-review").value
    let inputInterestLocation = document.querySelector("#interest-location").value

   //2. create new object with same structure I've been using
   let newInterest = {
     name: inputInterestName,
     description: inputInterestDescription,
     cost: inputInterestCost,
     location: inputInterestLocation,
     //location has dropdown with 3 cities from db
     review: inputInterestReview
   }

   //3. call POST method with fetch request to post new object to db
   tripCollection.postNewInterest(newInterest)
   .then(response => {
     tripList.listify()
   })
 }
}

export default newInterestForm
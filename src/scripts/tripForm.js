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

   interesCostField.appendChild(interestCostLabel)
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
   let interestLocationField = document.createElement

   //loop through db cities with forEach
   places.forEach(place => {
     
   });

/*    <select>
 <option value="volvo">Volvo</option>
 <option value="saab">Saab</option>
 <option value="mercedes">Mercedes</option>
 <option value="audi">Audi</option>
</select>

*/
   //2. create SAVE button and attach event listener

   //3. append HTML form to DOM
   //append to "form" element in index.html
 },
 //function that executes when button in form is clicked
 handleAddNewInterest () {
   //1. get user input
   // declare variables as values defined in HTML (with createElement above) using querySelector

   //2. create new object with same structure I've been using
   let newInterest = {
     name: "",
     description: "",
     cost: "",
     location: "",
     //location has dropdown with 3 cities from db
     review: ""
   }

   //call POST method with fetch request to post new object to db
   //--this method was defined in tripCollection
   tripCollection.postNewInterest(newInterest)

.then(response => {
     tripList.createTrip()
   })
 }
}

export default newInterestForm
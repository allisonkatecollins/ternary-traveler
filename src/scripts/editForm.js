import tripCollection from "./tripCollection"
import tripList from "./tripList";

const tripEditForm = {
  //build an edit form and append it to the DOM
  //form will contain input fields with existing values from the API
  //contains UPDATE button
  //event listener on UPDATE button will handle taking new values entered by the user & calling API to update the data
  createAndAppendForm(articleId, tripObjToEdit) {
  
    //input fields contain existing values
    //COST
    let interestCostField = document.createElement("p")

    let interestCostLabel = document.createElement("label")
    interestCostLabel.textContent = "Cost"
    let interestCostInput = document.createElement("input")
    interestCostInput.value = tripObjToEdit.cost

    interestCostField.appendChild(interestCostLabel)
    interestCostField.appendChild(interestCostInput)

    //REVIEW
    let interestReviewField = document.createElement("p")

    let interestReviewLabel = document.createElement("label")
    interestReviewLabel.textContent = "Review"
    let interestReviewInput = document.createElement("input")
    interestReviewInput.value = tripObjToEdit.review

    interestReviewField.appendChild(interestReviewLabel)
    interestReviewField.appendChild(interestReviewInput)

    //BUTTON
    let updateBtn = document.createElement("button")
    updateBtn.textContent = "Update"

    //BUTTON EVENT LISTENER
    //take new values in input fields and build object for item to be edited
    updateBtn.addEventListener("click", () => {
      let editedInterest = {
        name: tripObjToEdit.name,
        description: tripObjToEdit.description,
        cost: interestCostInput.value,
        review: interestReviewInput.value,
        location: tripObjToEdit.location,
        placeId: tripObjToEdit.placeId
      }

      console.log(editedInterest)

      //make PUT request where I target interest item to edit by specifying the ID in the URL
      //pass object representing interest item with new values as data in the PUT request
      //because the data has been modified, make a GET request to get all items and display them
      
      tripCollection.putExistingInterest(tripObjToEdit.id, editedInterest)
      .then(response => {
        tripList.listify()
      })
      console.log(tripObjToEdit)
    })

    //pass in ID of the article so I know exactly where to append the edit form
    let tripItemArticle = document.querySelector(`#${articleId}`)

    //I want to replace what is currently in the article element with the edit form
    //--clear out all children HTML elements in targeted element
    //--then append edit form to it
    while (tripItemArticle.firstChild) {
      tripItemArticle.removeChild(tripItemArticle.firstChild);
    }
    tripItemArticle.appendChild(interestCostField)
    tripItemArticle.appendChild(interestReviewField)
    tripItemArticle.appendChild(updateBtn)
  }
}
export default tripEditForm
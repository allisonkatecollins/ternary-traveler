import tripCollection from "./tripCollection";
import tripList from "./tripList";
import tripEditForm from "./editForm"

//builds HTML and returns it

//contains DELETE button
const trip = {

  tripBuilder(tripObject) {
    let tripArticle = document.createElement("article")
    //what does "trip" within the string interpolation do?
    //I don't really understand what goes into making an article/what attributes it ought to have
    tripArticle.setAttribute("id", `trip--${tripObject.id}`)
    
    let tripName = document.createElement("h3")
    tripName.textContent = tripObject.name
    
    let tripDescription = document.createElement("p")
    tripDescription.textContent = tripObject.description

    let tripCost = document.createElement("p")
    tripCost.textContent = tripObject.cost

    let tripReview = document.createElement("p")
    tripReview.textContent = tripObject.review

    //this needs to correspond to id 1, 2, or 3 as selected on dropdown menu
    let tripLocation = document.createElement("p")
    tripLocation.setAttribute("id", `${tripObject.placeId}`)
    tripLocation.textContent = tripObject.place.name
 
    //EDIT button
    let editBtn = document.createElement("button")
    editBtn.textContent = "Edit"
    editBtn.addEventListener("click", () => {
      let articleId = event.target.parentNode.id
      let placeId = articleId.split("--")[1]
      tripCollection.getAllInterests(placeId)
      .then(response => {
        tripEditForm.createAndAppendForm(articleId, response)
      })
    })

    //DELETE button
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener("click", () => {
      //look into window.confirm() functionality
      alert("Are you sure you want to delete this interest?")
      //need a better understanding of line below
      //placeId same var used in fetch calls in tripCollection - is this right?
      let placeId = event.target.parentNode.id.split("--")[1]
      tripCollection.deleteInterest(placeId)
      .then(response => {
        tripList.listify()
      })
    })

    tripArticle.appendChild(tripName)
    tripArticle.appendChild(tripDescription)
    tripArticle.appendChild(tripCost)
    tripArticle.appendChild(tripReview)
    tripArticle.appendChild(tripLocation)
    tripArticle.appendChild(editBtn)
    tripArticle.appendChild(deleteBtn)

  return tripArticle
  }
}

export default trip
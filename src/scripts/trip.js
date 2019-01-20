//builds HTML and returns it

//contains DELETE button
const trip = {
  // This method takes one argument, which we expect to be an object that represents a food and will have the following structure:
  // {
  //  name: ""
  //  description: ""
  //  cost: ""
  //  review: ""
  //  location: ""
  // }

  // Given this object, the method will build HTML elements and append them appropriately so that it will look like this:
  // <article>
  //   <h3>name value</h3>
  //   <p>description</p>
  //   <p>cost</p>
  //   <p>review</p>
  //   <p>location</p>
  // </article>

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
    tripLocation.textContent = setAttribute("id", `${place.id}`)

    //DELETE button
    //"are you sure?" alert --> YES or NO

    tripArticle.appendChild(tripName)
    tripArticle.appendChild(tripDescription)
    tripArticle.appendChild(tripCost)
    tripArticle.appendChild(tripReview)
    tripArticle.appendChild(tripLocation)
    tripArticle.appendChild(deleteBtn)

    //create card container for forms
   let cardContainer = document.querySelector(".card")
   cardContainer.appendChild(tripArticle)

  return tripArticle
  }
}

export default trip
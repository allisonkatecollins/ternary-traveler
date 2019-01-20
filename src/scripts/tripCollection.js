//interacts with the database
//define all fetch calls here

const tripCollection = {
  //GET, POST, PUT, DELETE (any others?)
  //GET - access entire database

  //access id of places in db
  getAllPlaces() {
    return fetch("http://localhost:8088/places")
    .then(response => response.json())
  },

  //access existing interests in db
  getAllInterests() {
    return fetch("http://localhost:8088/interests")
    .then(response => response.json())
  },
  //POST - add new info to database
  postNewInterest() {
    return fetch("http://localhost:8088/interests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    })
  },
  //delete previously stored point of interest by targeting id of the item
  deleteInterest(placeId) {
    return fetch(`http://localhost:8088/trip/${placeId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  },
  //edit interest - requires 2 fetch calls
  //**don't confuse getInterest with getAllInterests!!**
  getInterest(placeId) {
    return fetch(`http://localhost:8088/trip/${placeId}`)
    .then(response => response.json())
  },
  //2 arguments: placeId to identify particular item to edit, interestToEdit to replace existing data
  putExistingInterest(placeId, interestToEdit) {
    return fetch(`http://localhost:8088/trip/${placeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(interestToEdit)
    })
  }
}

export default tripCollection
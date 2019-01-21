import newInterestForm from "./tripForm"
import tripList from "./tripList"
import trip from "./trip"
import editForm from "./editForm"

//I've realized I don't quite understand what this module is doing
//--is it acting as a return to the functions listed below?

editForm.createAndAppendForm()
newInterestForm.createAndAppendForm()
tripList.listify()
trip.tripBuilder()
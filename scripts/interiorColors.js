import { setInteriorChoice } from "./transientState.js"

export const InteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiorColors")
    const interiorColors = await response.json()

        document.addEventListener("change", handleInteriorColorChoice)

    let interiorColorHTML =  `<select id="interiorColor">
        <option value="0">Choose a Interior Color...</option>`

        // set the beginning of the HTML so that it will be a select dropdown menu that firstly displays "Choose a Interior Color"
    
    
    const interiorColorOptions = interiorColors.map(interiorColor => {
        return `<option value="${interiorColor.id}">${interiorColor.material}</option>`
    })

    // created a map function that takes each interiorColor and converts it to display as another option in the drop down menu

    interiorColorHTML += interiorColorOptions.join("")

    // join all of the responses gotten from running our interiorColor array through the map function so they all display in the dropdown menu

    interiorColorHTML += `</select>`

    return interiorColorHTML
}

const handleInteriorColorChoice = (event) => {

    if (event.target.id === "interiorColor") {
        setInteriorChoice(event.target.value)
    }
}

document.addEventListener("change", handleInteriorColorChoice)
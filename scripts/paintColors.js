import { setPaintChoice } from "./transientState.js"

export const PaintOptions = async () => {
    const response = await fetch("http://localhost:8088/paintColors")
    const paintColors = await response.json()

        document.addEventListener("change", handlePaintColorChoice)

    let paintColorHTML =  `<select id="paintColor">
        <option value="0">Choose a Paint Color...</option>`

        // set the beginning of the HTML so that it will be a select dropdown menu that firstly displays "Choose a Paint Color"
    
    
    const paintColorOptions = paintColors.map(paintColor => {
        return `<option value="${paintColor.id}">${paintColor.color}</option>`
    })

    // created a map function that takes each paintColor and converts it to display as another option in the drop down menu

    paintColorHTML += paintColorOptions.join("")

    // join all of the responses gotten from running our paintColor array through the map function so they all display in the dropdown menu

    paintColorHTML += `</select>`

    return paintColorHTML
}

const handlePaintColorChoice = (event) => {

    if (event.target.id === "paintColor") {
        setPaintChoice(event.target.value)
    }
}

document.addEventListener("change", handlePaintColorChoice)
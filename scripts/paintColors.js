import { setPaintChoice } from "./transientState.js"

export const PaintOptions = async () => {
    const response = await fetch("http://localhost:8088/paintColors")
    const paintColors = await response.json()

    const paintColorsHTML = paintColors.map((paintColor => {
        return `<input type="radio" name="paintColor" value=${paintColor.id} /> ${paintColor.color}`
    })
)
    return paintColorsHTML.join("")
}

const handlePaintColorChoice = (event) => {

    if (event.target.name === "paintColor") {
        setPaintChoice(event.target.value)
    }
}

document.addEventListener("change", handlePaintColorChoice)
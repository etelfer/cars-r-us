import { setInteriorChoice } from "./transientState.js"

export const InteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiorColors")
    const interiorColors = await response.json()

    const interiorColorsHTML = interiorColors.map((interiorColor => {
        return `<input type="radio" name="interiorColor" value=${interiorColor.id} /> ${interiorColor.material}`
    })
)
    return interiorColorsHTML.join("")
}

const handleInteriorColorChoice = (event) => {

    if (event.target.name === "interiorColor") {
        setInteriorChoice(event.target.value)
    }
}

document.addEventListener("change", handleInteriorColorChoice)
import { setWheelChoice } from "./transientState.js"

export const WheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheel = await response.json()

    const wheelsHTML = wheels.map((wheel => {
        return `<input type="radio" name="wheel" value=${wheel.id} /> ${wheel.style}`
    })
)
    return wheelsHTML.join("")
}

const handleWheelChoice = (event) => {

    if (event.target.name === "wheel") {
        setWheelChoice(event.target.value)
    }
}

document.addEventListener("change", handleWheelChoice)
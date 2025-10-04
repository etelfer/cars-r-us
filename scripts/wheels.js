import { setWheelChoice } from "./transientState.js"

export const WheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    document.addEventListener("change", handleWheelChoice)

   let wheelHTML =  `<select id="wheel">
        <option value="0">Choose a Wheel Style...</option>`

        // set the beginning of the HTML so that it will be a select dropdown menu that firstly displays "Choose a Wheel Style"
    
    
    const wheelOptions = wheels.map(wheel => {
        return `<option value="${wheel.id}">${wheel.style}</option>`
    })

    // created a map function that takes each wheel and converts it to display as another option in the drop down menu

    wheelHTML += wheelOptions.join("")

    // join all of the responses gotten from running our wheel array through the map function so they all display in the dropdown menu

    wheelHTML += `</select>`

    return wheelHTML
}

const handleWheelChoice = (event) => {

    if (event.target.id === "wheel") {
        setWheelChoice(event.target.value)
    }
}

document.addEventListener("change", handleWheelChoice)